import React from 'react'
import { useForm } from 'react-hook-form';
import { useActionData, useNavigate } from 'react-router-dom';
import { useAddProduct, useEditProduct } from '../services/mutations';
import { useDispatch, useSelector } from 'react-redux';
import { removeProductForm } from '../features/modal/modalSlice';
import { useInvalidateQuery } from '../services/queries';
import { productDestructure } from '../utils/helper';
import { useNavigateLoginPage } from '../hooks/navigateHooks';
import styles from "./OperationModal.module.css";

function OperationModal() {
    const modalState=useSelector((store)=>store.modal);
    const modalDispatch=useDispatch();
    const invalidateQuery=useInvalidateQuery();
    const {mutate:addMutate}=useAddProduct();
    const {mutate:editMutate}=useEditProduct();
    const navigate=useNavigate();
    const navigateLoginPage=useNavigateLoginPage();
    // console.log(modalState.product);
    const defaultValues=modalState.modalType==="EDIT_FORM" && productDestructure(modalState);
    const {
          register,
          handleSubmit,
          reset,
          formState: { errors },
        } = useForm({
            defaultValues,
        });
    const refreshProductsPage=()=>{
      invalidateQuery(["products"]);
      modalDispatch(removeProductForm());
      navigate("/");
    }
    // const navigateLoginPage=(time=2000)=>{
    //   setTimeout(()=>{
    //     navigate("/login");
    //   },time)
    // }
        const onSubmit=(data)=>{
            console.log(data);
            if(modalState.modalType==="ADD_FORM")
            {
                addMutate(data,{
                    onSuccess:(data)=>{
                        // console.log(data);
                        refreshProductsPage();
                    },
                    onError:(error)=>{
                        console.log(error.response.data.message);
                        navigateLoginPage();
                      }
                });
            }
            else if(modalState.modalType==="EDIT_FORM")
            {
              console.log(data);
              editMutate(data,{
                onSuccess:(data)=>{
                  // console.log(data);
                  refreshProductsPage();
                },
                onError:(error)=>{
                  console.log(error.response.data.message);
                  navigateLoginPage();
                }
              })
            }
        }
        const cancelHandler=()=>{
          // console.log("cancel")
          // reset({name:"",quantity:null,price:null});
          modalDispatch(removeProductForm());
          navigate("/");
        }
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
          <p>{modalState.formTitle}</p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <label htmlFor="name">نام کالا</label>
              <input {...register("name")} placeholder="نام کالا" />
              <label htmlFor="quantity">تعداد موجودی</label>
              <input {...register("quantity")} placeholder="تعداد" />
              <label htmlFor="price">قیمت</label>
              <input {...register("price")} placeholder="قیمت" />
              <div>
                <button type='submit'>{modalState.confirmBtn}</button>
                <button onClick={cancelHandler}>{modalState.cancelBtn}</button>
              </div>
            </form>
        </div>
    </div>
  
  )
}

export default OperationModal