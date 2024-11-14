import { useQuery } from "@tanstack/react-query"
import { request } from "../config/request"
import { toast } from "react-toastify"


export  const useBookGet = () => {
    return useQuery({
        queryKey: ['books'],
        queryFn: ()=> request.get('/books').then((res) => res.data),
       onSuccess: (data) => {
        toast.success(data.message);
       },
       onError: (data) => {
        toast.error(data.response.data.message);
       },
    })
}
