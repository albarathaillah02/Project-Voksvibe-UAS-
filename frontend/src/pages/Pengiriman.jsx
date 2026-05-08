import React from "react";
import Header1 from "../components/Header1";

const Pengiriman = ({ isDarkMode, toggleDarkMode, cartItems, cartCount, onSearch }) => {
  // Menghitung total harga dari item di keranjang
  const totalTagihan = cartItems.reduce(
    (acc, item) => acc + parseInt(item.harga.replace(".", "")) * item.quantity,
    0
  );

  const styles = {
    page: {
      backgroundColor: isDarkMode ? "#111" : "#fff",
      color: isDarkMode ? "#fff" : "#000",
      minHeight: "100vh",
      paddingTop: "120px",
      transition: "0.4s ease",
      fontFamily: "'Montserrat', sans-serif",
    },
    container: {
      display: "flex",
      maxWidth: "1200px",
      margin: "0 auto",
      gap: "30px",
      padding: "0 20px",
    },
    leftSection: {
      flex: "2",
      backgroundColor: isDarkMode ? "#1a1a1a" : "#e9f7f2", // Warna hijau muda sesuai desain
      borderRadius: "20px",
      padding: "40px",
      boxShadow: "10px 10px 0px rgba(0,0,0,0.1)",
    },
    rightSection: {
      flex: "1",
      backgroundColor: "#FFCC00",
      borderRadius: "20px",
      padding: "30px",
      height: "fit-content",
      color: "#000",
    },
    title: {
      fontWeight: "900",
      marginBottom: "20px",
      fontSize: "18px",
    },
    textarea: {
      width: "100%",
      height: "150px",
      borderRadius: "10px",
      border: isDarkMode ? "1px solid #444" : "1px solid #ccc",
      padding: "15px",
      fontSize: "14px",
      backgroundColor: isDarkMode ? "#333" : "#fff",
      color: isDarkMode ? "#fff" : "#000",
      marginBottom: "30px",
      boxSizing: "border-box",
      fontFamily: "inherit",
    },
    methodContainer: {
      display: "flex",
      gap: "20px",
    },
    methodBox: {
      flex: 1,
      padding: "15px",
      borderRadius: "10px",
      border: "1px solid #ccc",
      backgroundColor: isDarkMode ? "#333" : "#fff",
      display: "flex",
      justifyContent: "space-between",
      cursor: "pointer",
    },
    footer: {
      backgroundColor: "#000",
      color: "#fff",
      padding: "50px 8%",
      marginTop: "80px",
    },
    modeToggle: {
      position: "fixed", bottom: "30px", right: "30px",
      width: "60px", height: "60px", borderRadius: "50%",
      backgroundColor: isDarkMode ? "#FFCC00" : "#111",
      color: isDarkMode ? "#111" : "#FFCC00",
      border: "none", cursor: "pointer", zIndex: 3000,
      fontSize: "24px", display: "flex", alignItems: "center", justifyContent: "center"
    }
  };

  return (
    <div style={styles.page}>
      <Header1 cartCount={cartCount} onSearch={onSearch} isDarkMode={isDarkMode} />
      
      <main style={styles.container}>
        {/* BAGIAN KIRI: FORM ALAMAT & PENGIRIMAN */}
        <section style={styles.leftSection}>
          <div style={styles.title}>ALAMAT LENGKAP</div>
          <textarea 
            style={styles.textarea} 
            placeholder="Masukkan alamat lengkap (Jalan, RT, RW, Kelurahan, Kecamatan, Kode pos)"
          />

          <div style={styles.title}>METODE PENGIRIMAN</div>
          <div style={styles.methodContainer}>
            <div style={styles.methodBox}>
              <div>
                <div style={{fontWeight: "bold"}}>Reguler</div>
                <div style={{fontSize: "12px", color: "#888"}}>Estimasi 2 - 4 Hari Kerja</div>
              </div>
              <div style={{fontWeight: "bold"}}>Rp 0</div>
            </div>
            <div style={styles.methodBox}>
              <div>
                <div style={{fontWeight: "bold"}}>Express</div>
                <div style={{fontSize: "12px", color: "#888"}}>Estimasi 1 Hari Kerja</div>
              </div>
              <div style={{fontWeight: "bold"}}>Rp 0</div>
            </div>
          </div>
        </section>

        {/* BAGIAN KANAN: RINGKASAN BELANJA */}
        <aside style={styles.rightSection}>
          <h3 style={{fontWeight: "900", marginBottom: "40px"}}>RINGKASAN BELANJA</h3>
          <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <div style={{fontWeight: "bold", fontSize: "14px"}}>TOTAL TAGIHAN</div>
            <div style={{fontWeight: "900", fontSize: "28px"}}>Rp {totalTagihan.toLocaleString()}</div>
          </div>
          
          <button style={{
            width: "100%",
            padding: "15px",
            backgroundColor: "#000",
            color: "#fff",
            border: "none",
            borderRadius: "10px",
            marginTop: "30px",
            fontWeight: "bold",
            cursor: "pointer"
          }}>
            PILIH PENGIRIMAN →
          </button>
        </aside>
      </main>

      {/* FOOTER SESUAI DESAIN */}
      <footer style={styles.footer}>
        <div style={{display: "flex", justifyContent: "space-between"}}>
          <div>
            <h2 style={{fontWeight: "900", fontStyle: "italic"}}>VOKSVIBE</h2>
            <p style={{fontSize: "12px", color: "#888"}}>Streetwear brand from Indonesia.<br/>Stay authentic, stay vibe.</p>
          </div>
          <div style={{display: "flex", gap: "100px"}}>
            <div>
              <div style={{fontWeight: "bold", marginBottom: "15px"}}>BANTUAN</div>
              <div style={{fontSize: "12px", color: "#888", lineHeight: "2"}}>FAQ<br/>Pengiriman<br/>Pengembalian</div>
            </div>
            <div>
              <div style={{fontWeight: "bold", marginBottom: "15px"}}>KATEGORI</div>
              <div style={{fontSize: "12px", color: "#888", lineHeight: "2"}}>T - Shirts<br/>Outerwear<br/>Bottoms</div>
            </div>
          </div>
        </div>
      </footer>

      <button style={styles.modeToggle} onClick={toggleDarkMode}>
        {isDarkMode ? "☀️" : "🌙"}
      </button>
    </div>
  );
};

export default Pengiriman;