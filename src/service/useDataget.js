import { useQuery } from "@tanstack/react-query";
import { request } from "../config/request";

export const useBookGet = (genre) => {
  return useQuery({
    queryKey: genre ? ["books", genre] : ["books"], 
    queryFn: async () => {
      const response = await request.get(`/api/books`, {
        params: genre ? { genre } : {}, 
      });
      return response.data;
    },
  });
};
