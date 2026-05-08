import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Beranda from "./pages/Beranda";
import FormLogin from "./pages/FormLogin";
import Profile from "./pages/Profile";
import Orders from "./pages/Orders";
import CartEmpty from "./pages/CartEmpty";
import Register from "./pages/Register"; 
import KatalogTShirts from "./pages/KatalogTShirts";
import Pengiriman from "./pages/Pengiriman"; // Import halaman pengiriman baru

function App() {
  // --- STATE PENCARIAN ---
  const [searchQuery, setSearchQuery] = useState("");

  // --- STATE DARK MODE ---
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("voksvibe_darkmode");
    return savedMode === "true";
  });

  useEffect(() => {
    localStorage.setItem("voksvibe_darkmode", isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  // --- DATA PRODUK PUSAT ---
  const allProducts = [
    { id: 101, kategori: "HOODIE", namaProduk: "HOODIE GRAY PREMIUM", harga: "200.000", rating: "4.5", foto: "/produk1hoodie.jpg" },
    { id: 102, kategori: "SHIRT", namaProduk: "GREEN SHIRT VIBE", harga: "250.000", rating: "4.8", foto: "/produk2kemeja.jpg" },
    { id: 103, kategori: "T-SHIRT", namaProduk: "BLACK BASIC T - SHIRT", harga: "150.000", rating: "4.9", foto: "/produk3.jpg" },
    { id: 104, kategori: "T-SHIRT", namaProduk: "WHITE VIBE SHIRT", harga: "150.000", rating: "4.7", foto: "/produk4kaosputih.jpg" },
    { id: 105, kategori: "JACKET", namaProduk: "VOKSVIBE BOMBER", harga: "350.000", rating: "5.0", foto: "/produk5jaketbomber.jpg" }
  ];

  // --- LOGIKA FILTER PENCARIAN ---
  const searchedProducts = allProducts.filter(p => {
    const cleanQuery = searchQuery.trim().toLowerCase();
    return (
      p.namaProduk.toLowerCase().includes(cleanQuery) || 
      p.kategori.toLowerCase().includes(cleanQuery)
    );
  });

  const tShirtProducts = searchedProducts.filter(p => p.kategori.toUpperCase() === "T-SHIRT");
  const hoodieProducts = searchedProducts.filter(p => p.kategori.toUpperCase() === "HOODIE");
  const shirtProducts = searchedProducts.filter(p => p.kategori.toUpperCase() === "SHIRT");

  // --- STATE KERANJANG ---
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("voksvibe_cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("voksvibe_cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // --- FUNGSI KERANJANG ---
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (index, delta) => {
    setCartItems((prevItems) => {
      const newItems = [...prevItems];
      const item = newItems[index];
      if (!item) return prevItems;
      const newQty = (item.quantity || 1) + delta;
      if (newQty >= 1) {
        newItems[index] = { ...item, quantity: newQty };
        return newItems;
      }
      return prevItems;
    });
  };

  const removeFromCart = (indexToRemove) => {
    setCartItems((prevItems) => prevItems.filter((_, index) => index !== indexToRemove));
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + (item.quantity || 1), 0);

  return (
    <Router>
      <Routes>
        {/* HALAMAN UTAMA */}
        <Route 
          path="/" 
          element={
            <Beranda 
              cartCount={totalCartCount} 
              onAddToCart={addToCart} 
              allProducts={searchedProducts}
              searchQuery={searchQuery}
              onSearch={setSearchQuery} 
              isDarkMode={isDarkMode}
              toggleDarkMode={toggleDarkMode}
            />
          } 
        />
        
        {/* AUTHENTICATION */}
        <Route path="/login" element={<FormLogin />} />
        <Route path="/register" element={<Register />} /> 
        
        {/* KATALOG PER KATEGORI */}
        <Route 
          path="/t-shirts" 
          element={
            <KatalogTShirts 
              cartCount={totalCartCount} 
              products={tShirtProducts} 
              onAddToCart={addToCart} 
              onSearch={setSearchQuery}
              isDarkMode={isDarkMode} 
              toggleDarkMode={toggleDarkMode}
            />
          } 
        />

        <Route 
          path="/hoodie" 
          element={
            <KatalogTShirts 
              cartCount={totalCartCount} 
              products={hoodieProducts} 
              onAddToCart={addToCart} 
              onSearch={setSearchQuery}
              isDarkMode={isDarkMode}
              toggleDarkMode={toggleDarkMode}
            />
          } 
        />

        <Route 
          path="/shirt" 
          element={
            <KatalogTShirts 
              cartCount={totalCartCount} 
              products={shirtProducts} 
              onAddToCart={addToCart} 
              onSearch={setSearchQuery}
              isDarkMode={isDarkMode}
              toggleDarkMode={toggleDarkMode}
            />
          } 
        />

        {/* USER & SHOPPING PAGES */}
        <Route 
          path="/profile" 
          element={
            <Profile 
              isDarkMode={isDarkMode} 
              toggleDarkMode={toggleDarkMode} 
              cartCount={totalCartCount}
              onSearch={setSearchQuery}
            />
          } 
        />
        <Route 
          path="/orders" 
          element={
            <Orders 
              isDarkMode={isDarkMode} 
              toggleDarkMode={toggleDarkMode} 
            />
          } 
        />
        <Route 
          path="/cart" 
          element={
            <CartEmpty 
              cartItems={cartItems} 
              cartCount={totalCartCount} 
              onRemoveItem={removeFromCart} 
              onUpdateQty={updateQuantity} 
              isDarkMode={isDarkMode}
              toggleDarkMode={toggleDarkMode}
              onSearch={setSearchQuery}
            />
          } 
        />
        {/* HALAMAN PENGIRIMAN (ALAMAT) */}
        <Route 
          path="/pengiriman" 
          element={
            <Pengiriman 
              cartItems={cartItems} 
              cartCount={totalCartCount} 
              isDarkMode={isDarkMode} 
              toggleDarkMode={toggleDarkMode}
              onSearch={setSearchQuery}
            />
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;