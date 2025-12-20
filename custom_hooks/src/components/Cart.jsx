import CartItem from "./CartItem"

const Cart = ({cart, onUpdateQuantity, onRemove, total}) => {
  if (cart.length === 0) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <h1 className="text-red-400 text-3xl font-bold">
          Your cart is empty loser!!
        </h1>
      </div>
    )
  }

  return (
    <div className="flex items-center flex-col py-10">
      <h1 className='text-white font-semibold text-3xl tracking-wide mb-6'>
        Your Cart
      </h1>

      <div className="bg-gray-100 min-h-20 lg:h-full w-[80%] lg:w-[500px] mt-10 lg:mt-4 rounded-lg p-5 shadow-md">
        <div className="space-y-6">
          {cart.map(item => (
            <CartItem 
              key={item.id} 
              item={item} 
              onUpdateQuantity={onUpdateQuantity} 
              onRemove={onRemove}
            />
          ))}
        </div>

        <hr className="my-6 border-gray-400" />

        <div className="flex justify-between items-center">
          <h1 className="text-lg font-bold">
            Total: ${typeof total === "string" ? total : total.toFixed(2)}
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Cart
