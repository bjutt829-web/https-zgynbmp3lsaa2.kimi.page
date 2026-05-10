import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { items, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          isCartOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[420px] z-[70] bg-[#0A1A1A] border-l border-[#CBB26A]/20 shadow-2xl transition-transform duration-500 ease-out ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-[#CBB26A]/20">
            <div className="flex items-center gap-3">
              <ShoppingBag size={20} className="text-[#CBB26A]" strokeWidth={1.5} />
              <h2 className="font-display text-2xl text-[#F8F6F0]">Your Cart</h2>
              <span className="text-sm text-[#CBB26A]">({items.length} items)</span>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 text-[#F8F6F0]/60 hover:text-[#CBB26A] transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-custom">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag size={48} className="text-[#CBB26A]/30 mb-4" strokeWidth={1} />
                <p className="font-display text-xl text-[#F8F6F0]/60">Your cart is empty</p>
                <p className="text-sm text-[#F8F6F0]/40 mt-2">Explore our collections</p>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 p-4 bg-[#050A08]/60 border border-[#CBB26A]/10 rounded-lg"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-24 object-cover rounded"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="font-display text-lg text-[#F8F6F0] truncate">{item.name}</h3>
                        <p className="text-xs text-[#CBB26A] uppercase tracking-wider mt-1">{item.category}</p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-1 text-[#F8F6F0]/40 hover:text-red-400 transition-colors"
                      >
                        <X size={16} />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-2 bg-[#0A1A1A] rounded-lg border border-[#CBB26A]/20">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1.5 text-[#F8F6F0]/60 hover:text-[#CBB26A] transition-colors"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-8 text-center text-sm text-[#F8F6F0]">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1.5 text-[#F8F6F0]/60 hover:text-[#CBB26A] transition-colors"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <span className="font-display text-lg text-[#CBB26A]">
                        PKR {(item.price * item.quantity).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="p-6 border-t border-[#CBB26A]/20 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#F8F6F0]/60">Subtotal</span>
                <span className="font-display text-2xl text-[#CBB26A]">
                  PKR {totalPrice.toLocaleString()}
                </span>
              </div>
              <p className="text-xs text-[#F8F6F0]/40">Shipping calculated at checkout</p>
              <button className="w-full py-4 bg-[#CBB26A] text-[#050A08] font-body text-sm uppercase tracking-[0.2em] font-semibold hover:bg-[#d4bc7a] transition-colors duration-300 rounded">
                Proceed to Checkout
              </button>
              <button
                onClick={clearCart}
                className="w-full py-3 border border-[#CBB26A]/30 text-[#F8F6F0]/60 text-xs uppercase tracking-wider hover:border-[#CBB26A]/60 hover:text-[#F8F6F0] transition-all duration-300 rounded"
              >
                Clear Cart
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
