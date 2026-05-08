import React from "react";
import { Link } from "react-router-dom";
import Header1 from "../components/Header1";

const Profile = ({ isDarkMode, toggleDarkMode, cartCount, onSearch }) => {
  const styles = {
    pageContainer: {
      backgroundColor: isDarkMode ? "#111" : "#fff",
      minHeight: "100vh",
      paddingTop: "120px", 
      paddingBottom: "80px",
      fontFamily: "'Montserrat', sans-serif",
      transition: "0.4s ease",
      color: isDarkMode ? "#fff" : "#000",
    },
    mainContent: {
      display: "flex",
      maxWidth: "1200px",
      margin: "0 auto",
      gap: "30px",
      padding: "0 20px",
    },
    // SIDEBAR KIRI
    sidebar: {
      flex: "0 0 300px",
      border: isDarkMode ? "2px solid #FFCC00" : "2px solid #000",
      borderRadius: "15px",
      padding: "30px 20px",
      height: "fit-content",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: isDarkMode ? "#1a1a1a" : "transparent",
    },
    avatarBig: {
      width: "100px",
      height: "100px",
      borderRadius: "50%",
      border: isDarkMode ? "2px solid #FFCC00" : "2px solid #000",
      backgroundColor: isDarkMode ? "#333" : "#f0f0f0",
      marginBottom: "15px",
    },
    sidebarMenu: {
      width: "100%",
      marginTop: "10px",
      display: "flex",
      flexDirection: "column",
      gap: "10px",
    },
    menuItem: {
      display: "flex",
      alignItems: "center",
      gap: "15px",
      fontSize: "14px",
      fontWeight: "700",
      padding: "12px 15px",
      cursor: "pointer",
      textDecoration: "none",
      color: isDarkMode ? "#fff" : "#000",
      transition: "0.3s",
    },
    // KONTEN FORM KANAN
    formContainer: {
      flex: "1",
      border: isDarkMode ? "2px solid #FFCC00" : "2px solid #000",
      borderRadius: "15px",
      padding: "30px",
      backgroundColor: isDarkMode ? "#1a1a1a" : "transparent",
    },
    inputGroup: {
      marginBottom: "20px",
    },
    label: {
      display: "block",
      fontSize: "14px",
      fontWeight: "700",
      marginBottom: "8px",
      color: isDarkMode ? "#FFCC00" : "#000",
    },
    inputFull: {
      width: "100%",
      padding: "12px",
      borderRadius: "8px",
      border: isDarkMode ? "1px solid #444" : "2px solid #ccc",
      backgroundColor: isDarkMode ? "#333" : "#e0e0e0", 
      color: isDarkMode ? "#fff" : "#000",
      boxSizing: "border-box",
      fontFamily: "'Montserrat', sans-serif",
      outline: "none",
    },
    row: {
      display: "flex",
      gap: "20px",
      marginBottom: "20px",
    },
    radioGroup: {
      display: "flex",
      gap: "20px",
      marginTop: "10px",
      color: isDarkMode ? "#fff" : "#000",
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
  };

  return (
    <div style={styles.pageContainer}>
      <Header1 cartCount={cartCount} onSearch={onSearch} isDarkMode={isDarkMode} />

      <main style={styles.mainContent}>
        {/* SIDEBAR */}
        <aside style={styles.sidebar}>
          <div style={styles.avatarBig}></div>
          <h3 style={{ margin: "5px 0", fontWeight: "900" }}>USERNAME</h3>
          <p style={{ margin: 0, fontSize: "12px", color: isDarkMode ? "#aaa" : "#888" }}>User Email</p>
          
          <div style={{ width: "100%", height: "1px", backgroundColor: isDarkMode ? "#333" : "#eee", margin: "25px 0" }}></div>
          
          <div style={styles.sidebarMenu}>
            <Link to="/orders" style={styles.menuItem}>
              <span style={{ fontSize: "18px" }}>📦</span> Pesanan Saya
            </Link>
            
            <div style={styles.menuItem}>
              <span style={{ fontSize: "18px" }}>🤍</span> Wishlist
            </div>
          </div>

          <Link to="/login" style={{ ...styles.menuItem, marginTop: "80px", color: "red" }}>
            <span style={{ fontSize: "18px" }}>➡️</span> Keluar
          </Link>
        </aside>

        {/* DETAIL PROFIL (FORMULIR) */}
        <section style={styles.formContainer}>
          <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "30px" }}>
            <div style={{ ...styles.avatarBig, width: "80px", height: "80px", margin: 0 }}></div>
            <button style={{ 
                padding: "8px 15px", 
                border: isDarkMode ? "1px solid #FFCC00" : "1px solid #000", 
                background: isDarkMode ? "#333" : "#fff", 
                color: isDarkMode ? "#fff" : "#000",
                cursor: "pointer", 
                fontSize: "12px", 
                fontWeight: "700" 
            }}>
              Pilih Gambar
            </button>
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Username</label>
            <input type="text" style={styles.inputFull} placeholder="Username" />
          </div>

          <div style={styles.row}>
            <div style={{ flex: 1 }}>
              <label style={styles.label}>Email</label>
              <input type="email" style={styles.inputFull} placeholder="User Email" />
            </div>
            <div style={{ flex: 1 }}>
              <label style={styles.label}>Password</label>
              <input type="password" style={styles.inputFull} placeholder="********" />
            </div>
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Nomor Telepon</label>
            <input type="text" style={styles.inputFull} />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Jenis Kelamin</label>
            <div style={styles.radioGroup}>
              <label style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                <input type="radio" name="gender" /> Laki - Laki
              </label>
              <label style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                <input type="radio" name="gender" /> Perempuan
              </label>
              <label style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                <input type="radio" name="gender" /> Tidak Memberitahu
              </label>
            </div>
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Tanggal Lahir</label>
            <div style={styles.row}>
              <input type="text" style={{ ...styles.inputFull, flex: 1 }} placeholder="Hari" />
              <input type="text" style={{ ...styles.inputFull, flex: 1 }} placeholder="Bulan" />
              <input type="text" style={{ ...styles.inputFull, flex: 1 }} placeholder="Tahun" />
            </div>
          </div>

          <button style={{
            width: "100%",
            padding: "15px",
            backgroundColor: "#FFCC00",
            color: "#000",
            border: "none",
            borderRadius: "8px",
            fontWeight: "900",
            cursor: "pointer",
            marginTop: "10px"
          }}>
            SIMPAN PERUBAHAN
          </button>
        </section>
      </main>

      {/* Tombol Toggle Dark Mode */}
      <button style={styles.modeToggle} onClick={toggleDarkMode}>
        {isDarkMode ? "☀️" : "🌙"}
      </button>
    </div>
  );
};

export default Profile;