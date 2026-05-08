import { memo, useEffect } from "react";
import Header1 from "../components/Header1";

const KatalogTShirts = memo(({ products, cartCount, onAddToCart }) => {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,700;0,800;0,900;1,700;1,900&family=Poppins:wght@300;400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  const styles = {
    mainContent: {
      backgroundColor: "#fff",
      minHeight: "100vh",
      paddingTop: "80px", 
    },
    heroSection: {
      backgroundColor: "#111", 
      color: "#fff",
      padding: "60px 10%", // DIKECILKAN: Padding agar hero tidak terlalu dominan
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    titleWrapper: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      marginBottom: "20px",
    },
    katalogText: {
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: "900", 
      fontSize: "40px", // DIKECILKAN: Dari 48px
      letterSpacing: "2px",
      margin: 0,
      color: "#fff",
    },
    produkText: {
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: "900",
      fontSize: "40px", // DIKECILKAN: Dari 48px
      fontStyle: "italic", 
      letterSpacing: "2px",
      margin: 0,
      color: "#FFCC00", 
    },
    heroSubtitle: {
      fontFamily: "'Poppins', sans-serif",
      fontSize: "14px", // DIKECILKAN: Dari 16px
      fontWeight: "400",
      lineHeight: "1.6",
      maxWidth: "600px",
      color: "#ccc", 
      margin: 0,
    },
    productsSection: {
      padding: "50px 8%", // DISESUAIKAN: Padding area produk
      backgroundColor: "#fff",
    },
    productGrid: {
      display: "grid",
      // DIUBAH: Menggunakan repeat(4, 1fr) agar ada 4 produk per baris (membuat kartu lebih kecil)
      gridTemplateColumns: "repeat(4, 1fr)", 
      columnGap: "25px", // DIKECILKAN: Gap antar kolom
      rowGap: "40px",    // DIKECILKAN: Gap antar baris
    },
    productCard: {
      cursor: "pointer",
      position: "relative",
      display: "flex",
      flexDirection: "column"
    },
    imageBox: {
      width: "100%",
      paddingTop: "100%", // DIUBAH: Dari 120% ke 100% (Square/Kotak) agar lebih ringkas
      backgroundColor: "#f0f0f0", 
      marginBottom: "12px",
      borderRadius: "4px",
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
    infoRow: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "5px",
    },
    categoryText: {
      fontFamily: "'Poppins', sans-serif",
      fontSize: "10px", // DIKECILKAN: Dari 12px
      fontWeight: "400",
      color: "#888", 
      textTransform: "uppercase",
      margin: 0,
    },
    productName: {
      fontFamily: "'Poppins', sans-serif",
      fontSize: "13px", // DIKECILKAN: Dari 14px agar proporsional
      fontWeight: "700", 
      color: "#000",
      margin: "0 0 4px 0",
    },
    ratingWrapper: {
      display: "flex",
      alignItems: "center",
      gap: "3px",
    },
    ratingText: {
      fontFamily: "'Poppins', sans-serif",
      fontSize: "11px",
      fontWeight: "600",
      color: "#333",
    },
    priceText: {
      fontFamily: "'Poppins', sans-serif",
      fontSize: "13px", // DIKECILKAN: Dari 14px
      fontWeight: "800", 
      color: "#000",
      margin: "0 0 10px 0",
    },
    btnAddToCart: {
      marginTop: "auto", // Biar tombol selalu di bawah jika nama produk panjang
      width: "100%",
      padding: "8px", // DIKECILKAN: Dari 10px
      backgroundColor: "#FFCC00",
      border: "none",
      fontWeight: "800",
      cursor: "pointer",
      borderRadius: "4px",
      fontFamily: "'Poppins', sans-serif",
      fontSize: "11px" // DIKECILKAN: Dari 12px
    }
  };

  return (
    <>
      <Header1 cartCount={cartCount} /> 

      <div style={styles.mainContent}>
        <section style={styles.heroSection}>
          <div style={styles.titleWrapper}>
            <h1 style={styles.katalogText}>KATALOG</h1>
            <h1 style={styles.produkText}>PRODUK</h1>
          </div>
          <p style={styles.heroSubtitle}>
            Jelajahi koleksi streetwear eksklusif kami. Temukan gaya urban terbaikmu di sini.
          </p>
        </section>

        <section style={styles.productsSection}>
          <div style={styles.productGrid}>
            {products.map((item) => (
              <div key={item.id} style={styles.productCard}>
                <div 
                  style={{
                    ...styles.imageBox, 
                    backgroundImage: `url(${item.foto || item.img})` 
                  }}
                ></div>
                
                <div style={styles.infoRow}>
                  <p style={styles.categoryText}>{item.kategori || item.category}</p>
                  <div style={styles.ratingWrapper}>
                    <span style={{ color: "#FFCC00", fontSize: "14px" }}>★</span>
                    <span style={styles.ratingText}>{item.rating}</span>
                  </div>
                </div>

                <p style={styles.productName}>{item.namaProduk || item.name}</p>
                <p style={styles.priceText}>IDR {item.harga || item.price}</p>
                
                <button 
                  style={styles.btnAddToCart}
                  onClick={() => onAddToCart(item)}
                >
                  ADD TO CART
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
});

export default KatalogTShirts;