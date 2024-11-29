import React from "react";
// import products from "./products.json"; // Import the JSON file
// import products from "../pages/products";
import products from "../products.json"

const Cards = () => {
  return (
      <>
      <div className="mt-16 pt-14 flex justify-center text-6xl">
        <h1>
          Our Products
        </h1>
      </div>
          <div className="mt-12" style={styles.container}>
      {products.map((product) => (
        <div key={product.id} style={styles.card}>
          <img
            src={product.image}
            alt={product.title}
            style={styles.image}
          />
          <h3 style={styles.title}>{product.title}</h3>
          <p style={styles.description}>{product.description}</p>
        </div>
      ))}
    </div>
      </>
  );
};

const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "60px",
    padding: "40px"
  },
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "16px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    backgroundColor: "#fff"
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "4px"
  },
  title: {
    fontSize: "1.2rem",
    margin: "10px 0"
  },
  description: {
    fontSize: "0.9rem",
    color: "#555"
  }
};

export default Cards;
