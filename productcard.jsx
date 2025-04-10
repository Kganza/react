import React, { useContext } from 'react';
import { CartContext } from './cartcontest';
import { Heart } from 'lucide-react';

const ProductCard = ({ product, onView, onWishlist, wishlist }) => {
  const { addToCart } = useContext(CartContext);
  const isWished = wishlist?.some(p => p.id === product.id);

  const handleClick = () => {
    if (onView) onView(product);
  };

  return (
    <div className="border rounded-lg p-4 shadow-md relative" onClick={handleClick}>
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-2" />
      <button
        onClick={(e) => { e.stopPropagation(); onWishlist(product); }}
        className={`absolute top-2 right-2 p-1 rounded-full ${isWished ? 'text-red-500' : 'text-gray-400'}`}
      >
        <Heart fill={isWished ? 'red' : 'none'} />
      </button>
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p className="text-sm text-gray-500">{product.category}</p>
      <div className="flex justify-between items-center mt-2">
        <span className="font-bold">${product.price}</span>
        <span>{'⭐'.repeat(Math.floor(product.rating))}</span>
      </div>
      <button
        onClick={(e) => { e.stopPropagation(); addToCart(product); }}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;