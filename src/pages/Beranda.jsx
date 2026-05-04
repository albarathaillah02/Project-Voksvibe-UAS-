import { memo, useEffect } from "react";
import { Link } from "react-router-dom";
import Header1 from "../components/Header1";
import BestSellers from "../components/BestSellers";
import Categories from "../components/Categories";

const Beranda = memo(() => {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,700;0,800;1,700&family=Poppins:wght@300;400;600&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.style.overflowX = "hidden";
  }, []);

  const styles = {
    container: {
      backgroundColor: "#fff",
      minHeight: "100vh",
      fontFamily: "'Poppins', sans-serif",
      width: "100%",
      margin: 0,
      padding: 0,
      display: "block",
    },
    heroSection: {
      width: "100%",
      height: "95vh",
      backgroundImage: "url('/produkbg.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
    },
    shopBtn: {
      padding: "18px 50px",
      fontSize: "22px",
      fontFamily: "'Montserrat', sans-serif",
      fontStyle: "italic",
      fontWeight: "800",
      backgroundColor: "transparent",
      border: "3px solid #FFD700",
      color: "#FFD700",
      cursor: "pointer",
      borderRadius: "4px",
      textTransform: "uppercase",
      letterSpacing: "2px",
      transition: "0.3s",
      zIndex: 10,
      position: "relative"
    },
    productSection: {
      width: "100%",
      backgroundColor: "#fff",
      position: "relative",
      marginTop: "-120px", 
      zIndex: 5,
      paddingBottom: "0", 
      display: "block",
    },
    footer: {
      backgroundColor: "#000",
      color: "#fff",
      padding: "80px 10% 60px 10%",
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: "40px",
      width: "100%",
      boxSizing: "border-box",
      margin: "0", 
      border: "none",
      position: "relative", 
    },
    footerTitle: {
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: "800",
      marginBottom: "25px",
      fontSize: "24px"
    }
  };

  return (
    <div style={styles.container}>
      <Header1 />

      <main style={styles.heroSection}>
        <Link to="/katalog" style={{ textDecoration: 'none', zIndex: 11 }}>
          <button 
            style={styles.shopBtn}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = "#FFD700";
              e.currentTarget.style.color = "#000";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "#FFD700";
            }}
          >
            SHOP NOW
          </button>
        </Link>
        
        {/* GRADASI SUPER HALUS (MULTI-STOP) */}
        <div style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "60%",
          background: "linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.05) 15%, rgba(255,255,255,0.2) 30%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0.8) 75%, #ffffff 100%)",
          zIndex: 1
        }} />
      </main>

      <section style={styles.productSection}>
        <Categories />
        <div style={{ marginTop: "60px", marginBottom: "0" }}>
          <BestSellers />
        </div>
      </section>

      <footer style={styles.footer}>
        <div style={{ flex: "1", minWidth: "250px" }}>
          <h1 style={{ ...styles.footerTitle, fontStyle: "italic", color: "#FFD700", margin: "0 0 25px 0" }}>VOKSVIBE</h1>
          <p style={{ color: "#aaa", fontSize: "14px", lineHeight: "1.6", margin: 0 }}>
            Streetwear brand from Indonesia. Stay authentic, stay vibe.
          </p>
        </div>

        <div style={{ flex: "1", minWidth: "150px" }}>
          <h3 style={{ ...styles.footerTitle, margin: "0 0 25px 0" }}>BANTUAN</h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, color: "#aaa", lineHeight: "2.5", fontSize: "14px" }}>
            <li>FAQ</li>
            <li>Pengiriman</li>
            <li>Pengembalian</li>
          </ul>
        </div>

        <div style={{ flex: "1", minWidth: "150px" }}>
          <h3 style={{ ...styles.footerTitle, margin: "0 0 25px 0" }}>KATEGORI</h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, color: "#aaa", lineHeight: "2.5", fontSize: "14px" }}>
            <li>T - Shirts</li>
            <li>Outerwear</li>
            <li>Bottoms</li>
          </ul>
        </div>
      </footer>
    </div>
  );
});

export default Beranda;