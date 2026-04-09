import React, { useState, useMemo } from "react";

const cakes = [
  {
    name: "Chocolate Truffle Cake",
    price: "₹599",
    img: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqwbg4WG_gAq6QWwb5J3YSHL_0uS98KZy64SUpB15gQ-ji0yxVS3sJHuO86-pehOQcD0kWVTZqEDJisa-PQUa9xCIHLpcfQG69ud5cAq5r1o8noAO1KLzdyJxct0kc-kldZRgSJGQ=s1360-w1360-h1020-rw",
  },
  {
    name: "Strawberry Delight",
    price: "₹499",
    img: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwep6LHwpW6YNJV39YVLuSMil-13f1b3-AZZgMzIL9rPYwkx7haqTy9wYlb3rZX3zXhDnKChMXGjid9iIL68wfrJ3GSCTj04NFogofD8cwJ6jjToWV17JbdMoAgNb3tLZCNx2tkQ=s1360-w1360-h1020-rw",
  },
  {
    name: "Black Forest Cake",
    price: "₹549",
    img: "https://lh3.googleusercontent.com/p/AF1QipOcn7x_pbyQfVwVWVuTKU-bBd7nQyrYX2q9P2X7=s1360-w1360-h1020-rw",
  },
  {
    name: "Rainbow Cake",
    price: "₹699",
    img: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepHAj3uUgdgjyAO5Mx0iGwp76-EOnNRqKG9Qk8G-ddoGM7nPT0s8lpD7fNle8K82P4UhRjirFqziWUfjv4f1yYp-umXxbDKcI4cDJXihXmhkN3aOTneI671F24TkDRFGNH55MA=s1360-w1360-h1020-rw",
  },
  {
    name: "Custom Birthday Cake",
    price: "₹899",
    img: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweq4LrAGLoW6XEsCsxD3yIO_t4JGoeImrvjx_EIzqnOE0BaPrrck9GwXoPAzYPfK7Mkz5575TjxHkYnyg5KTOMDZaRBGNwAc6K1lJ-deGGyJSbAEBv1HCaNRnjDQFEiClRkRJfrQ=s1360-w1360-h1020-rw",
  },
];

const reviews = [
  {
    name: "Riya Sharma",
    text: "Amazing cakes! Super fresh and beautiful designs 😍",
  },
  {
    name: "Amit Verma",
    text: "Ordered for birthday, delivery was on time and taste was perfect!",
  },
  {
    name: "Sneha Patil",
    text: "Best cake shop in Kurla! Highly recommended ⭐",
  },
];

const initialOrders = [
  { id: 1, customer: "Rahul", cake: "Chocolate Truffle Cake", price: 599, status: "pending" },
  { id: 4, customer: "Neha", cake: "Strawberry Delight", price: 499, status: "ready" },
  { id: 3, customer: "Aman", cake: "Black Forest Cake", price: 549, status: "delivered" },
];

export default function DessertShop() {
   const [page, setPage] = useState("home");
  const [orders, setOrders] = useState(initialOrders);

  const markReady = (id) => {
    setOrders((prev) =>
      prev.map((o) => (o.id === id ? { ...o, status: "ready" } : o))
    );
  };

  const markDelivered = (id) => {
    setOrders((prev) =>
      prev.map((o) => (o.id === id ? { ...o, status: "delivered" } : o))
    );
  };

  const StatusBadge = ({ status }) => {
    const map = {
      pending: "bg-yellow-100 text-yellow-700",
      ready: "bg-blue-100 text-blue-700",
      delivered: "bg-green-100 text-green-700",
    };
    return (
      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${map[status]}`}>
        {status.toUpperCase()}
      </span>
    );
  };


  const stats = useMemo(() => {
    const totalOrders = orders.length;
    const totalRevenue = orders.reduce((s, o) => s + o.price, 0);
    const pending = orders.filter((o) => o.status === "pending").length;
    const ready = orders.filter((o) => o.status === "ready").length;
    const delivered = orders.filter((o) => o.status === "delivered").length;
    return { totalOrders, totalRevenue, pending, ready, delivered };
  }, [orders]);

  return (
    <div className="font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 shadow-md bg-white sticky top-0 z-50">
        <h1 className="text-2xl font-bold text-pink-600">Dessert THE Cake Shop</h1>
        <div className="space-x-6 hidden md:block">
          <button onClick={() => setPage("dashboard")} className="hover:text-pink-500">Dashboard</button>
          <button onClick={() => setPage("home")} className="hover:text-pink-500">Home</button>
          <a href="#gallery" className="hover:text-pink-500">Cakes</a>
          <a href="#reviews" className="hover:text-pink-500">Reviews</a>
          <a href="#contact" className="hover:text-pink-500">Contact</a>
        </div>
      </nav>

      {/* HOME PAGE */}
      {page === "home" && (
      <>
      <section id="home" className="h-[90vh] flex flex-col justify-center items-center text-center bg-linear-to-r from-pink-100 to-yellow-100">
        <h2 className="text-4xl md:text-6xl font-bold text-gray-800">Delicious Cakes Delivered to Your Door</h2>
        <p className="mt-4 text-lg text-gray-600">Freshly baked | Custom Designs | Fast Delivery in Mumbai</p>
        <button className="mt-6 px-6 py-3 bg-pink-600 text-white rounded-full hover:bg-pink-700">Order Now</button>
      </section>

      {/* Cakes with Pricing */}
      <section id="gallery" className="p-10 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8">Our Cakes & Pricing</h2>
        <div className="grid sm:grid-cols-4 md:grid-cols-3 gap-6">
          {cakes.map((cake, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition">
              <img src={cake.img} alt="cake" className="w-full h-80 object-cover" />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold">{cake.name}</h3>
                <p className="text-pink-600 font-bold mt-4">{cake.price}</p>
                <button className="mt-3 px-4 py-4 bg-pink-500 text-white rounded-full hover:bg-pink-600">Order Now</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="p-10 bg-pink-50 text-center">
        <h2 className="text-3xl font-bold mb-8">Customer Reviews</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-md">
              <p className="text-gray-600">"{review.text}"</p>
              <h4 className="mt-4 font-semibold text-pink-600">- {review.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="p-10 bg-white text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="text-gray-600">Netaji Nagar, Kurla West, Mumbai, Maharashtra</p>
        <p className="text-gray-600">Online Delivery Available 🚚</p>
        <a href="https://wa.me/917738770074?text=Hi%20I%20want%20to%20order%20a%20cake" target="_blank" rel="noopener noreferrer">
          <button className="mt-4 px-6 py-4 bg-green-500 text-white rounded-full hover:bg-green-600">
            Order on WhatsApp
          </button>
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-4">
        <p>© 2026 Dessert THE Cake Shop. All rights reserved.</p>
      </footer>
    </>
  )}

  {/* DASHBOARD PAGE */}
      {page === "dashboard" && (
        <div className="p-10">
          <h2 className="text-3xl font-bold mb-6">Dashboard</h2>

          <div className="grid md:grid-cols-5 gap-6">
            <div className="bg-pink-100 p-6 rounded-xl shadow">
              <h3 className="text-xl font-bold">Total Orders</h3>
              <p className="text-2xl mt-4">{stats.totalOrders}</p>
            </div>

            <div className="bg-green-100 p-6 rounded-xl shadow">
              <h3 className="text-xl font-bold">Total Revenue</h3>
              <p className="text-2xl mt-4">₹{stats.totalRevenue}</p>
            </div>

            <div className="bg-yellow-100 p-6 rounded-xl shadow">
              <h3 className="text-xl font-bold">Pending</h3>
              <p className="text-2xl mt-4">{stats.pending}</p>
            </div>

            <div className="bg-blue-100 p-6 rounded-xl shadow">
              <h3 className="text-xl font-bold">Ready</h3>
              <p className="text-2xl mt-4">{stats.ready}</p>
            </div>

            <div className="bg-emerald-100 p-6 rounded-xl shadow">
              <h3 className="text-xl font-bold">Delivered</h3>
              <p className="text-2xl mt-4">{stats.delivered}</p>
            </div>
          </div>

          <div className="mt-10 space-y-10">
            {/* Pending Orders */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Pending Orders</h3>
              <table className="w-full border">
                <thead>
                  <tr className="bg-yellow-200 text-left">
                    <th className="p-4">Customer</th>
                    <th className="p-4">Cake</th>
                    <th className="p-4">Price</th>
                    <th className="p-4">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.filter(o => o.status === "pending").map(o => (
                    <tr key={o.id} className="border-t">
                      <td className="p-4">{o.customer}</td>
                      <td className="p-4">{o.cake}</td>
                      <td className="p-4">₹{o.price}</td>
                      <td className="p-4">
                        <button onClick={() => markReady(o.id)} className="px-3 py-1 bg-blue-500 text-white rounded">Mark Ready</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Ready Orders */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Ready Orders</h3>
              <table className="w-full border">
                <thead>
                  <tr className="bg-blue-200 text-left">
                    <th className="p-4">Customer</th>
                    <th className="p-4">Cake</th>
                    <th className="p-4">Price</th>
                    <th className="p-4">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.filter(o => o.status === "ready").map(o => (
                    <tr key={o.id} className="border-t">
                      <td className="p-4">{o.customer}</td>
                      <td className="p-4">{o.cake}</td>
                      <td className="p-4">₹{o.price}</td>
                      <td className="p-4">
                        <button onClick={() => markDelivered(o.id)} className="px-3 py-1 bg-green-600 text-white rounded">Mark as Delivered</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Delivered Orders */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Delivered Orders</h3>
              <table className="w-full border">
                <thead>
                  <tr className="bg-green-200 text-left">
                    <th className="p-4">Customer</th>
                    <th className="p-4">Cake</th>
                    <th className="p-4">Price</th>
                    <th className="p-4">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.filter(o => o.status === "delivered").map(o => (
                    <tr key={o.id} className="border-t">
                      <td className="p-4">{o.customer}</td>
                      <td className="p-4">{o.cake}</td>
                      <td className="p-4">₹{o.price}</td>
                      <td className="p-4 text-green-600 font-semibold">Completed</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
  </div>
  )
}
