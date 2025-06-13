import React, { useState } from 'react';
import { X, ShoppingCart, Heart, Star, Minus, Plus } from 'lucide-react';
import { Product } from '../types/Product';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, isOpen, onClose, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!isOpen || !product) return null;

  const handleAddToCart = () => {
    onAddToCart(product, quantity);
    onClose();
  };

  const handleQuantityChange = (delta: number) => {
    setQuantity(Math.max(1, quantity + delta));
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity bg-slate-900 bg-opacity-75" onClick={onClose}></div>

        <div className="inline-block w-full max-w-4xl my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
          <div className="relative">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors duration-200"
            >
              <X className="h-6 w-6 text-slate-600" />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
              {/* Product Images */}
              <div className="space-y-4">
                <div className="aspect-square overflow-hidden rounded-xl bg-slate-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Product Details */}
              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-amber-600 font-medium">{product.category}</span>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-amber-400 fill-current" />
                      <span className="text-sm text-slate-600">{product.rating}</span>
                    </div>
                  </div>
                  <h1 className="text-3xl font-bold text-slate-900 mb-4">{product.name}</h1>
                  <p className="text-slate-600 leading-relaxed">{product.description}</p>
                </div>

                <div className="border-t border-slate-200 pt-6">
                  <div className="flex items-center space-x-4 mb-6">
                    <span className="text-3xl font-bold text-slate-900">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-xl text-slate-500 line-through">${product.originalPrice}</span>
                    )}
                    {product.originalPrice && (
                      <span className="bg-red-100 text-red-800 px-2 py-1 rounded-md text-sm font-medium">
                        Save ${(product.originalPrice - product.price).toFixed(2)}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center space-x-4 mb-6">
                    <span className="text-slate-700 font-medium">Quantity:</span>
                    <div className="flex items-center border border-slate-300 rounded-lg">
                      <button
                        onClick={() => handleQuantityChange(-1)}
                        className="p-2 hover:bg-slate-100 transition-colors duration-200"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="px-4 py-2 font-medium">{quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(1)}
                        className="p-2 hover:bg-slate-100 transition-colors duration-200"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <button
                      onClick={handleAddToCart}
                      className="flex-1 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center group"
                    >
                      <ShoppingCart className="h-5 w-5 mr-2 group-hover:animate-bounce" />
                      Add to Cart
                    </button>
                    <button className="px-6 py-3 border-2 border-slate-300 hover:border-red-500 rounded-xl transition-colors duration-200 flex items-center justify-center group">
                      <Heart className="h-5 w-5 text-slate-600 group-hover:text-red-500 transition-colors duration-200" />
                    </button>
                  </div>
                </div>

                <div className="border-t border-slate-200 pt-6">
                  <h3 className="font-semibold text-slate-900 mb-2">Features:</h3>
                  <ul className="space-y-1 text-slate-600">
                    <li>• High-quality materials</li>
                    <li>• Fast shipping</li>
                    <li>• 30-day return policy</li>
                    <li>• 1-year warranty</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;