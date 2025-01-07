import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';
import { useInvalidateQuery, useProductDetails } from '../services/queries';
import { useNavigate } from 'react-router-dom';
import styles from "./Pagination.module.css"
function Pagination({itemOffset,setItemOffset,totalPages }) {
    console.log("total Pages",totalPages);
    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = event.selected+1
      console.log(
        `User requested page number ${event.selected+1}, which is offset ${newOffset}`
      );
     
      setItemOffset(newOffset);
    //   invalidateQuery(["products",itemOffset]);
    //   navigate("/")
      
    };
  
    return (
      <>
          <ReactPaginate
          breakLabel="..."
          nextLabel={totalPages > 4 ? "بعدی" : null}
          onPageChange={handlePageClick}
          forcePage={itemOffset-1}
          pageRangeDisplayed={5}
          pageCount={totalPages}
          previousLabel={itemOffset > 1 ? "قبلی" : null}
          renderOnZeroPageCount={null}
          containerClassName={styles.pagination}
          pageLinkClassName={styles.pageNumber}
          previousLinkClassName={itemOffset<=1?styles.disabled:styles.pageNumber}
          nextLinkClassName={totalPages<=4?styles.disabled:styles.pageNumber}
          activeLinkClassName={styles.active}
        />
    
      </>
    );
  }

  export default Pagination;