const ProductCard = ({product, onAddToCart}) => {
  return (
    <div className="bg-gray-200 w-1/3 md:w-1/4 rounded-lg py-6 px-4 text-center flex flex-col justify-between shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border border-gray-300">
      <div className="space-y-2">
        <h1 className="font-bold text-lg text-gray-900 tracking-wide">{product.name}</h1>
        <p className="text-green-700 font-bold text-xl">${product.price}</p>
      </div>

      <button 
        className="mt-8 bg-green-400 hover:bg-green-500 transition-all duration-300 rounded-md py-2 font-semibold shadow-md ring-1 cursor-pointer active:scale-95"
        onClick={() => onAddToCart(product)}
      >
        Buy Now
      </button>
    </div>
  )
}

export default ProductCard
