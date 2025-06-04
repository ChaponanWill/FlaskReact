import { useEffect, useState } from "react";
import axios from "axios";

export function useGetProducts(){
    const url = `${import.meta.env.VITE_BACKEND_URL}/api/products`;
    const [products, setProducts] = useState(null);
    useEffect(()=>{
        axios.get(url).then(response=>{
            setProducts(response.data.marcas)
        })
        .catch(error => console.log('Error: ' + error));
    },[url])
    console.log(products);
    return {products};
}