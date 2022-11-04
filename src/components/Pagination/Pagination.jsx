import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useSearchParams } from 'react-router-dom';
import { PaginationRow } from './Pagination.styled';

const pagination = document.getElementById('container');

const PaginatedItems = ({ response, setSearchParams, page }) => {
  const [pageCount, setPageCount] = useState(0);
  const [searchParams] = useSearchParams();
  const params = Object.fromEntries([...searchParams]);

  const { total_pages: totalPages } = response;
  useEffect(() => {
    setPageCount(totalPages);
  }, [totalPages]);

  const handlePageClick = e => {
    const newPage = e.selected + 1;
    setSearchParams({ ...params, page: newPage });
  };

  return createPortal(
    <>
      <PaginationRow
        breakLabel="..."
        nextLabel="Next >>"
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<< Prev"
        renderOnZeroPageCount={null}
        marginPagesDisplayed={1}
        onPageChange={handlePageClick}
        forcePage={Number(page) - 1}
      />
    </>,
    pagination
  );
};

export default PaginatedItems;
