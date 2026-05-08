import React, { useState } from "react";
import Header1 from "../components/Header1";
import ProductCard from "../components/ProductCard";

const Beranda = ({ cartCount, onAddToCart, allProducts, onSearch, searchQuery, isDarkMode, toggleDarkMode }) => {
  const [showNotif, setShowNotif] = useState(false);
  const [notifName, setNotifName] = useState("");

  // Logika pembagian produk untuk tampilan beranda
  const bestSellers = allProducts.slice(0, 4);
  const newArrivals = allProducts.length > 4 ? allProducts.slice(4, 8) : allProducts.slice(0, 2);

  const handleAddToCart = (p) => {
    onAddToCart(p); 
    setNotifName(p.namaProduk || p.name); 
    setShowNotif(true); 

    setTimeout(() => {
      setShowNotif(false);
    }, 3000);
  };

  const styles = {
    container: { 
      backgroundColor: isDarkMode ? "#111" : "#fff", 
      color: isDarkMode ? "#fff" : "#000",
      minHeight: "100vh", 
      overflowX: "hidden",
      transition: "0.4s ease"
    },
    toastNotif: {
      position: "fixed",
      top: "100px", 
      left: "50%",
      transform: "translateX(-50%)",
      backgroundColor: "#111",
      color: "#FFCC00",
      padding: "15px 30px",
      borderRadius: "50px",
      fontWeight: "900",
      zIndex: 2000,
      boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
      display: showNotif ? "flex" : "none",
      alignItems: "center",
      gap: "10px",
      border: "2px solid #FFCC00",
      transition: "0.3s ease-in-out",
    },
    hero: {
      width: "100%",
      height: "100vh",
      backgroundImage: "url('produkbg.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      overflow: "hidden",
      WebkitMaskImage: "linear-gradient(to bottom, black 40%, transparent 95%)",
      maskImage: "linear-gradient(to bottom, black 40%, transparent 95%)"
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
      zIndex: 10,
      transition: "0.3s",
      position: "relative"
    },
    section: { padding: "80px 8% 40px 8%" },
    scrollWrapper: {
      display: "flex",
      gap: "30px",
      overflowX: "auto",
      paddingBottom: "30px",
      paddingTop: "10px",
      scrollBehavior: "smooth",
      WebkitOverflowScrolling: "touch",
      scrollSnapType: "x mandatory",
    },
    productCardContainer: {
      flex: "0 0 300px",
      scrollSnapAlign: "start",
    },
    progressBar: { 
      width: "100%", 
      height: "4px", 
      backgroundColor: isDarkMode ? "#333" : "#eee", 
      marginTop: "10px",
      marginBottom: "40px"
    },
    modeToggle: {
      position: "fixed",
      bottom: "30px",
      right: "30px",
      width: "60px",
      height: "60px",
      borderRadius: "50%",
      backgroundColor: isDarkMode ? "#FFCC00" : "#111",
      color: isDarkMode ? "#111" : "#FFCC00",
      border: "none",
      cursor: "pointer",
      fontSize: "24px",
      zIndex: 3000,
      boxShadow: "0 4px 15px rgba(0,0,0,0.4)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "0.3s"
    },
    footer: {
      backgroundColor: "#000",
      color: "#fff",
      padding: "80px 8%",
      display: "flex",
      justifyContent: "space-between",
    },
    footerLogo: { color: "#FFCC00", fontSize: "32px", fontWeight: "900", fontStyle: "italic", marginBottom: "20px" },
    footerLink: {
      color: "#888",
      textDecoration: "none",
      transition: "0.3s",
      fontSize: "14px"
    }
  };

  // Helper untuk merender list produk dalam baris scroll
  const RenderProductSection = (products, title, highlight) => (
    <>
      <h2 style={{ fontSize: "36px", fontWeight: "900", fontStyle: "italic", marginBottom: "40px", textTransform: "uppercase" }}>
        {title} <span style={{ color: "#FFCC00" }}>{highlight}</span>
      </h2>
      
      <div style={styles.scrollWrapper} className="hide-scroll">
        {products && products.length > 0 ? (
          products.map((p, index) => (
            <div 
              // PERBAIKAN: Menggunakan gabungan searchQuery dan ID agar animasi terpicu ulang setiap kali mencari
              key={`${searchQuery}-${p.id}-${index}`} 
              style={{
                ...styles.productCardContainer,
                animationDelay: `${index * 0.1}s` 
              }}
              className="animated-card"
            >
              <ProductCard 
                product={p} 
                onAddToCart={() => handleAddToCart(p)} 
                isDarkMode={isDarkMode}
              />
            </div>
          ))
        ) : (
          <p style={{ fontWeight: "700", color: "#888", fontSize: "18px" }}>
            Maaf, produk tidak ditemukan...
          </p>
        )}
      </div>
      
      <div style={styles.progressBar}>
        <div className="progress-inner" style={{ width: "35%", height: "100%", backgroundColor: "#FFCC00" }}></div>
      </div>
    </>
  );

  return (
    <div style={styles.container}>
      <style>{`
        .hide-scroll::-webkit-scrollbar { display: none; }
        
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animated-card {
          opacity: 0; /* Mulai dari transparan agar animasi fade-in terlihat jelas */
          animation: fadeInUp 0.6s ease forwards;
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .animated-card:hover {
          transform: translateY(-15px) scale(1.02);
          z-index: 5;
        }

        .progress-inner {
          transition: width 0.3s ease;
        }
      `}</style>
      
      <button style={styles.modeToggle} onClick={toggleDarkMode}>
        {isDarkMode ? "☀️" : "🌙"}
      </button>

      <div style={styles.toastNotif}>
        <span>✅</span> {notifName} BERHASIL DITAMBAHKAN
      </div>

      <Header1 cartCount={cartCount} onSearch={onSearch} isDarkMode={isDarkMode} />

      {(!searchQuery || searchQuery.trim() === "") && (
        <section style={styles.hero}>
          <button 
            style={styles.shopBtn}
            onMouseOver={(e) => {e.target.style.backgroundColor="#FFCC00"; e.target.style.color="#000"}}
            onMouseOut={(e) => {e.target.style.backgroundColor="rgba(0,0,0,0.1)"; e.target.style.color="#FFCC00"}}
          >
            SHOP NOW
          </button>
        </section>
      )}

      <section style={styles.section}>
        {(!searchQuery || searchQuery.trim() === "") ? (
          <>
            {RenderProductSection(bestSellers, "BEST", "SELLERS")}
            <div style={{ marginTop: "60px" }}>
              {RenderProductSection(newArrivals, "NEW", "ARRIVALS")}
            </div>
          </>
        ) : (
          <>
            {allProducts && allProducts.length > 0 ? (
              RenderProductSection(allProducts, "SEARCH", "RESULTS")
            ) : (
              <div style={{ textAlign: "center", padding: "100px 0" }}>
                <p style={{ fontWeight: "700", color: "#888", fontSize: "24px" }}>
                  Maaf, produk "{searchQuery}" tidak ditemukan...
                </p>
              </div>
            )}
          </>
        )}
      </section>

      <footer style={styles.footer}>
        <div>
          <div style={styles.footerLogo}>VOKSVIBE</div>
          <p style={{ color: "#888", maxWidth: "300px" }}>Streetwear brand from Indonesia. Stay authentic, stay vibe.</p>
        </div>
        <div style={{ display: "flex", gap: "80px" }}>
          <div>
            <h4 style={{ marginBottom: "20px" }}>BANTUAN</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <span style={{ color: "#888", cursor: "default" }}>Hubungi Kami di :</span>
              <a href="https://wa.me/6285741843675" target="_blank" rel="noopener noreferrer" style={styles.footerLink}>
                WhatsApp: +62 857-4184-3675
              </a>
              <a href="https://instagram.com/barathllh" target="_blank" rel="noopener noreferrer" style={styles.footerLink}>
                Instagram: @barathllh
              </a>
            </div>
          </div>
          <div>
            <h4 style={{ marginBottom: "20px" }}>KATEGORI</h4>
            <div style={{ color: "#888", display: "flex", flexDirection: "column", gap: "10px" }}>
              <span>T-Shirts</span><span>Shirts</span><span>Hoodie</span><span>Jacket</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Beranda;