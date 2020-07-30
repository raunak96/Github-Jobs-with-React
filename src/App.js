import React, { useState } from "react";
import useFetchJobs from "./effects/useFetchJobs";
import { Container } from "react-bootstrap";
import Job from "./components/job.component";
import JobsPagination from "./components/job-pagination.component";
import SearchForm from "./components/search-form.component";

const App = () => {

    const [params,setParams]= useState({});
    const [page,setPage]= useState(1);
    const { jobs, isLoading, error,hasNextPage } = useFetchJobs(params,page);
    
    const handleParamChange=(e)=>{
        var {name:param,value}= e.target;

        if(e.target.type==='checkbox')
            value=e.target.checked;
        setPage(1); //since params changed search result starts from 1st page
        setParams(prevParams=>({...prevParams,[param]:value}))
    }

    return (
        <div>
            <Container className="my-4">
                <h1 className="mb-4">GitHub Jobs</h1>
                <SearchForm params={params} onParamChange={handleParamChange} />
                <JobsPagination hasNextPage={hasNextPage} page={page} setPage={setPage} />
                {isLoading && <h1>Loading...</h1>}
                {error && <h1>Error...Try Refreshing</h1>}
                {jobs.map((job) => {
                    return <Job key={job.id} job={job} />;
                })}
                <JobsPagination hasNextPage={hasNextPage} page={page} setPage={setPage} />
            </Container>
        </div>
    );
};

export default App;
