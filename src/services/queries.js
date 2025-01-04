import { useQuery } from "@tanstack/react-query";
import api from "../config/api";

const useProductDetails = () => {
  const fetchProductDetails = () => {
    return api.get("products");
  };
  return useQuery(["products"], fetchProductDetails);
};

export { useProductDetails };
