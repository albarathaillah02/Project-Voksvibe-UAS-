import React from "react";
import Header1 from "../components/Header1";
import ProductCard from "../components/ProductCard";

const Beranda = () => {
  const products = [
    { id: 1, category: "HOODIE", name: "HOODIE GRAY PREMIUM", price: "IDR 200.000", rating: "4.5", image: "produk1hoodie.jpg" },
    { id: 2, category: "SHIRT", name: "GREEN SHIRT VIBE", price: "IDR 250.000", rating: "4.8", image: "produk2kemeja.jpg" },
    { id: 3, category: "T-SHIRT", name: "BLACK BASIC T - SHIRT", price: "IDR 150.000", rating: "4.9", image: "produk3.jpg" },
    { id: 4, category: "T-SHIRT", name: "WHITE VIBE SHIRT", price: "IDR 150.000", rating: "4.7", image: "produk4kaosputih.jpg" },
  ];

  const styles = {
    container: { backgroundColor: "#fff", minHeight: "100vh" },
    
    // HERO FULL LAYAR
    hero: {
      width: "100%",
      height: "100vh", // Paksa tinggi 100% dari layar browser
      backgroundImage: "url('produkbg.jpg')", // GANTI PATH GAMBAR MODEL LO
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative"
    },
    shopBtn: {
      padding: "18px 50px",
      border: "3px solid #FFCC00",
      backgroundColor: "rgba(0,0,0,0.1)", 
      color: "#FFCC00",
      fontSize: "30px",
      fontWeight: "900",
      fontStyle: "italic",
      cursor: "pointer",
      textTransform: "uppercase",
      zIndex: 10
    },

    // BEST SELLERS SECTION
    section: { padding: "80px 8% 40px 8%" },
    scrollWrapper: {
      display: "flex",
      gap: "30px",
      overflowX: "auto",
      paddingBottom: "20px",
    },
    progressBar: { width: "100%", height: "4px", backgroundColor: "#eee", marginTop: "10px" },

    // FOOTER
    footer: {
      backgroundColor: "#000",
      color: "#fff",
      padding: "80px 8%",
      display: "flex",
      justifyContent: "space-between",
    },
    footerLogo: { color: "#FFCC00", fontSize: "32px", fontWeight: "900", fontStyle: "italic", marginBottom: "20px" }
  };

  return (
    <div style={styles.container}>
      <style>{`.hide-scroll::-webkit-scrollbar { display: none; }`}</style>
      
      {/* Header gue taro di luar biar dia ngambang di atas Hero */}
      <Header1 />

      {/* 1. HERO SECTION FULL LAYAR */}
      <section style={styles.hero}>
        <button 
          style={styles.shopBtn}
          onMouseOver={(e) => {e.target.style.backgroundColor="#FFCC00"; e.target.style.color="#000"}}
          onMouseOut={(e) => {e.target.style.backgroundColor="rgba(0,0,0,0.1)"; e.target.style.color="#FFCC00"}}
        >
          SHOP NOW
        </button>
      </section>

      {/* 2. BEST SELLERS DI BAWAHNYA */}
      <section style={styles.section}>
        <h2 style={{ fontSize: "36px", fontWeight: "900", fontStyle: "italic", marginBottom: "40px" }}>
          BEST <span style={{ color: "#FFCC00" }}>SELLERS</span>
        </h2>
        
        <div style={styles.scrollWrapper} className="hide-scroll">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
        
        <div style={styles.progressBar}>
          <div style={{ width: "35%", height: "100%", backgroundColor: "#FFCC00" }}></div>
        </div>
      </section>

      <footer style={styles.footer}>
        <div>
          <div style={styles.footerLogo}>VOKSVIBE</div>
          <p style={{ color: "#888", maxWidth: "300px" }}>Streetwear brand from Indonesia. Stay authentic, stay vibe.</p>
        </div>
        <div style={{ display: "flex", gap: "80px" }}>
          <div>
            <h4 style={{ marginBottom: "20px" }}>BANTUAN</h4>
            <div style={{ color: "#888", display: "flex", flexDirection: "column", gap: "10px" }}>
              <span>FAQ</span><span>Pengiriman</span><span>Pengembalian</span>
            </div>
          </div>
          <div>
            <h4 style={{ marginBottom: "20px" }}>KATEGORI</h4>
            <div style={{ color: "#888", display: "flex", flexDirection: "column", gap: "10px" }}>
              <span>T-Shirts</span><span>Outerwear</span><span>Bottoms</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Beranda;