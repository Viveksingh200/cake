import React from "react";

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
    img: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweppoD7ArdKRH4JZ62Z9kU6PUrghzudj0iEocwE3McNnhMT81kq7Fp9JZPLALAp95caCTwJbB-ole77r_2_8T7G6-veC23G0vXcTVAhBcRq6lLgjJpkYsIPoVOUZQAKShxaJjk95=s1360-w1360-h1020-rw",
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

export default function DessertShop() {
  return (
    <div className="font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 shadow-md bg-white sticky top-0 z-50">
        <h1 className="text-2xl font-bold text-pink-600">Dessert THE Cake Shop</h1>
        <div className="space-x-6 hidden md:block">
          <a href="#home" className="hover:text-pink-500">Home</a>
          <a href="#gallery" className="hover:text-pink-500">Cakes</a>
          <a href="#reviews" className="hover:text-pink-500">Reviews</a>
          <a href="#contact" className="hover:text-pink-500">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="h-[90vh] flex flex-col justify-center items-center text-center bg-gradient-to-r from-pink-100 to-yellow-100">
        <h2 className="text-4xl md:text-6xl font-bold text-gray-800">Delicious Cakes Delivered to Your Door</h2>
        <p className="mt-4 text-lg text-gray-600">Freshly baked | Custom Designs | Fast Delivery in Mumbai</p>
        <button className="mt-6 px-6 py-3 bg-pink-600 text-white rounded-full hover:bg-pink-700">Order Now</button>
      </section>

      {/* Cakes with Pricing */}
      <section id="gallery" className="p-10 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8">Our Cakes & Pricing</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cakes.map((cake, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition">
              <img src={cake.img} alt="cake" className="w-full h-80 object-cover" />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold">{cake.name}</h3>
                <p className="text-pink-600 font-bold mt-2">{cake.price}</p>
                <button className="mt-3 px-4 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600">Order Now</button>
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
        <button className="mt-4 px-6 py-2 bg-green-500 text-white rounded-full hover:bg-green-600">
          Order on WhatsApp
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-4">
        <p>© 2026 Dessert THE Cake Shop. All rights reserved.</p>
      </footer>
    </div>
  );
}
