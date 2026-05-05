import React from "react";
import { Link } from "react-router-dom";
import Header1 from "../components/Header1";

const Profile = () => {
  const styles = {
    pageContainer: {
      backgroundColor: "#fff",
      minHeight: "100vh",
      paddingTop: "120px", // Jarak agar tidak tertutup header
      paddingBottom: "80px",
      fontFamily: "'Montserrat', sans-serif",
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
      border: "2px solid #000",
      borderRadius: "15px",
      padding: "30px 20px",
      height: "fit-content",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    avatarBig: {
      width: "100px",
      height: "100px",
      borderRadius: "50%",
      border: "2px solid #000",
      backgroundColor: "#f0f0f0",
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
      color: "#000",
    },
    // KONTEN FORM KANAN
    formContainer: {
      flex: "1",
      border: "2px solid #000",
      borderRadius: "15px",
      padding: "30px",
    },
    inputGroup: {
      marginBottom: "20px",
    },
    label: {
      display: "block",
      fontSize: "14px",
      fontWeight: "700",
      marginBottom: "8px",
    },
    inputFull: {
      width: "100%",
      padding: "12px",
      borderRadius: "8px",
      border: "2px solid #ccc",
      backgroundColor: "#e0e0e0", // Warna abu-abu sesuai desain
      boxSizing: "border-box",
      fontFamily: "'Montserrat', sans-serif",
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
    }
  };

  return (
    <div style={styles.pageContainer}>
      <Header1 />

      <main style={styles.mainContent}>
        {/* SIDEBAR */}
        <aside style={styles.sidebar}>
          <div style={styles.avatarBig}></div>
          <h3 style={{ margin: "5px 0", fontWeight: "900" }}>USERNAME</h3>
          <p style={{ margin: 0, fontSize: "12px", color: "#888" }}>User Email</p>
          
          <div style={{ width: "100%", height: "1px", backgroundColor: "#eee", margin: "25px 0" }}></div>
          
          <div style={styles.sidebarMenu}>
            {/* Navigasi ke Halaman Pesanan */}
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
            <button style={{ padding: "8px 15px", border: "1px solid #000", background: "#fff", cursor: "pointer", fontSize: "12px", fontWeight: "700" }}>
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
              <label><input type="radio" name="gender" /> Laki - Laki</label>
              <label><input type="radio" name="gender" /> Perempuan</label>
              <label><input type="radio" name="gender" /> Tidak Memberitahu</label>
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
        </section>
      </main>
    </div>
  );
};

export default Profile;