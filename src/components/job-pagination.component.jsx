import React, { Fragment } from "react";
import { Pagination } from "react-bootstrap";


const JobsPagination = ({ page, setPage, hasNextPage }) => {
    const goToPage=(amount)=>{
        setPage(prevPage=>prevPage+amount);
    }
    return (
        <Pagination>
            {page !== 1 && <Pagination.Prev onClick={()=>goToPage(-1)}/>}
            {page !== 1 && <Pagination.Item onClick={()=>setPage(1)}>1</Pagination.Item>}
            {page > 2 && <Pagination.Ellipsis />}
            {page > 2 && <Pagination.Item onClick={()=>goToPage(-1)}>{page - 1}</Pagination.Item>}
            <Pagination.Item active>{page}</Pagination.Item>
            {hasNextPage && (
                <Fragment>
                    <Pagination.Item onClick={()=>goToPage(1)} >{page + 1}</Pagination.Item>
                    <Pagination.Next onClick={()=>goToPage(1)} />
                </Fragment>
            )}
        </Pagination>
    );
};

export default JobsPagination;
