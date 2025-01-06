import { useMutation } from "@tanstack/react-query";
import api from "../config/api";

const useRegister = () => {
  const sendData = (data) => {
    return api.post("auth/register", data);
  };
  return useMutation(sendData);
};

const useLogin = () => {
  const sendData = (data) => {
    return api.post("auth/login", data);
  };
  return useMutation(sendData);
};
const useAddProduct=()=>{
  const sendData=(data)=>{
    return api.post("products",data);
  }
  return useMutation(sendData);
}
const useEditProduct=()=>{
  const sendData=(data)=>{
    const {id,...productData}=data;
    // console.log(id,productData);
    return api.put(`products/${id}`,productData);
  }
  return useMutation(sendData);
}
const useDeleteProduct=()=>{
  const sendData=(data)=>{
    const {id}=data;
    return api.delete(`products/${id}`);
  }
  return useMutation(sendData);
}
export { useRegister,useLogin,useAddProduct,useEditProduct,useDeleteProduct };
