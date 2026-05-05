import React from "react";
import Header1 from "../components/Header1";

const Orders = () => {
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
    menuItemActive: {
      display: "flex",
      alignItems: "center",
      gap: "15px",
      fontSize: "14px",
      fontWeight: "700",
      backgroundColor: "#FFCC00", // Warna kuning aktif sesuai Figma
      padding: "12px 15px",
      borderRadius: "10px",
      cursor: "pointer",
    },
    menuItem: {
      display: "flex",
      alignItems: "center",
      gap: "15px",
      fontSize: "14px",
      fontWeight: "700",
      padding: "12px 15px",
      cursor: "pointer",
    },
    // KONTEN PESANAN KOSONG
    emptyContent: {
      flex: "1",
      border: "2px solid #000",
      borderRadius: "15px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "60px 40px",
      textAlign: "center",
    },
    boxIcon: {
      width: "120px",
      height: "120px",
      backgroundColor: "#e0e0e0",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "50px",
      marginBottom: "30px",
    },
    title: {
      fontSize: "28px",
      fontWeight: "900",
      margin: "0 0 15px 0",
      textTransform: "capitalize",
    },
    subtitle: {
      fontSize: "16px",
      color: "#666",
      lineHeight: "1.5",
      maxWidth: "500px",
      margin: 0,
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
            <div style={styles.menuItemActive}>
              <span style={{ fontSize: "18px" }}>📦</span> Pesanan Saya
            </div>
            <div style={styles.menuItem}>
              <span style={{ fontSize: "18px" }}>🤍</span> Wishlist
            </div>
          </div>

          <div style={{ 
            marginTop: "80px", 
            color: "#FF0000", 
            fontWeight: "800", 
            cursor: "pointer", 
            display: "flex", 
            alignItems: "center", 
            gap: "10px",
            fontSize: "14px"
          }}>
            <span style={{ fontSize: "18px" }}>➡️</span> Keluar
          </div>
        </aside>

        {/* EMPTY STATE PESANAN */}
        <section style={styles.emptyContent}>
          <div style={styles.boxIcon}>📦</div>
          <h2 style={styles.title}>Belum ada pesanan</h2>
          <p style={styles.subtitle}>
            Anda belum melakukan pemesanan apapun. Yuk mulai belanja koleksi terbaru kami!
          </p>
        </section>
      </main>
    </div>
  );
};

export default Orders;