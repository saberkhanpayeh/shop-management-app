import React, { useState } from 'react'
import TableRow from '../components/TableRow'
import { useProductDetails } from '../services/queries'
import OperationModal from '../components/operationModal';
import { useDispatch, useSelector } from 'react-redux';
import { addProductForm } from '../features/modal/modalSlice';

function ProductsManagement() {
  const modalState=useSelector((store)=>store.modal);
  const modalDispatch=useDispatch();
  // const [modalType,setModalType]=useState("");
  const {data,error,isLoading,isError,isFetching}=useProductDetails();
  const products=data?.data.data;
  console.log({data,isFetching,isLoading});
  console.log(products);
  const addProductHandler=()=>{
    modalDispatch(addProductForm());
  }
  console.log(modalState);
  return (
    <div>
      <div>
        <input type="text" />
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
      {modalState.modalType==="ADD_FORM"? <OperationModal/>:null}
    </div>
  )
}

export default ProductsManagement