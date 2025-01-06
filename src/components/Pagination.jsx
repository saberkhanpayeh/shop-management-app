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
          nextLabel="next >"
          onPageChange={handlePageClick}
          forcePage={itemOffset-1}
          pageRangeDisplayed={5}
          pageCount={totalPages}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          containerClassName={styles.pagination}
          pageLinkClassName={styles.pageNumber}
          previousLinkClassName={styles.pageNumber}
          nextLinkClassName={styles.pageNumber}
          activeLinkClassName={styles.active}
        />
    
      </>
    );
  }

  export default Pagination;