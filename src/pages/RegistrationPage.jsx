import { useMutation } from '@tanstack/react-query';
import React from 'react'
import { useForm } from 'react-hook-form';
import { useRegister } from '../services/mutations';
import { useNavigate } from 'react-router-dom';

function RegistrationPage() {
  const navigate=useNavigate();
  const {mutate,isPending}=useRegister();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
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
    <form onSubmit={handleSubmit(onSubmit)}>
    <input {...register("username")} placeholder="نام کابری" />
    <input type='password' {...register("password")} placeholder="رمز عبور" />
    <input type='password' {...register("confirmPassword")} placeholder="تکرار رمز عبور" />
    <button type="submit">ثبت نام</button>
  </form>
  )
}

export default RegistrationPage