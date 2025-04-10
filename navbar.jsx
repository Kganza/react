import React from 'react';
// import { ShoppingCartIcon } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">MyStore</h1>
      <div className="relative">
        <div className="h-6 w-6 text-gray-700" />
        {/* Add cart preview if needed */}
      </div>
    </nav>
  );
};

export default Navbar;
