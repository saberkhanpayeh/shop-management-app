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
export { useRegister,useLogin };
