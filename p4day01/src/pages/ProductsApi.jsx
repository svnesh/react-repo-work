import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import useDebounse from "../hooks/useDebounse";

const ProductsApi = () => {

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);
  const [filtered, setFiltered] = useState([]);
  const [searchText, setSearchText] = useState('');

  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('search') || '';
  const debouncedSearch = useDebounse(searchQuery, 500);

  useEffect(() => {
    console.log('page load rendering');
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

  useEffect(() => {
    console.log('search useEffect rendering');
    const filteredList = products.filter((ele) => 
      ele.title.toLowerCase().includes(debouncedSearch.toLowerCase())
    );

    setFiltered(filteredList);

  }, [products, debouncedSearch]);

  const handleSearch = (e) => {
    setSearchParams(searchText ? { search: searchText } : {});
    setSearchText('');
  }

  if(isLoading) return <p className="p-4">⏳ Loading...</p>
  if(isError) return <p className="text-red-400 p-4">❌ {isError}</p>

  return (
    <div className="flex flex-col gap-3">
      <h2>Products API:</h2>
      <div className="items-center">
        <input className="border px-3 py-2 mb-6 rounded w-full sm:w-96" name="searchText" type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} placeholder="Search product" />
        <button className="font-medium text-white pl-3 pr-3 pb-1 pt-1 text-center bg-blue-600 rounded-2xl ml-3" onClick={handleSearch}>Search</button>
      </div>

      <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {
          filtered && filtered.map((ele) => (
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