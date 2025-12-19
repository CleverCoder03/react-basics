const CartItem = ({item, onUpdateQuantity, onRemove}) => {
  return (
    <div>
      <h1>{item.name}</h1>
      <p>{item.price}</p>
      <div>
        <div>
          <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>+</button>
        </div>
        <button onClick={()=> onRemove(item.id)}>Delete</button>
      </div>
    </div>
  )
}

export default CartItem