import { useEffect, useState } from "react";

const ProductsApi = () => {

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try{
        const res = await fetch("https://fakestoreapi.com/products");
        if (!res.ok) throw new Error('Failed to fetch products');

        const data = await res.json();
        setProducts(data);
        setIsLoading(false);
      } catch(error) {
        setIsError(error.message || "Error");
        setIsLoading(false);
      }
    }
    fetchProducts();
  }, [])

  if(isLoading) return <p className="p-4">⏳ Loading...</p>
  if(isError) return <p className="text-red-400 p-4">❌ {isError}</p>

  return (
    <div>
      <h2>Products API:</h2>
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {
          products && products.map((ele) => (
            <li key={ele.id}>
              <img src={ele.image} alt={ele.title} className="h-24 mx-auto"></img>
              <h3>{ele.title}</h3>
              <p>₹{ele.price}</p>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default ProductsApi