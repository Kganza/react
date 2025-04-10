import React, { useContext } from 'react';
import { CartContext } from './cartcontest';


import CartItem from './cartitem';

const ShoppingCart = () => {
  const { cartItems } = useContext(CartContext);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0).toFixed(2);

  return (
    <div className="mt-6 border-t pt-4">
      <h2 className="text-xl font-semibold mb-4">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map(item => (
            <CartItem key={item.id} item={item} />
          ))}
          <div className="mt-4 flex justify-between font-semibold">
            <span>Total Items: {totalItems}</span>
            <span>Total Price: ${totalPrice}</span>
          </div>
          <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Checkout</button>
        </>
      )}
    </div>
  );
};

export default ShoppingCart;
