import React, { useState } from 'react';
import { ShoppingBag, Filter, Search, Plus, Check, Minus } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { ProductItem } from '../types';
import { useCart } from '../context/CartContext';

const Shop: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const { addToCart } = useCart();
  const [addedItems, setAddedItems] = useState<{[key: string]: boolean}>({});
  const [quantities, setQuantities] = useState<{[key: string]: number}>({});

  const categories = ['All', ...Array.from(new Set(PRODUCTS.map(p => p.category)))];

  const filteredProducts = PRODUCTS.filter(product => {
    const matchesCategory = filter === 'All' || product.category === filter;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getQuantity = (id: string) => quantities[id] || 1;

  const updateItemQuantity = (id: string, delta: number) => {
    setQuantities(prev => {
      const current = prev[id] || 1;
      const newVal = Math.max(1, current + delta);
      return { ...prev, [id]: newVal };
    });
  };

  const handleAddToCart = (product: ProductItem) => {
    const qty = getQuantity(product.id);
    addToCart(product, qty);
    setAddedItems(prev => ({ ...prev, [product.id]: true }));
    // Reset quantity back to 1 after adding
    setQuantities(prev => ({ ...prev, [product.id]: 1 }));
    
    setTimeout(() => {
      setAddedItems(prev => ({ ...prev, [product.id]: false }));
    }, 2000);
  };

  return (
    <div className="bg-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-slate-900">Safety Store</h1>
          <p className="mt-4 text-slate-600">Buy high-quality invisible grill materials, nets, and spikes directly.</p>
        </div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8 bg-slate-50 p-4 rounded-xl border border-slate-100">
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
            <Filter className="w-5 h-5 text-slate-400" />
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                  filter === cat 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group flex flex-col bg-white border border-slate-100 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64 overflow-hidden bg-slate-100">
                <img 
                  src={product.imageUrl} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                {!product.inStock && (
                  <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                    OUT OF STOCK
                  </div>
                )}
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs text-blue-600 font-bold uppercase tracking-wider">{product.category}</span>
                  <span className="text-lg font-bold text-slate-900">${product.price}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{product.name}</h3>
                <p className="text-sm text-slate-500 mb-6 flex-1">{product.description}</p>
                
                <div className="flex items-center gap-3">
                  {/* Quantity Selector */}
                  <div className="flex items-center border border-slate-200 rounded-lg h-12">
                    <button 
                      onClick={() => updateItemQuantity(product.id, -1)}
                      className="px-3 h-full hover:bg-slate-50 text-slate-600 transition rounded-l-lg"
                      disabled={!product.inStock}
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-8 text-center text-sm font-medium">{getQuantity(product.id)}</span>
                    <button 
                      onClick={() => updateItemQuantity(product.id, 1)}
                      className="px-3 h-full hover:bg-slate-50 text-slate-600 transition rounded-r-lg"
                      disabled={!product.inStock}
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Add to Cart Button */}
                  <button
                    onClick={() => handleAddToCart(product)}
                    disabled={!product.inStock}
                    className={`flex-1 h-12 rounded-xl font-medium disabled:opacity-50 disabled:cursor-not-allowed transition flex items-center justify-center gap-2 ${
                      addedItems[product.id] 
                        ? 'bg-green-600 text-white hover:bg-green-700' 
                        : 'bg-slate-900 text-white hover:bg-slate-800'
                    }`}
                  >
                    {addedItems[product.id] ? (
                      <>
                        <Check className="w-4 h-4" /> Added
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-4 h-4" /> Add
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20 text-slate-500">
            No products found matching your criteria.
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;