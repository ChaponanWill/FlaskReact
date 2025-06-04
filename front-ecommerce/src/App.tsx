
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
            // otro mapeo
            <div key={index}>
              <h2>{product.name}</h2>
              <img src={product.image} alt={product.name}/>
              <p>{product.price}</p>
              <ul>
                {
                  product.products.map((product, index) => (
                    <li key={index}>
                      <h3>{product.name}</h3>
                      <img src={product.image} alt={product.name}/>
                      <p>{product.price}</p>
                    </li>
                  ))
                }
              </ul>
            </div>
          ) )
        }
      </div>
    </>
  )
}

export default App
