import React from 'react'
import { useForm } from 'react-hook-form';
import { useLogin } from '../services/mutations';
import { setCookie } from '../utils/cookie';
import { Link, useNavigate } from 'react-router-dom';
import styles from "./RegistrationAndLogin.module.css";
function LoginPage() {
  const navigate=useNavigate();
  const {mutate}=useLogin();
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
    const onSubmit=(data)=>{
      // console.log(data);
      mutate(data,{
        onSuccess:(data)=>{
          // console.log(data);
          setCookie("token",data?.data.token);
          navigate("/");
        },
        onError:(error)=>{
          console.log(error.response.data.message);
        }
      })
    }
  return (
    <div style={{width:"33%"}} className={styles.container}>
      <a className={styles.image}href="/login"></a>
      <h2>فرم ورود</h2>
      <form style={{padding:"0 35px"}}onSubmit={handleSubmit(onSubmit)}>
        <input {...register("username")} placeholder="نام کابری" />
        <input type='password' {...register("password")} placeholder="رمز عبور" />
        <button type="submit">ورود</button>
      </form>
      <Link className={styles.link} to="/registration">ایجاد حساب کاربری !</Link>
    </div>

  )
}

export default LoginPage;