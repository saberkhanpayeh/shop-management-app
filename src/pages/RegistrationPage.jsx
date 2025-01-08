import { useMutation } from '@tanstack/react-query';
import React from 'react'
import { useForm } from 'react-hook-form';
import { useRegister } from '../services/mutations';
import { Link, useNavigate } from 'react-router-dom';
import styles from "./RegistrationAndLogin.module.css";
import SiteLogo from "../assets/icons/Union.png"
import { yupResolver } from '@hookform/resolvers/yup';
import { registerFromSchema } from '../schema';
function RegistrationPage() {
  const navigate=useNavigate();
  const {mutate,isPending}=useRegister();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver:yupResolver(registerFromSchema),
    mode:"onChange"
  });
  const onSubmit=(data)=>{
    if(data.password!==data.confirmPassword)
        return;
    // console.log(data);
    mutate(data,{
      onSuccess:(res)=>{
        // console.log(res.data.message);
        navigate("/login");
      },
      onError:(error)=>{
        console.log(error.response.data.message);
      }
    });
  }
  return (
    <div className={styles.container}>
      {/* <img src={SiteLogo} alt="logo"/> */}
      <a className={styles.image}href="/registration"></a>
      <h2>فرم ثبت نام</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("username")} placeholder="نام کابری" />
        {errors?.username && <span>*{errors?.username.message}</span>}
        <input type='password' {...register("password")} placeholder="رمز عبور" />
        {errors?.password && <span>*{errors?.password.message}</span>}
        <input type='password' {...register("confirmPassword")} placeholder="تکرار رمز عبور" />
        {errors?.confirmPassword && <span>*{errors?.confirmPassword.message}</span>}
        <button type="submit">ثبت نام</button>
      </form>
      <Link className={styles.link} to="/login">حساب کاربری دارید؟</Link>
    </div>
  
  )
}

export default RegistrationPage