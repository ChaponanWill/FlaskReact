import { useEffect, useState } from "react";
import axios from "axios";

export function useGetProducts(){
    const url = `http://127.0.0.1:5001/api/products`
    const [products, setProducts] = useState(null);
    useEffect(()=>{
        axios.get(url).then(response=>{
            setProducts(response.data.products)
        })
        .catch(error => console.log('Error: ' + error));
    },[url])
    return {products};
}