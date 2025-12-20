const CartItem = ({item, onUpdateQuantity, onRemove}) => {
  return (
    <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm border border-gray-200">
      <div>
        <h1 className="text-lg font-semibold">{item.name}</h1>
        <p className="text-gray-600">${item.price.toFixed(2)}</p>
      </div>

      <div className="flex flex-col items-center gap-3">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
            className="px-3 py-1 bg-gray-200 text-black font-bold rounded hover:bg-gray-300"
          >
            -
          </button>

          <span className="text-lg font-semibold">{item.quantity}</span>

          <button 
            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
            className="px-3 py-1 bg-gray-200 text-black font-bold rounded hover:bg-gray-300"
          >
            +
          </button>
        </div>

        <button 
          onClick={() => onRemove(item.id)}
          className="text-sm font-semibold text-red-600 hover:underline"
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default CartItem
