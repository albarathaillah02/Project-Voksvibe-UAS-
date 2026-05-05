import React from "react";

const Header1 = () => {
  const styles = {
    header: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "80px",
      backgroundColor: "#FFCC00",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 8%",
      zIndex: 1000,
      boxSizing: "border-box",
    },
    logo: {
      fontSize: "28px",
      fontWeight: "900",
      fontStyle: "italic",
      color: "#000",
      textDecoration: "none",
    },
    nav: {
      display: "flex",
      gap: "25px",
    },
    navLink: {
      textDecoration: "none",
      color: "#000",
      fontSize: "13px",
      fontWeight: "700",
      textTransform: "uppercase",
    },
    iconGroup: {
      display: "flex",
      alignItems: "center",
      gap: "20px",
    },
    iconWrapper: {
      position: "relative",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
    },
    iconImg: {
      width: "24px",
      height: "24px",
    },
    cartBadge: {
      position: "absolute",
      top: "-10px",
      right: "-10px",
      backgroundColor: "#fff",
      color: "#000",
      fontSize: "10px",
      fontWeight: "900",
      borderRadius: "50%",
      width: "18px",
      height: "18px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      border: "1px solid #000",
    }
  };

  return (
    <header style={styles.header}>
      <a href="/" style={styles.logo}>VOKSVIBE</a>

      <nav style={styles.nav}>
        <a href="#categories" style={styles.navLink}>Categories</a>
        <a href="#trending" style={styles.navLink}>Trending Now</a>
        <a href="#lookbook" style={styles.navLink}>Lookbook</a>
        <a href="#sale" style={{...styles.navLink, color: "#FF0000"}}>Sale</a>
      </nav>

      <div style={styles.iconGroup}>
        {/* Menggunakan file dari folder public sesuai git status lo */}
        <div style={styles.iconWrapper}>
          <img src="/searchicons.svg" alt="Search" style={styles.iconImg} />
        </div>
        
        <div style={styles.iconWrapper}>
          <img src="/carticons.svg" alt="Cart" style={styles.iconImg} />
          <span style={styles.cartBadge}>0</span>
        </div>

        <div style={styles.iconWrapper}>
          <img src="/profileicons.svg" alt="Profile" style={styles.iconImg} />
        </div>
      </div>
    </header>
  );
};

export default Header1;