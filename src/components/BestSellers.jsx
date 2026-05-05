import ProductCard from "./ProductCard";
import PropTypes from "prop-types";

const BestSellers = ({ className = "" }) => {
  return (
    <main
      className={`self-stretch bg-[#fff] flex flex-col items-start pt-[73px] px-[62px] pb-[40px] gap-[60px] text-left text-4xl text-[#18181b] font-[Inter] mq450:px-5 ${className}`}
      data-scroll-to="bestSellers"
    >
      <h1 className="m-0 relative tracking-[-1.8px] leading-10 uppercase font-black mq450:text-[22px]">
        <span>{`Best `}</span>
        <span className="text-[#ffcc00]">Sellers</span>
      </h1>
      
      {/* Container Scroll - Mengizinkan geser ke samping */}
      <div className="w-full overflow-x-auto flex flex-row items-start gap-[51px] pb-10 scrollbar-custom">
        
        <ProductCard 
          kategori="HOODIE"
          namaProduk="HOODIE GRAY PREMIUM"
          harga="200.000"
          rating="4.5"
          foto="/produk1hoodie.jpg" 
        />

        <ProductCard 
          kategori="SHIRT"
          namaProduk="GREEN SHIRT VIBE"
          harga="250.000"
          rating="4.8"
          foto="/produk2kemeja.jpg" 
        />

        <ProductCard 
          kategori="T-SHIRT"
          namaProduk="BLACK BASIC T - SHIRT"
          harga="150.000"
          rating="4.9"
          foto="/produk3.jpg" 
        />

        <ProductCard 
          kategori="T-SHIRT"
          namaProduk="WHITE VIBE SHIRT"
          harga="150.000"
          rating="4.7"
          foto="/produk4kaosputih.jpg" 
        />

        {/* Tambahan produk agar bisa di-scroll */}
        <ProductCard 
          kategori="JACKET"
          namaProduk="VOKSVIBE BOMBER"
          harga="350.000"
          rating="5.0"
          foto="/produk5jaketbomber.jpg" 
        />

      </div>

      {/* Styling Scrollbar Kuning */}
      <style jsx>{`
        .scrollbar-custom::-webkit-scrollbar {
          height: 10px;
        }
        .scrollbar-custom::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .scrollbar-custom::-webkit-scrollbar-thumb {
          background: #ffcc00;
          border-radius: 10px;
        }
        .scrollbar-custom::-webkit-scrollbar-thumb:hover {
          background: #e6b800;
        }
      `}</style>
    </main>
  );
};

BestSellers.propTypes = {
  className: PropTypes.string,
};

export default BestSellers;