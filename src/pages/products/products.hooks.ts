import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { ProductType } from "./type";

const fiveMinutes = 1000 * 60 * 5;

async function fetchProducts(): AxiosPromise<ProductType[]> {
  const response = await axios.get<ProductType[]>(
    `${import.meta.env.VITE_BASE_URL}products`
  );
  return response;
}

export function useProducts() {
  const query = useQuery({
    queryFn: fetchProducts,
    queryKey: ["productsData"],
    retry: false,
    refetchInterval: fiveMinutes,
  });

  return {
    ...query,
    products: query.data?.data,
  };
}
