import { useParams } from "react-router-dom";

const dummyProducts = [
  { id: "1", name: "iPhone 15", price: 999 },
  { id: "2", name: "Galaxy S23", price: 899 },
  { id: "3", name: "Pixel 8", price: 799 },
];

const ProductDetail = () => {

  const {id} = useParams();
  const product = dummyProducts.find((ele) => ele.id == id);
  
  if (!product) {
    return <p className="text-red-600 p-6">❌ Product Not Found</p>;
  }

  return (
    <div>
      {
        product ? (
          <div className="flex flex-col gap-2 items-center">
            <img className="w-30 h-30 border-2 border-gray-400"></img>
            <h2 className="text-sm font-bold text-gray-600">{product.name}</h2>
            <h3>INR:- {product.price}</h3>
          </div>
        ) : <h2>Sorry, product details not avaliable...</h2>
      }
    </div>
  )
}

export default ProductDetail