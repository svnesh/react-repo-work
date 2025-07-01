import { Link } from "react-router-dom";

const dummyProducts = [
  { id: "1", name: "iPhone 15", price: 999 },
  { id: "2", name: "Galaxy S23", price: 899 },
  { id: "3", name: "Pixel 8", price: 799 },
];

const ProductList = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold">Product Lists</h2>
      <ul className="space-y-2">
        {
          dummyProducts.map((product) => (
            <li key={product.id}>
              <Link className="text-blue-600 underline" to={`/products/${product.id}`}>
                {product.name} - {product.price}
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default ProductList