import React from "react";
import products from "../products.json";

const Cards = () => {
  return (
    <>
      <div className="mt-16 pt-14 text-center">
        <h1 className="text-5xl font-bold text-dark-orange">Our Products</h1>
      </div>

      <div className="mt-12 grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-8 sm:px-16 lg:px-24">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {product.title}
              </h3>
              <p className="text-gray-600 text-sm">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cards;

