import React from "react";

const ProductCard = ({ product }) => {
  const styles = {
    card: { flex: "0 0 300px", display: "flex", flexDirection: "column" },
    imgBox: {
      width: "100%",
      aspectRatio: "1/1",
      backgroundColor: "#F2F2F2",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "15px",
      overflow: "hidden"
    },
    img: {
      width: "100%",
      height: "100%",
      objectFit: "cover" // Foto produk full di dalem kotak
    },
    infoRow: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "5px" },
    category: { fontSize: "12px", fontWeight: "700", color: "#888" },
    rating: { display: "flex", alignItems: "center", gap: "4px", fontSize: "12px", fontWeight: "700" },
    name: { fontSize: "16px", fontWeight: "900", textTransform: "uppercase", margin: "0 0 5px 0" },
    price: { fontSize: "14px", fontWeight: "700" }
  };

  return (
    <div style={styles.card}>
      <div style={styles.imgBox}>
        <img src={product.image} alt={product.name} style={styles.img} />
      </div>
      <div style={styles.infoRow}>
        <span style={styles.category}>{product.category}</span>
        <div style={styles.rating}>
          <span style={{ color: "#FFCC00" }}>★</span> {product.rating}
        </div>
      </div>
      <h3 style={styles.name}>{product.name}</h3>
      <p style={styles.price}>{product.price}</p>
    </div>
  );
};

export default ProductCard;