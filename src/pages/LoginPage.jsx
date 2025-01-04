import React from 'react'
import { useForm } from 'react-hook-form';
import { useLogin } from '../services/mutations';
import { setCookie } from '../utils/cookie';

function LoginPage() {
  const {mutate}=useLogin();
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
    const onSubmit=(data)=>{
      console.log(data);
      mutate(data,{
        onSuccess:(data)=>{
          console.log(data?.data.token);
          setCookie("token",data?.data.token);
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