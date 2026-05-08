import React from "react";
import { useNavigate } from "react-router-dom";
import Header1 from "../components/Header1";

const CartEmpty = ({ 
  cartItems = [], 
  cartCount = 0, 
  onRemoveItem, 
  onUpdateQty, 
  isDarkMode, 
  toggleDarkMode, 
  onSearch 
}) => {
  const navigate = useNavigate();

  // Logika hitung total tagihan
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const hargaStr = item.harga || "0";
      // Membersihkan karakter non-numeric agar bisa dihitung
      const priceNum = parseInt(hargaStr.toString().replace(/[^0-9]/g, ""), 10);
      return total + (priceNum * (item.quantity || 1));
    }, 0);
  };

  const styles = {
    container: { 
      width: "100%", 
      minHeight: "100vh", 
      backgroundColor: isDarkMode ? "#111" : "#fff", // Adaptasi Dark Mode
      paddingTop: "120px", 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center",
      transition: "0.4s ease",
      color: isDarkMode ? "#fff" : "#000"
    },
    mainContent: { 
      width: "85%", 
      display: "flex", 
      justifyContent: "space-between", 
      gap: "30px", 
      marginTop: "20px",
      flexWrap: "wrap" 
    },
    contentBox: { 
      flex: "2", 
      backgroundColor: isDarkMode ? "#1a1a1a" : "#111", // Lebih terang sedikit saat Dark Mode
      borderRadius: "15px", 
      display: "flex", 
      flexDirection: "column", 
      padding: "40px", 
      color: "#fff", 
      minHeight: "420px",
      border: isDarkMode ? "1px solid #333" : "none"
    },
    emptyState: { 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      justifyContent: "center", 
      height: "100%", 
      textAlign: "center" 
    },
    productList: { 
      display: "grid", 
      gridTemplateColumns: "1fr 1fr", 
      gap: "20px", 
      width: "100%" 
    },
    productCard: { 
      backgroundColor: "#FFCC00", 
      borderRadius: "15px", 
      padding: "15px", 
      display: "flex", 
      alignItems: "center", 
      gap: "15px", 
      color: "#000", 
      position: "relative" 
    },
    qtyWrapper: { display: "flex", alignItems: "center", gap: "10px", marginTop: "10px" },
    qtyBtn: { 
      border: "none", 
      backgroundColor: "#000", 
      color: "#fff", 
      width: "25px", 
      height: "25px", 
      borderRadius: "5px", 
      cursor: "pointer", 
      fontWeight: "900" 
    },
    btnRemove: { 
      position: "absolute", 
      top: "15px", 
      right: "15px", 
      backgroundColor: "transparent", 
      border: "1px solid #000", 
      borderRadius: "5px", 
      padding: "4px 8px", 
      fontSize: "10px", 
      fontWeight: "900", 
      cursor: "pointer" 
    },
    summaryBox: { 
      flex: "0.9", 
      backgroundColor: "#FFCC00", 
      borderRadius: "15px", 
      padding: "40px 30px", 
      height: "fit-content", 
      minWidth: "320px",
      color: "#000"
    },
    btnAction: { 
      width: "100%", 
      backgroundColor: "#000", 
      color: "#fff", 
      border: "none", 
      borderRadius: "12px", 
      padding: "18px", 
      marginTop: "30px", 
      fontWeight: "900", 
      cursor: "pointer", 
      textTransform: "uppercase" 
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
      justifyContent: "center"
    }
  };

  // Fungsi saat tombol Checkout ditekan
  const handleCheckout = () => {
    if (cartItems.length === 0) {
      navigate("/"); // Kembali ke beranda jika kosong
    } else {
      navigate("/pengiriman"); // Pergi ke halaman alamat jika ada barang
    }
  };

  return (
    <div style={styles.container}>
      <Header1 cartCount={cartCount} onSearch={onSearch} isDarkMode={isDarkMode} />

      <div style={styles.mainContent}>
        {/* BOX DAFTAR PRODUK */}
        <div style={styles.contentBox}>
          {cartItems.length === 0 ? (
            <div style={styles.emptyState}>
              <img src="/carticonswhite.png" alt="Empty" style={{ width: "140px", marginBottom: "20px" }} />
              <p style={{ fontSize: "20px", lineHeight: "1.5" }}>
                Keranjang mu kosong nih.<br />Yuk cari produk keinginanmu
              </p>
            </div>
          ) : (
            <>
              <h2 style={{ marginBottom: "30px", fontWeight: "900" }}>DAFTAR BELANJA</h2>
              <div style={styles.productList}>
                {cartItems.map((item, index) => (
                  <div key={item.id || index} style={styles.productCard}>
                    <img src={item.foto} alt={item.namaProduk} style={{ width: "70px", height: "70px", borderRadius: "10px", objectFit: "cover" }} />
                    <div style={{ flex: 1 }}>
                      <h4 style={{ margin: 0, fontWeight: "900", fontSize: "13px" }}>{item.namaProduk}</h4>
                      <p style={{ margin: "2px 0", fontWeight: "700" }}>IDR {item.harga}</p>
                      
                      <div style={styles.qtyWrapper}>
                        <button style={styles.qtyBtn} onClick={() => onUpdateQty(index, -1)}>-</button>
                        <span style={{ fontWeight: "900", color: "#000" }}>{item.quantity || 1}</span>
                        <button style={styles.qtyBtn} onClick={() => onUpdateQty(index, 1)}>+</button>
                      </div>
                    </div>
                    <button style={styles.btnRemove} onClick={() => onRemoveItem(index)}>HAPUS</button>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        {/* BOX RINGKASAN BELANJA */}
        <div style={styles.summaryBox}>
          <h2 style={{ fontWeight: "900", textTransform: "uppercase", marginBottom: "60px" }}>Ringkasan Belanja</h2>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <span style={{ fontWeight: "800", fontSize: "14px", width: "80px" }}>TOTAL TAGIHAN</span>
            <span style={{ fontSize: "32px", fontWeight: "900" }}>Rp. {calculateTotal().toLocaleString("id-ID")}</span>
          </div>

          <button 
            style={styles.btnAction} 
            onClick={handleCheckout}
          >
            {cartItems.length === 0 ? "Belanja Sekarang →" : "Checkout →"}
          </button>
        </div>
      </div>

      {/* Tombol Toggle Dark Mode agar konsisten */}
      <button style={styles.modeToggle} onClick={toggleDarkMode}>
        {isDarkMode ? "☀️" : "🌙"}
      </button>
    </div>
  );
};

export default CartEmpty;