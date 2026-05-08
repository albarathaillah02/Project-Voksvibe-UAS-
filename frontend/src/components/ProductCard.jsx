import React, { useState } from "react";

const ProductCard = ({ product, onAddToCart }) => {
  const [isHovered, setIsHovered] = useState(false);

  const styles = {
    card: { 
      flex: "0 0 300px", 
      display: "flex", 
      flexDirection: "column",
      cursor: "pointer",
      position: "relative" 
    },
    imgBox: {
      width: "100%",
      aspectRatio: "1/1",
      backgroundColor: "#F2F2F2",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "15px",
      overflow: "hidden",
      position: "relative" 
    },
    img: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transition: "transform 0.4s ease",
      transform: isHovered ? "scale(1.08)" : "scale(1)"
    },
    addToCartBtn: {
      position: "absolute",
      bottom: isHovered ? "20px" : "0px", 
      left: "50%",
      transform: "translateX(-50%)",
      backgroundColor: "#ffffff",
      color: "#000000",
      border: "2px solid #000000",
      borderRadius: "50px",
      padding: "10px 24px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "10px",
      fontSize: "12px",
      fontWeight: "900",
      textTransform: "uppercase",
      fontFamily: "'Inter', sans-serif",
      opacity: isHovered ? 1 : 0, 
      visibility: isHovered ? "visible" : "hidden",
      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      zIndex: 99, 
      whiteSpace: "nowrap",
      boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
      pointerEvents: isHovered ? "auto" : "none" 
    },
    overlay: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0,0,0,0.08)", 
      opacity: isHovered ? 1 : 0,
      transition: "opacity 0.3s ease",
      zIndex: 10
    },
    infoRow: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "5px" },
    category: { fontSize: "12px", fontWeight: "700", color: "#888", fontFamily: "'Inter', sans-serif" },
    rating: { display: "flex", alignItems: "center", gap: "4px", fontSize: "12px", fontWeight: "700", fontFamily: "'Inter', sans-serif" },
    name: { fontSize: "16px", fontWeight: "900", textTransform: "uppercase", margin: "0 0 5px 0", fontFamily: "'Inter', sans-serif" },
    price: { fontSize: "14px", fontWeight: "700", fontFamily: "'Inter', sans-serif" }
  };

  return (
    <div 
      style={styles.card}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={styles.imgBox}>
        {/* TOMBOL ADD TO CART */}
        <button 
          style={styles.addToCartBtn}
          onClick={(e) => {
            e.stopPropagation();
            onAddToCart(product); // MODIFIKASI: Kirim data produk saat diklik
          }}
        >
          <img 
            src="/carticons.svg" 
            alt="cart" 
            style={{ 
              width: "18px", 
              height: "18px",
              display: "block"
            }} 
          />
          Add to Cart
        </button>

        {/* MODIFIKASI: Menggunakan product.foto dan product.namaProduk agar sinkron dengan App.jsx */}
        <img src={product.foto} alt={product.namaProduk} style={styles.img} />
        <div style={styles.overlay}></div>
      </div>

      <div style={styles.infoRow}>
        {/* MODIFIKASI: Menggunakan product.kategori */}
        <span style={styles.category}>{product.kategori}</span>
        <div style={styles.rating}>
          <span style={{ color: "#FFCC00" }}>★</span> {product.rating}
        </div>
      </div>
      
      {/* MODIFIKASI: Menggunakan product.namaProduk dan product.harga */}
      <h3 style={styles.name}>{product.namaProduk}</h3>
      <p style={styles.price}>IDR {product.harga}</p>
    </div>
  );
};

export default ProductCard;