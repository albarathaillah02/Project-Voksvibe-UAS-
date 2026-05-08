import ProductCard from "./ProductCard";
import PropTypes from "prop-types";

const BestSellers = ({ className = "", allProducts, onAddToCart }) => {
  return (
    <main
      className={`self-stretch bg-[#fff] flex flex-col items-start pt-[73px] px-[62px] pb-[40px] gap-[60px] text-left text-4xl text-[#18181b] font-[Inter] mq450:px-5 ${className}`}
      data-scroll-to="bestSellers"
    >
      <h1 className="m-0 relative tracking-[-1.8px] leading-10 uppercase font-black mq450:text-[22px]">
        <span>{`Best `}</span>
        <span className="text-[#ffcc00]">Sellers</span>
      </h1>
      
      <div className="w-full overflow-x-auto flex flex-row items-start gap-[51px] pb-10 scrollbar-custom">
        {/* Mapping data dari App.jsx */}
        {allProducts.map((product) => (
          <ProductCard 
            key={product.id}
            kategori={product.kategori}
            namaProduk={product.namaProduk}
            harga={product.harga}
            rating={product.rating}
            foto={product.foto}
            onAddToCart={() => onAddToCart(product)} 
          />
        ))}
      </div>

      <style jsx>{`
        .scrollbar-custom::-webkit-scrollbar { height: 10px; }
        .scrollbar-custom::-webkit-scrollbar-track { background: #f1f1f1; border-radius: 10px; }
        .scrollbar-custom::-webkit-scrollbar-thumb { background: #ffcc00; border-radius: 10px; }
      `}</style>
    </main>
  );
};

export default BestSellers;