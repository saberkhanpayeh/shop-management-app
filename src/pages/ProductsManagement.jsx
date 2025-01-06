import React, { useState } from 'react'
import TableRow from '../components/TableRow'
import { useProductDetails } from '../services/queries'
import OperationModal from '../components/operationModal';
import { useDispatch, useSelector } from 'react-redux';
import { addProductForm, editProductForm } from '../features/modal/modalSlice';
import AlertModal from '../components/AlertModal';
import Pagination from '../components/Pagination';

function ProductsManagement() {
  const modalState=useSelector((store)=>store.modal);
  const modalDispatch=useDispatch();
  // const [modalType,setModalType]=useState("");
  // const [paginatedProducts,setPaginatedProducts]=useState([]);
  const [itemOffset, setItemOffset] = useState(1);
  console.log("itemOffset",itemOffset);
  const {data,error,isLoading,isError,isFetching}=useProductDetails(itemOffset);
  const products=data?.data.data;
  const totalPages=data?.data?.totalPages || 3;
  // console.log({data,isFetching,isLoading});
  // console.log(products);
  const addProductHandler=()=>{
    modalDispatch(addProductForm());
  }

  // console.log(modalState);
  return (
    <div>
      <div>
        <input type="text" />
        <button>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke="#282828" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M22 22L20 20" stroke="#282828" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
      <div>
        <p>
          مدیریت کالا
        </p>
        <button onClick={addProductHandler}>افزودن محصول</button>
      </div>
      <table>
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
      {
        (products && !isFetching && !isLoading) &&<Pagination  itemOffset={itemOffset} setItemOffset={setItemOffset} totalPages={totalPages}/>
      } 
      {modalState.modalType && modalState.modalType!=="REMOVE_PRODUCT" ? <OperationModal/>:null}
      {modalState.modalType==="REMOVE_PRODUCT" ? <AlertModal/>:null}
    </div>
  )
}

export default ProductsManagement