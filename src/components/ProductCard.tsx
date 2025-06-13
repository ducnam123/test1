import React from 'react';
import { ShoppingCart, Heart, Star } from 'lucide-react';
import { Product } from '../types/Product';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onProductClick: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart, onProductClick }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group overflow-hidden">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500 cursor-pointer"
          onClick={() => onProductClick(product)}
        />
        <div className="absolute top-4 right-4">
          <button className="bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors duration-200 shadow-lg">
            <Heart className="h-5 w-5 text-slate-600 hover:text-red-500 transition-colors duration-200" />
          </button>
        </div>
        {product.badge && (
          <div className="absolute top-4 left-4">
            <span className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
              {product.badge}
            </span>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-amber-600 font-medium">{product.category}</span>
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 text-amber-400 fill-current" />
            <span className="text-sm text-slate-600">{product.rating}</span>
          </div>
        </div>
        
        <h3 
          className="text-lg font-semibold text-slate-800 mb-2 hover:text-amber-600 transition-colors cursor-pointer line-clamp-2"
          onClick={() => onProductClick(product)}
        >
          {product.name}
        </h3>
        
        <p className="text-slate-600 text-sm mb-4 line-clamp-2">{product.description}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-slate-800">${product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-slate-500 line-through">${product.originalPrice}</span>
            )}
          </div>
          
          <button
            onClick={() => onAddToCart(product)}
            className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white p-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group"
          >
            <ShoppingCart className="h-5 w-5 group-hover:animate-bounce" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;