import { memo, useEffect } from "react";
import Header1 from "../components/Header1";

const Masuk = memo(() => {
  // Load Google Fonts (Montserrat & Poppins)
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,700;0,800;1,700&family=Poppins:wght@300;400;600&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  const styles = {
    mainWrapper: {
      backgroundColor: "#fff",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
    },
    loginContainer: {
      display: "flex",
      flex: 1,
      minHeight: "80vh",
    },
    // Sisi Kiri (Hitam)
    leftSection: {
      flex: 1,
      backgroundColor: "#111",
      color: "#fff",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "40px",
      textAlign: "center",
    },
    brandSide: {
      fontFamily: "'Montserrat', sans-serif",
      fontStyle: "italic",
      fontWeight: "800",
      fontSize: "48px",
      color: "#FFD700",
      marginBottom: "20px",
    },
    textSide: {
      fontFamily: "'Poppins', sans-serif",
      fontSize: "16px",
      maxWidth: "350px",
      lineHeight: "1.6",
    },
    // Sisi Kanan (Form Putih)
    rightSection: {
      flex: 1,
      padding: "60px 80px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    loginTitle: {
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: "800",
      fontSize: "42px",
      fontStyle: "italic",
      marginBottom: "10px",
      color: "#000",
    },
    loginSubtitle: {
      fontFamily: "'Poppins', sans-serif",
      fontSize: "16px",
      color: "#333",
      marginBottom: "40px",
    },
    label: {
      display: "block",
      fontFamily: "'Poppins', sans-serif",
      fontWeight: "600",
      marginBottom: "8px",
      fontSize: "14px",
    },
    inputField: {
      width: "100%",
      padding: "15px",
      marginBottom: "25px",
      border: "1px solid #ccc",
      borderRadius: "4px",
      fontFamily: "'Poppins', sans-serif",
      fontSize: "14px",
    },
    btnLogin: {
      width: "100%",
      padding: "15px",
      backgroundColor: "#000",
      color: "#fff",
      border: "none",
      borderRadius: "4px",
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: "700",
      fontSize: "16px",
      cursor: "pointer",
      textTransform: "uppercase",
      letterSpacing: "2px",
      marginTop: "10px",
    },
    // Footer Section
    footer: {
      backgroundColor: "#000",
      color: "#fff",
      padding: "80px 10% 60px 10%",
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: "40px",
      fontFamily: "'Poppins', sans-serif",
    },
    footerTitle: {
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: "800",
      marginBottom: "25px",
      fontSize: "20px",
      letterSpacing: "1px",
    }
  };

  return (
    <div style={styles.mainWrapper}>
      {/* 1. Header */}
      <Header1 />

      {/* 2. Login Content Section */}
      <div style={styles.loginContainer}>
        {/* Kolom Kiri */}
        <div style={styles.leftSection}>
          <h1 style={styles.brandSide}>VOKSVIBE</h1>
          <p style={styles.textSide}>
            Ayo bergabung dengan komunitas streetwear di Universitas Brawijaya
          </p>
          <div style={{ display: "flex", gap: "20px", marginTop: "40px" }}>
            <div style={{ width: "150px", height: "100px", border: "1px solid #333", backgroundColor: "#222" }}></div>
            <div style={{ width: "150px", height: "100px", border: "1px solid #333", backgroundColor: "#222" }}></div>
          </div>
        </div>

        {/* Kolom Kanan (Form) */}
        <div style={styles.rightSection}>
          <h2 style={styles.loginTitle}>MASUK</h2>
          <p style={styles.loginSubtitle}>Selamat Datang! Masukkan Detail Login Anda.</p>
          
          <form>
            <div style={{ display: "flex", gap: "30px", marginBottom: "30px", fontFamily: "'Poppins', sans-serif" }}>
              <label style={{ cursor: "pointer" }}><input type="radio" name="role" /> Admin</label>
              <label style={{ cursor: "pointer" }}><input type="radio" name="role" /> User</label>
            </div>

            <div>
              <label style={styles.label}>Email</label>
              <input type="email" placeholder="Masukkan email anda" style={styles.inputField} />
            </div>

            <div>
              <label style={styles.label}>Password</label>
              <input type="password" placeholder="Masukkan password" style={styles.inputField} />
            </div>

            <button type="submit" style={styles.btnLogin}>LOGIN</button>

            <div style={{ marginTop: "20px", display: "flex", justifyContent: "space-between", fontSize: "13px", fontFamily: "'Poppins', sans-serif" }}>
              <span style={{ color: "#0066cc", cursor: "pointer" }}>Tidak punya akun? <b>Daftar disini</b></span>
              <span style={{ color: "#0066cc", cursor: "pointer" }}>Lupa password</span>
            </div>
          </form>
        </div>
      </div>

      {/* 3. Footer (Dihadirkan Kembali) */}
      <footer style={styles.footer}>
        <div style={{ flex: "1", minWidth: "250px" }}>
          <h2 style={{ ...styles.footerTitle, fontStyle: "italic", fontSize: "28px", color: "#FFD700" }}>VOKSVIBE</h2>
          <p style={{ color: "#aaa", fontSize: "14px", maxWidth: "300px", lineHeight: "1.6" }}>
            Streetwear brand from Indonesia. Stay authentic, stay vibe.
          </p>
        </div>

        <div style={{ flex: "1" }}>
          <h3 style={styles.footerTitle}>BANTUAN</h3>
          <ul style={{ listStyle: "none", padding: 0, color: "#aaa", lineHeight: "2.5", fontSize: "14px" }}>
            <li>FAQ</li>
            <li>Pengiriman</li>
            <li>Pengembalian</li>
          </ul>
        </div>

        <div style={{ flex: "1" }}>
          <h3 style={styles.footerTitle}>KATEGORI</h3>
          <ul style={{ listStyle: "none", padding: 0, color: "#aaa", lineHeight: "2.5", fontSize: "14px" }}>
            <li>T - Shirts</li>
            <li>Outerwear</li>
            <li>Bottoms</li>
          </ul>
        </div>
      </footer>
    </div>
  );
});

export default Masuk;