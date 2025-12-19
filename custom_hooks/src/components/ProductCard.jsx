const ProductCard = ({product, onAddToCart}) => {
  return (
    <div className="bg-gray-300 w-1/3 md:w-1/4 rounded-lg py-5 px-3 text-center flex flex-col justify-between shadow-2xl">
      <div>
        <h1 className="font-bold">{product.name}</h1>
      <p className="text-green-700 font-bold">${product.price}</p>
      </div>
      <button className="mt-10 bg-green-300 rounded-md py-2 font-semibold shadow-2xl ring-1 cursor-pointer" onClick={() => onAddToCart(product)}>Buy Now</button>
    </div>
  )
}

export default ProductCard