import React from 'react';
import ProductCard from './productcard';

const ProductGrid = ({ products, onView, onWishlist, wishlist }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          onView={onView}
          onWishlist={onWishlist}
          wishlist={wishlist}
        />
      ))}
    </div>
  );
};

export default ProductGrid;