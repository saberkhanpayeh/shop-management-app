import React, { useState } from 'react'
import TableRow from '../components/TableRow'
import { useProductDetails } from '../services/queries'
import OperationModal from '../components/operationModal';
import { useDispatch, useSelector } from 'react-redux';
import { addProductForm, editProductForm } from '../features/modal/modalSlice';
import AlertModal from '../components/AlertModal';
import Pagination from '../components/Pagination';
import SearchProducts from '../components/SearchProducts';

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
    <div>
     <SearchProducts setSearchProducts={setSearchProducts}/>
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