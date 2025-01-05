import React from 'react'
import { useForm } from 'react-hook-form';
import { useActionData, useNavigate } from 'react-router-dom';
import { useAddProduct } from '../services/mutations';
import { useDispatch, useSelector } from 'react-redux';
import { removeProductForm } from '../features/modal/modalSlice';
import { useInvalidateQuery } from '../services/queries';

function OperationModal() {
    const modalState=useSelector((store)=>store.modal);
    const modalDispatch=useDispatch();
    const invalidateQuery=useInvalidateQuery();
    const {mutate:addMutate}=useAddProduct();
    const navigate=useNavigate();
    const {
          register,
          handleSubmit,
          formState: { errors },
        } = useForm();
        const onSubmit=(data)=>{
            console.log(data);
            if(modalState.modalType==="ADD_FORM")
            {
                addMutate(data,{
                    onSuccess:(data)=>{
                        console.log(data);
                        modalDispatch(removeProductForm());
                        invalidateQuery(["products"]);
                        navigate("/");

                    },
                    onError:(error)=>{
                        console.log(error.response.data.message);
                        setTimeout(()=>{
                            navigate("/login");
                        },2000);
                      }
                });
            }
        }
  return (
    <div>
    <p>{modalState.formTitle}</p>
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">نام کالا</label>
      <input {...register("name")} placeholder="نام کالا" />
      <label htmlFor="quantity">تعداد موجودی</label>
      <input {...register("quantity")} placeholder="تعداد" />
      <label htmlFor="price">قیمت</label>
      <input {...register("price")} placeholder="قیمت" />
      <div>
        <button>{modalState.cancelBtn}</button>
        <button type='submit'>{modalState.confirmBtn}</button>
      </div>
    </form>
    </div>
  )
}

export default OperationModal