import "./App.css";
import Cart from "./components/Cart.jsx";
import ProductCard from "./components/ProductCard.jsx";
import { products } from "./data/products.js";
import { useCart } from "./hooks/useCart.js";

function App() {
  const { cart, addToCart, updateQuantity, removeFromCart, total } = useCart();
  return (
    <div className="py-20">
      <div>
        <div className="flex justify-center">
          <h1 className="text-white font-semibold text-4xl">
            An Ecommerce Store
          </h1>
        </div>
        <div className="mt-15 lg:flex lg:justify-start">
          {/* PRODUCT SECTION */}
          <div className="flex justify-center gap-5 flex-wrap">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
            ))}
          </div>
          {/* CART SECTION */}
          <div className="mt-15 lg:mt-0">
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
