import CartItem from "./CartItem"

const Cart = ({cart, onUpdateQuantity, onRemove, total}) => {
  if (cart.length === 0) {
    return <div>
      <h1>Your cart is empty loser!!</h1>
    </div>
  }

  return (
    <div className="flex items-center flex-col">
      <h1 className='text-white font-semibold text-2xl'>Your Cart</h1>
      <div className="bg-gray-200 min-h-20 lg:h-full w-[80%] lg:w-md mt-10 lg:mt-4 rounded-lg p-4">
        <div>
          {cart.map(item => <CartItem key={item.id} 
        item={item} onUpdateQuantity={onUpdateQuantity} onRemove={onRemove} />)}
        </div>
        <hr />
        <div>
          <h1>
            Total: ${typeof total === "string"? total : total.toFixed(2)}
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Cart