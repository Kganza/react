import React, { useContext } from 'react';
import { CartContext } from './cartcontest';


const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useContext(CartContext);
  return (
    <div className="flex items-center gap-4 border-b py-2">
      <img src={item.image} alt={item.name} className="w-16 h-16 object-cover" />
      <div className="flex-1">
        <h4 className="font-semibold">{item.name}</h4>
        <p>${item.price} x {item.quantity}</p>
        <div className="flex gap-2 mt-1">
          <button onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1} className="px-2 bg-gray-200">-</button>
          <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-2 bg-gray-200">+</button>
          <button onClick={() => removeFromCart(item.id)} className="ml-4 text-red-600">Remove</button>
        </div>
      </div>
      <div className="font-bold">${(item.price * item.quantity).toFixed(2)}</div>
    </div>
  );
};

export default CartItem;