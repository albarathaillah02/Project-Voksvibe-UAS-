import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Header1 from "../components/Header1";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Password tidak cocok!");
      return;
    }
    console.log("Data Register:", formData);
    navigate("/login");
  };

  const styles = {
    // --- IMPORT FONT BARU (Gaya Header & Inter untuk Bacaan) ---
    // Pastikan letak font ini paling atas di file, sebelum return
    fontLink: (
      <link href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Inter:wght@400;700;900&display=swap" rel="stylesheet" />
    ),

    mainWrapper: {
      backgroundColor: "#fff",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      // Inter sebagai font default badan text agar mudah dibaca
      fontFamily: "'Inter', sans-serif", 
    },
    contentSection: {
      display: "flex",
      flex: 1,
      flexDirection: "row", 
      backgroundColor: "#fff",
      minHeight: "calc(100vh - 80px)",
    },
    // Sisi Kiri (Area Visual/Brand)
    leftSide: {
      flex: 1,
      backgroundColor: "#111",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "60px",
      color: "#FFCC00",
    },
    // FONT GAYA HEADER BESAR (VOKSVIBE KIRI)
    brandTitle: {
      // Archivo Black + Italic sangat mirip gaya streetwear header
      fontFamily: "'Archivo Black', sans-serif",
      fontStyle: "italic",
      fontSize: "80px", 
      margin: 0, 
      lineHeight: "1",
    },
    brandSubtitle: {
      fontFamily: "'Inter', sans-serif",
      color: "#fff", 
      fontSize: "16px", 
      fontWeight: "700",
      letterSpacing: "2px",
      marginTop: "10px",
      textTransform: "uppercase",
    },

    // Sisi Kanan (Form Pendaftaran)
    rightSide: {
      flex: 1.2,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "40px",
    },
    formBox: {
      width: "100%",
      maxWidth: "600px",
      backgroundColor: "#111",
      borderRadius: "20px",
      padding: "60px",
      color: "#fff",
      boxShadow: "0 20px 50px rgba(0,0,0,0.4)",
    },
    // FONT GAYA HEADER (JUDUL FORM)
    title: {
      fontFamily: "'Archivo Black', sans-serif",
      fontStyle: "italic",
      fontSize: "42px",
      fontWeight: "900",
      color: "#FFCC00",
      marginBottom: "10px",
      textTransform: "uppercase",
      letterSpacing: "-1px",
    },
    subtitle: {
      fontFamily: "'Inter', sans-serif",
      fontSize: "15px",
      color: "#bbb",
      marginBottom: "40px",
    },
    inputGrid: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "25px",
      marginBottom: "25px",
    },
    fullWidth: {
      gridColumn: "span 2",
    },
    // FONT GAYA HEADER (LABEL INPUT - Kecil & Bold)
    label: {
      display: "block",
      fontFamily: "'Inter', sans-serif", // Pakai Inter Bold agar kontras tapi tetap bersih
      fontWeight: "900",
      fontSize: "12px",
      marginBottom: "8px",
      color: "#FFCC00",
      textTransform: "uppercase",
      letterSpacing: "1.5px",
    },
    // FONT BACAAN BERSIH (ISI INPUT)
    input: {
      width: "100%",
      padding: "16px 20px",
      borderRadius: "10px",
      border: "1px solid #333",
      backgroundColor: "#222",
      color: "#fff",
      fontSize: "15px",
      fontFamily: "'Inter', sans-serif", // Agar ketikan user terbaca jelas
      fontWeight: "400",
      boxSizing: "border-box",
      transition: "0.3s",
    },
    // FONT GAYA HEADER (TOMBOL - Bold & Uppercase)
    btnRegister: {
      width: "100%",
      padding: "20px",
      backgroundColor: "#FFCC00",
      color: "#000",
      border: "none",
      borderRadius: "10px",
      fontFamily: "'Archivo Black', sans-serif", // Tombol pakai font bold gaya header
      fontStyle: "italic",
      fontSize: "17px",
      fontWeight: "900",
      cursor: "pointer",
      textTransform: "uppercase",
      letterSpacing: "1px",
      marginTop: "20px",
      transition: "0.3s",
    }
  };

  return (
    <>
      {/* --- RENDER FONT LINK --- */}
      {styles.fontLink}
      
      <div style={styles.mainWrapper}>
        <Header1 cartCount={0} />
        
        <div style={styles.contentSection}>
          {/* SISI KIRI: Branding/Visual */}
          <div style={styles.leftSide}>
            <h1 style={styles.brandTitle}>VOKSVIBE</h1>
            <p style={styles.brandSubtitle}>BE AUTHENTIC, STAY VIBE.</p>
          </div>

          {/* SISI KANAN: Form */}
          <div style={styles.rightSide}>
            <div style={styles.formBox}>
              <h2 style={styles.title}>JOIN THE VIBE</h2>
              <p style={styles.subtitle}>Daftar akun VOKSVIBE untuk pengalaman belanja yang lebih otentik.</p>

              <form onSubmit={handleSubmit}>
                <div style={styles.inputGrid}>
                  <div style={styles.fullWidth}>
                    <label style={styles.label}>Nama Lengkap</label>
                    <input type="text" name="fullName" placeholder="Contoh: Budi Santoso" style={styles.input} onChange={handleChange} required />
                  </div>

                  <div>
                    <label style={styles.label}>Username</label>
                    <input type="text" name="username" placeholder="voksvibe_user" style={styles.input} onChange={handleChange} required />
                  </div>

                  <div>
                    <label style={styles.label}>Email</label>
                    <input type="email" name="email" placeholder="email@contoh.com" style={styles.input} onChange={handleChange} required />
                  </div>

                  <div>
                    <label style={styles.label}>Password</label>
                    <input type="password" name="password" placeholder="••••••••" style={styles.input} onChange={handleChange} required />
                  </div>

                  <div>
                    <label style={styles.label}>Konfirmasi Password</label>
                    <input type="password" name="confirmPassword" placeholder="••••••••" style={styles.input} onChange={handleChange} required />
                  </div>
                </div>

                <button type="submit" style={styles.btnRegister}>Daftar Sekarang</button>
              </form>

              <p style={{textAlign: "center", marginTop: "30px", color: "#bbb", fontSize: "14px"}}>
                Sudah punya akun? <Link to="/login" style={{color: "#FFCC00", textDecoration: "none", fontWeight: "900"}}>Login di sini</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;