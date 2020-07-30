import { useReducer, useEffect } from "react";
import axios from "axios";

const ActionTypes={
    FETCH_START:'FETCH_START',
    FETCH_SUCCESS:'FETCH_SUCCESS',
    FETCH_ERROR:'FETCH_ERROR',
    HAS_NEXT_PAGE:'HAS_NEXT_PAGE'
}

const INITIAL_STATE = { jobs: [], isLoading: true, error: undefined,hasNextPage: false };

const reducer = (state,action)=>{
    switch (action.type) {
        case ActionTypes.FETCH_START:
            return INITIAL_STATE;
        case ActionTypes.FETCH_SUCCESS:
            return {
                ...state,
                jobs: action.payload,
                isLoading: false,
                error: undefined
            }
        case ActionTypes.FETCH_ERROR:
            return{
                ...state,
                error: action.payload,
                isLoading: false,
                jobs:[]
            }
        case ActionTypes.HAS_NEXT_PAGE:
            return{
                ...state,
                hasNextPage: action.payload
            }
        default:
            return state;
    }
}
const BASE_URL = "https://jobs.github.com/positions.json";

const useFetchJobs= (parameters,page)=>{

    const [state,dispatch]= useReducer(reducer,INITIAL_STATE);
    useEffect(()=>{
        const cancelToken1 = axios.CancelToken.source();  // used to cancel axios request
        const cancelToken2 = axios.CancelToken.source();

        dispatch({ type: ActionTypes.FETCH_START });
        axios
            .get(BASE_URL, {
                cancelToken: cancelToken1.token,   
                params: { markdown: true, page: page-1, ...parameters },  // page in API starts at 0
            })
            .then((res) => {
                dispatch({
                    type: ActionTypes.FETCH_SUCCESS,
                    payload: res.data ,
                });
            })
            .catch((e) => {
                if (axios.isCancel(e)) return;   // if we ourselves canceled the req, then it is not actually an error 
                dispatch({ type: ActionTypes.FETCH_ERROR, payload: e.response.data});
            });
            // make request for next page and if result length not 0 that means next page exists
        axios
            .get(BASE_URL, {
                cancelToken: cancelToken2.token,   
                params: { markdown: true, page: page, ...parameters },
            })
            .then((res) => {
                dispatch({
                    type: ActionTypes.HAS_NEXT_PAGE,
                    payload: res.data.length!==0 ,
                });
            })
            .catch((e) => {
                if (axios.isCancel(e)) return;   // if we ourselves canceled the req, then it is not actually an error 
                dispatch({ type: ActionTypes.FETCH_ERROR, payload: e.response.data});
            });
            return () => {
                // before next useEffect fires, cancel previous axios request if still ongoing..basically as we type in search box, for each char typed,
                // FETCH_START is dispatched, so we don't want previous axios req to fire as we type more chars
                cancelToken1.cancel();  
                cancelToken2.cancel();  
            };

    },[parameters,page]);
    
    return state;
}

export default useFetchJobs;