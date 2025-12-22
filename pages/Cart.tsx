import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowLeft, ArrowRight, ShoppingCart, AlertTriangle } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart: React.FC = () => {
  const { items, updateQuantity, removeFromCart, cartTotal } = useCart();
  const navigate = useNavigate();
  const [itemToRemove, setItemToRemove] = useState<string | null>(null);

  const handleCheckout = () => {
    // Construct an order summary string
    const orderSummary = items.map(item => `- ${item.name} (x${item.quantity}): $${item.price * item.quantity}`).join('\n');
    const totalString = `\n\nTotal Order Value: $${cartTotal.toFixed(2)}`;
    const fullMessage = `Hello, I would like to place an order for the following items:\n\n${orderSummary}${totalString}\n\nPlease let me know the payment details and delivery timeline.`;

    // Navigate to contact page with pre-filled message
    navigate('/contact', { state: { orderDetails: fullMessage } });
  };

  const confirmRemoval = () => {
    if (itemToRemove) {
      removeFromCart(itemToRemove);
      setItemToRemove(null);
    }
  };

  if (items.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 bg-slate-50">
        <div className="bg-white p-8 rounded-full shadow-sm mb-6">
          <ShoppingCart className="w-16 h-16 text-slate-300" />
        </div>
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Your cart is empty</h2>
        <p className="text-slate-500 mb-8">Looks like you haven't added any safety materials yet.</p>
        <Link to="/shop" className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Go to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen py-12 relative">
      
      {/* Confirmation Modal */}
      {itemToRemove && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-sm w-full transform transition-all scale-100">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4 text-red-600">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Remove Item?</h3>
              <p className="text-slate-600 mb-6">
                Are you sure you want to remove this item from your cart?
              </p>
              <div className="flex gap-3 w-full">
                <button
                  onClick={() => setItemToRemove(null)}
                  className="flex-1 px-4 py-2 border border-slate-300 rounded-xl font-medium text-slate-700 hover:bg-slate-50 transition"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmRemoval}
                  className="flex-1 px-4 py-2 bg-red-600 rounded-xl font-medium text-white hover:bg-red-700 transition"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-slate-900 mb-8">Shopping Cart</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items List */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div key={item.id} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col sm:flex-row gap-6 items-center">
                <img src={item.imageUrl} alt={item.name} className="w-24 h-24 object-cover rounded-lg" />
                
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="font-bold text-slate-900 text-lg">{item.name}</h3>
                  <p className="text-sm text-slate-500">{item.category}</p>
                  <div className="mt-1 font-semibold text-blue-600">${item.price}</div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-slate-200 rounded-lg">
                    <button 
                      onClick={() => item.quantity > 1 && updateQuantity(item.id, item.quantity - 1)}
                      className="p-2 text-slate-600 hover:bg-slate-50 hover:text-blue-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={item.quantity <= 1}
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-12 text-center font-medium">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-2 text-slate-600 hover:bg-slate-50 hover:text-blue-600 transition"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  
                  <button 
                    onClick={() => setItemToRemove(item.id)}
                    className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition"
                    title="Remove item"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 sticky top-24">
              <h2 className="text-xl font-bold text-slate-900 mb-6">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-slate-600">
                  <span>Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Shipping Estimate</span>
                  <span>Calculated at checkout</span>
                </div>
                <div className="border-t border-slate-100 pt-3 flex justify-between font-bold text-lg text-slate-900">
                  <span>Total</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
              </div>

              <button 
                onClick={handleCheckout}
                className="w-full bg-slate-900 text-white py-3 px-4 rounded-xl font-bold hover:bg-slate-800 transition flex items-center justify-center gap-2 mb-4"
              >
                Proceed to Checkout <ArrowRight className="w-4 h-4" />
              </button>
              
              <Link to="/shop" className="block text-center text-sm text-slate-500 hover:text-blue-600">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;