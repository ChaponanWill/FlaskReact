import { useState } from 'react'
import './App.css'
import  {useGetProducts} from "./assets/api/get-products";

function App() {
  const {products} = useGetProducts();

  return (
    <>
      <h1>Hellooow</h1>
      <div>
        {
          products?.map((product, index) => (
            <div key={index}>
              <h2>{product.name}</h2>
              <img src={product.image} alt={product.name}/>
              <p>{product.price}</p>
              <p>{product.marca}</p>

            </div>
          ) )
        }
      </div>
    </>
  )
}

export default App
