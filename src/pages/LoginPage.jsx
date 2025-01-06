import React from 'react'
import { useForm } from 'react-hook-form';
import { useLogin } from '../services/mutations';
import { setCookie } from '../utils/cookie';
import { useNavigate } from 'react-router-dom';

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("username")} placeholder="نام کابری" />
      <input type='password' {...register("password")} placeholder="رمز عبور" />
      <button type="submit">ورود</button>
    </form>
  )
}

export default LoginPage