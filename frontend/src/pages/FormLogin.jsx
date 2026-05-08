import { memo, useEffect, useState } from "react"; 
import { Link, useNavigate } from "react-router-dom"; 
import Header1 from "../components/Header1";

const FormLogin = memo(() => {
  const navigate = useNavigate(); 
  
  // State untuk menangkap input dari form
  const [role, setRole] = useState("User");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Load Google Fonts (Montserrat & Poppins)
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,700;0,800;1,700&family=Poppins:wght@300;400;600&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  // --- FUNGSI LOGIN (HANDLER UTAMA) ---
  const handleSubmit = (e) => {
    e.preventDefault(); // Mencegah reload halaman

    // 1. Simpan data ke localStorage. 
    // Ini adalah 'KUNCI' agar Header1 tahu kamu sudah login.
    localStorage.setItem("userRole", role);
    localStorage.setItem("isLoggedIn", "true");

    console.log("Berhasil Login sebagai:", role);

    // 2. Berpindah ke halaman Beranda (Utama)
    navigate("/"); 
  };

  const styles = {
    mainWrapper: {
      backgroundColor: "#fff",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      paddingTop: "80px", 
      boxSizing: "border-box",
    },
    loginContainer: {
      display: "flex",
      flex: 1,
      minHeight: "calc(100vh - 80px)",
      flexWrap: "wrap",
    },
    leftSection: {
      flex: 1,
      minWidth: "450px",
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
    rightSection: {
      flex: 1,
      minWidth: "450px",
      padding: "40px 80px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      boxSizing: "border-box",
    },
    loginTitle: {
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: "800",
      fontSize: "42px",
      fontStyle: "italic",
      marginBottom: "5px",
      color: "#000",
    },
    loginSubtitle: {
      fontFamily: "'Poppins', sans-serif",
      fontSize: "15px",
      color: "#333",
      marginBottom: "30px",
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
      marginBottom: "20px",
      border: "1px solid #ccc",
      borderRadius: "4px",
      fontFamily: "'Poppins', sans-serif",
      fontSize: "14px",
      boxSizing: "border-box",
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
    },
    registerLink: {
      color: "#0066cc",
      textDecoration: "none",
      cursor: "pointer"
    }
  };

  return (
    <div style={styles.mainWrapper}>
      <Header1 />

      <div style={styles.loginContainer}>
        {/* Sisi Kiri: Branding */}
        <div style={styles.leftSection}>
          <h1 style={styles.brandSide}>VOKSVIBE</h1>
          <p style={styles.textSide}>
            Ayo bergabung dengan komunitas streetwear di Universitas Brawijaya
          </p>
        </div>

        {/* Sisi Kanan: Form */}
        <div style={styles.rightSection}>
          <h2 style={styles.loginTitle}>MASUK</h2>
          <p style={styles.loginSubtitle}>Selamat Datang! Masukkan Detail Login Anda.</p>
          
          <form onSubmit={handleSubmit}> 
            <div style={{ display: "flex", gap: "30px", marginBottom: "25px", fontFamily: "'Poppins', sans-serif" }}>
              <label style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: "8px" }}>
                <input 
                  type="radio" 
                  name="role" 
                  value="Admin" 
                  onChange={(e) => setRole(e.target.value)} 
                /> Admin
              </label>
              <label style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: "8px" }}>
                <input 
                  type="radio" 
                  name="role" 
                  value="User" 
                  defaultChecked 
                  onChange={(e) => setRole(e.target.value)} 
                /> User
              </label>
            </div>

            <div>
              <label style={styles.label}>Email</label>
              <input 
                type="email" 
                placeholder="Masukkan email anda" 
                style={styles.inputField} 
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label style={styles.label}>Password</label>
              <input 
                type="password" 
                placeholder="Masukkan password" 
                style={styles.inputField} 
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit" style={styles.btnLogin}>LOGIN</button>

            <div style={{ marginTop: "20px", display: "flex", justifyContent: "space-between", fontSize: "13px", fontFamily: "'Poppins', sans-serif" }}>
              <span style={{ color: "#333" }}>
                Tidak punya akun? {" "}
                <Link to="/Register" style={styles.registerLink}>
                  <b>Daftar disini</b>
                </Link>
              </span>
              <span style={{ color: "#0066cc", cursor: "pointer" }}>Lupa password</span>
            </div>
          </form>
        </div>
      </div>
      {/* Sisa footer... */}
    </div>
  );
});

export default FormLogin;