import React, { useState } from 'react'
import TableRow from '../components/TableRow'
import { useProductDetails } from '../services/queries'

function ProductsManagement() {
  const {data,error,isLoading,isError,isFetching}=useProductDetails();
  const products=data?.data.data;
  console.log({data,isFetching,isLoading});
  console.log(products)
  return (
    <div>
      <div>
        <input type="text" />
      </div>
      <div>
        <p>
          مدیریت کالا
        </p>
        <button>افزودن محصول</button>
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
    </div>
  )
}

export default ProductsManagement