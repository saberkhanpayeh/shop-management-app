import { useQuery, useQueryClient } from "@tanstack/react-query";
import api from "../config/api";
const useProductDetails = (pageNumber=1,productName="") => {
  const fetchProductDetails = () => {
    console.log({pageNumber,productName});
    return api.get("products",{
      params:{
        page:pageNumber,
        name:productName,
      }
    });
  };
  return useQuery(["products",pageNumber,productName], fetchProductDetails);
  // const fetchProductDetails = () => {
  //   return api.get("products");
  // };
  // return useQuery(["products"], fetchProductDetails);
};

const useInvalidateQuery = () => {
  const queryClient = useQueryClient();

  const invalidateQuery = (queryKey) => {
    if (!queryKey) {
      console.error("Query key is required to invalidate the query.");
      return;
    }
    queryClient.invalidateQueries(queryKey);
  };

  return invalidateQuery;
};
const usePaginateProduct=(pageNumber=1,productName="")=>{
  const fetchProductDetails = () => {
    return api.get("products",{
      params:{
        page:pageNumber,
        name:productName,
      }
    });
  };
  return useQuery(["products"], fetchProductDetails);
}
export { useProductDetails, useInvalidateQuery };
