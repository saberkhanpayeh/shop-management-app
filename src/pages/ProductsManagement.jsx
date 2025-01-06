import React, { useState } from 'react'
import TableRow from '../components/TableRow'
import { useProductDetails } from '../services/queries'
import OperationModal from '../components/operationModal';
import { useDispatch, useSelector } from 'react-redux';
import { addProductForm, editProductForm } from '../features/modal/modalSlice';
import AlertModal from '../components/AlertModal';
import Pagination from '../components/Pagination';
import SearchProducts from '../components/SearchProducts';
import styles from "./ProductsManagement.module.css";
function ProductsManagement() {
  const modalState=useSelector((store)=>store.modal);
  const modalDispatch=useDispatch();
  // const [modalType,setModalType]=useState("");
  // const [paginatedProducts,setPaginatedProducts]=useState([]);
  const [searchProducts,setSearchProducts]=useState("");
  const [itemOffset, setItemOffset] = useState(1);
  console.log("itemOffset",itemOffset);
  const {data,error,isLoading,isError,isFetching}=useProductDetails(itemOffset,searchProducts);
  const products=data?.data.data;
  const totalPages=data?.data?.totalPages || 3;
  // console.log({data,isFetching,isLoading});
  // console.log(products);
  const addProductHandler=()=>{
    modalDispatch(addProductForm());
  }
  console.log(searchProducts);
  // console.log(modalState);
  return (
    <div className={styles.container}>
     <SearchProducts setSearchProducts={setSearchProducts}/>
      <div className={styles.addProduct}>
        <div >
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.25 27.5H18.75C25 27.5 27.5 25 27.5 18.75V11.25C27.5 5 25 2.5 18.75 2.5H11.25C5 2.5 2.5 5 2.5 11.25V18.75C2.5 25 5 27.5 11.25 27.5Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M19.4624 23.125V18.25" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M19.4624 9.3125V6.875" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M19.4624 15.8125C21.2573 15.8125 22.7124 14.3574 22.7124 12.5625C22.7124 10.7676 21.2573 9.3125 19.4624 9.3125C17.6675 9.3125 16.2124 10.7676 16.2124 12.5625C16.2124 14.3574 17.6675 15.8125 19.4624 15.8125Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M10.5376 23.125V20.6875" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M10.5376 11.75V6.875" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M10.5376 20.6875C12.3325 20.6875 13.7876 19.2324 13.7876 17.4375C13.7876 15.6426 12.3325 14.1875 10.5376 14.1875C8.74267 14.1875 7.2876 15.6426 7.2876 17.4375C7.2876 19.2324 8.74267 20.6875 10.5376 20.6875Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <p>
            مدیریت کالا
          </p>
        </div>
        <button onClick={addProductHandler}>افزودن محصول</button>
      </div>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>نام کالا</th>
              <th>موجودی</th>
              <th>قیمت</th>
              <th>شناسه کالا</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {isLoading &&<tr>isLoading....</tr>}
            {products && products.map((product)=>(
              <TableRow key={product.id} product={product}/>
            ))}
          </tbody>
        </table>
      </div>
      {
        (products && !isFetching && !isLoading) &&<Pagination  itemOffset={itemOffset} setItemOffset={setItemOffset} totalPages={totalPages}/>
      } 
      {modalState.modalType && modalState.modalType!=="REMOVE_PRODUCT" ? <OperationModal/>:null}
      {modalState.modalType==="REMOVE_PRODUCT" ? <AlertModal/>:null}
    </div>
  )
}

export default ProductsManagement