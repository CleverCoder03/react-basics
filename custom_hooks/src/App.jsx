import "./App.css";
import Cart from "./components/Cart.jsx";
import ProductCard from "./components/ProductCard.jsx";
import { products } from "./data/products.js";
import { useCart } from "./hooks/useCart.js";

function App() {
  const { cart, addToCart, updateQuantity, removeFromCart, total } = useCart();
  return (
    <div className="py-20 px-4">
      <div>
        <div className="flex justify-center mb-12">
          <h1 className="text-white font-semibold text-4xl tracking-wide">
            An Ecommerce Store
          </h1>
        </div>

        <div className="lg:flex lg:justify-center gap-10">
          {/* PRODUCT SECTION */}
          <div className="flex justify-center gap-6 flex-wrap mb-14 lg:mb-0 lg:w-[60%]">
            {products.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onAddToCart={addToCart} 
              />
            ))}
          </div>

          {/* CART SECTION */}
          <div className="flex justify-center lg:block">
            <Cart
              cart={cart}
              onUpdateQuantity={updateQuantity}
              onRemove={removeFromCart}
              total={total}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
