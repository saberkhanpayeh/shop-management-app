import { useQuery, useQueryClient } from "@tanstack/react-query";
import api from "../config/api";
const useProductDetails = () => {
  const fetchProductDetails = () => {
    return api.get("products");
  };
  return useQuery(["products"], fetchProductDetails);
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
export { useProductDetails, useInvalidateQuery };
