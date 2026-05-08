import { useNavigate, useLocation } from "react-router-dom";
import React, { useState } from "react";

const Header1 = ({ cartCount, onSearch }) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);

  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  // FUNGSI UNTUK HANDLE ENTER SAAT MENCARI
  const handleSearchSubmit = (e) => {
    e.preventDefault(); // Mencegah reload halaman
    // Jika sedang di halaman lain (misal Profile/Cart), pindah ke Home agar hasil terlihat
    if (location.pathname !== "/") {
      navigate("/");
    }
  };

  // FUNGSI KRUSIAL: Reset search & pindah halaman
  const handleCategoryClick = (path) => {
    if (typeof onSearch === "function") {
      onSearch(""); // Membersihkan kolom pencarian agar produk kategori muncul semua
    }
    navigate(path);
    setIsDropdownOpen(false); // Menutup dropdown setelah diklik
  };

  const handleRestrictedAction = (targetPath) => {
    if (isLoggedIn) {
      navigate(targetPath);
    } 
    else if (location.pathname === "/login" || location.pathname === "/Register") {
      setShowModal(true);
    } 
    else {
      navigate("/login");
    }
  };

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
      cursor: "pointer",
      display: isSearchActive && window.innerWidth < 600 ? "none" : "block"
    },
    nav: {
      display: "flex",
      gap: "25px",
      alignItems: "center",
    },
    navLink: {
      textDecoration: "none",
      color: "#000",
      fontSize: "13px",
      fontWeight: "700",
      textTransform: "uppercase",
      cursor: "pointer",
    },
    dropdownWrapper: {
      position: "relative",
      display: "inline-block",
    },
    dropdownMenu: {
      position: "absolute",
      top: "100%", 
      left: "0",
      backgroundColor: "transparent",
      minWidth: "180px",
      paddingTop: "15px", 
      display: isDropdownOpen ? "block" : "none", 
      zIndex: 1001,
    },
    dropdownContent: {
      backgroundColor: "#fff",
      borderRadius: "12px",
      boxShadow: "0px 10px 25px rgba(0,0,0,0.15)",
      padding: "10px 0",
      overflow: "hidden",
    },
    dropdownItem: {
      padding: "12px 20px",
      display: "block",
      textDecoration: "none",
      color: "#000",
      fontSize: "12px",
      fontWeight: "700",
      cursor: "pointer",
      transition: "background 0.2s",
    },
    iconGroup: {
      display: "flex",
      alignItems: "center",
      gap: "20px",
    },
    searchBox: {
      display: "flex",
      alignItems: "center",
      backgroundColor: isSearchActive ? "rgba(255,255,255,0.9)" : "transparent",
      padding: isSearchActive ? "5px 15px" : "0",
      borderRadius: "25px",
      transition: "all 0.3s ease",
      border: isSearchActive ? "1px solid #000" : "none",
      margin: 0, // Reset margin form bawaan browser
    },
    searchInput: {
      border: "none",
      background: "none",
      outline: "none",
      width: isSearchActive ? "150px" : "0px",
      transition: "width 0.3s ease",
      padding: 0,
      fontSize: "14px",
      fontWeight: "600",
      color: "#000"
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
    },
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0,0,0,0.85)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 9999,
    },
    modal: {
      backgroundColor: "#111",
      padding: "40px",
      borderRadius: "20px",
      textAlign: "center",
      border: "2px solid #FFCC00",
      maxWidth: "400px",
      width: "85%",
      boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
    },
    modalTitle: {
      color: "#FFCC00",
      fontSize: "24px",
      fontWeight: "900",
      fontStyle: "italic",
      marginBottom: "15px",
      textTransform: "uppercase",
    },
    modalBtn: {
      backgroundColor: "#FFCC00",
      color: "#000",
      border: "none",
      padding: "12px 30px",
      borderRadius: "8px",
      fontWeight: "900",
      cursor: "pointer",
      marginTop: "20px",
      textTransform: "uppercase",
    }
  };

  return (
    <>
      <header style={styles.header}>
        <div onClick={() => navigate("/")} style={styles.logo}>VOKSVIBE</div>

        <nav style={styles.nav}>
          <div 
            style={styles.dropdownWrapper}
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <span style={{...styles.navLink, borderBottom: isDropdownOpen ? "2px solid #000" : "none"}}>
              CATEGORY ▾
            </span>
            
            <div style={styles.dropdownMenu}>
              <div style={styles.dropdownContent}>
                <div onClick={() => handleCategoryClick("/t-shirts")} style={styles.dropdownItem}>T - SHIRTS</div>
                <div onClick={() => handleCategoryClick("/shirt")} style={styles.dropdownItem}>SHIRTS</div>
                <div onClick={() => handleCategoryClick("/hoodie")} style={styles.dropdownItem}>HOODIE</div>
                <div onClick={() => handleCategoryClick("/jacket")} style={styles.dropdownItem}>JACKET</div>
                <div onClick={() => handleCategoryClick("/")} style={{...styles.dropdownItem, color: "#FFCC00", borderTop: "1px solid #eee"}}>ALL PRODUCTS</div>
              </div>
            </div>
          </div>

          <a href="#trending" style={styles.navLink}>Trending Now</a>
          <a href="#lookbook" style={styles.navLink}>Lookbook</a>
          <a href="#sale" style={{...styles.navLink, color: "#FF0000"}}>Sale</a>
        </nav>

        <div style={styles.iconGroup}>
          {/* SEARCH FORM - MEMUNGKINKAN TEKAN ENTER */}
          <form onSubmit={handleSearchSubmit} style={styles.searchBox}>
            <input 
              type="text" 
              placeholder="Cari produk..." 
              style={styles.searchInput}
              onChange={(e) => onSearch(e.target.value)}
              autoFocus={isSearchActive}
            />
            <div style={styles.iconWrapper} onClick={() => setIsSearchActive(!isSearchActive)}>
              <img src="/searchicons.svg" alt="Search" style={styles.iconImg} />
            </div>
          </form>

          <div style={styles.iconWrapper} onClick={() => handleRestrictedAction("/cart")}>
            <img src="/carticons.svg" alt="Cart" style={styles.iconImg} />
            <span style={styles.cartBadge}>{cartCount}</span>
          </div>

          <div style={styles.iconWrapper} onClick={() => handleRestrictedAction("/profile")}>
            <img src="/profileicons.svg" alt="Profile" style={styles.iconImg} />
          </div>
        </div>
      </header>

      {showModal && (
        <div style={styles.overlay}>
          <div style={styles.modal}>
            <h2 style={styles.modalTitle}>ACCESS DENIED</h2>
            <p style={{ color: "#fff", lineHeight: "1.5", fontSize: "14px" }}>
              Ayo login dulu! Kamu perlu masuk ke akun <b>VOKSVIBE</b> untuk mengakses halaman ini.
            </p>
            <button style={styles.modalBtn} onClick={() => setShowModal(false)}>OKE, MENGERTI</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header1;