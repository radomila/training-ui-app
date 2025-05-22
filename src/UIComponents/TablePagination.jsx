import React from 'react';
import {Container, Pagination, PaginationItem, PaginationLink} from "reactstrap";

export function TablePagination ({ firstPage, rowsPerPage, currentPage, setCurrentPage, totalNumOfRows }) {
    const totalNumOfPages = Math.ceil(totalNumOfRows / rowsPerPage);
    const pages = Array.from({ length: totalNumOfPages }, (_, i) => i + 1);

    return(
        <Container className="d-flex justify-content-center mt-5">
            <Pagination>
                <PaginationItem disabled={currentPage === firstPage}>
                    <PaginationLink
                        first
                        onClick={() => setCurrentPage(firstPage)}
                    />
                </PaginationItem>
                <PaginationItem disabled={currentPage === firstPage}>
                    <PaginationLink
                        previous
                        onClick={() => setCurrentPage(currentPage - firstPage)}
                    />
                </PaginationItem>
                {pages.map((page, i) => (
                    <PaginationItem active={page === currentPage} key={i}>
                        <PaginationLink onClick={() => setCurrentPage(page)}>
                            {page}
                        </PaginationLink>
                    </PaginationItem>
                ))}
                <PaginationItem disabled={currentPage === totalNumOfPages}>
                    <PaginationLink
                        next
                        onClick={() => setCurrentPage(currentPage + firstPage)}
                    />
                </PaginationItem>
                <PaginationItem disabled={currentPage === totalNumOfPages}>
                    <PaginationLink
                        last
                        onClick={() => setCurrentPage(totalNumOfPages)}
                    />
                </PaginationItem>
            </Pagination>
        </Container>
    )
}