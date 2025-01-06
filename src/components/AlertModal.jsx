import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import closeIcon from "../assets/icons/Close.png";
import { useDeleteProduct } from '../services/mutations';
import { useNavigateLoginPage } from '../hooks/navigateHooks';
import { useInvalidateQuery } from '../services/queries';
import { removeProductForm } from '../features/modal/modalSlice';
import { useNavigate } from 'react-router-dom';
import styles from "./AlertModal.module.css";
function AlertModal() {
    const modalState=useSelector((store)=>store.modal);
    const modalDispatch=useDispatch();
    const {mutate}=useDeleteProduct();
    const navigteLoginPage=useNavigateLoginPage();
    const navigate=useNavigate();
    const invalidateQuery=useInvalidateQuery();
    const {formTitle,confirmBtn,cancelBtn,product}=modalState;
    const removeHandler=()=>{
        // console.log("remove");
        mutate(product,{
            onSuccess:(data)=>{
                // console.log(data);
                modalDispatch(removeProductForm());
                invalidateQuery(["products"]);
                navigate("/");
            },
            onError:(error)=>{
                console.log(error.response.data.message);
                navigteLoginPage();
            }
        })
    }
    const cancelHandler=()=>{
        console.log("cancel");
        modalDispatch(removeProductForm());
        navigate("/");
    }
  return (
    <div className={styles.container}>
        <img src={closeIcon} alt="close-icon" />
        <p>{formTitle}</p>
        <div>
            <button onClick={removeHandler}>{confirmBtn}</button>
            <button onClick={cancelHandler}>{cancelBtn}</button>
        </div>
    </div>
  )
}

export default AlertModal