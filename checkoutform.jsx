import react, { useState } from 'react';

const CheckoutForm = () => {
  const [form, setForm] = useState({ name: '', email: '', address: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email && form.address) {
      setSubmitted(true);
    }
  };

  if (submitted) return <p className="mt-8 text-green-600 font-semibold">Thank you! Your order has been submitted.</p>;

  return (
    <form onSubmit={handleSubmit} className="mt-8 max-w-md mx-auto border rounded p-4 shadow">
      <h2 className="text-xl font-semibold mb-4">Checkout</h2>
      <div className="mb-2">
        <label className="block font-medium">Name</label>
        <input type="text" name="name" value={form.name} onChange={handleChange} className="w-full border px-2 py-1 rounded" required />
      </div>
      <div className="mb-2">
        <label className="block font-medium">Email</label>
        <input type="email" name="email" value={form.email} onChange={handleChange} className="w-full border px-2 py-1 rounded" required />
      </div>
      <div className="mb-4">
        <label className="block font-medium">Address</label>
        <textarea name="address" value={form.address} onChange={handleChange} className="w-full border px-2 py-1 rounded" required></textarea>
      </div>
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Place Order</button>
    </form>
  );
};

export default CheckoutForm;
