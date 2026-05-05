import CategoriesDetails from "./CategoriesDetails";
import PropTypes from "prop-types";

// Tambahin props: kategori, namaProduk, harga, rating, dan foto
const ProductCard = ({
  kategori = "KATEGORI",
  namaProduk = "PRODUCT NAME",
  harga = "0",
  rating = "0",
  foto = "/produk1.jpg",
  className = "",
}) => {
  return (
    <section className={`h-[560px] w-[290px] shrink-0 flex flex-col items-start font-[Montserrat] ${className}`}>
      <img className="w-[290px] h-[370px] object-cover" alt={namaProduk} src={foto} />
      
      <div className="w-full flex flex-col mt-3 px-1">
        <div className="flex justify-between items-center text-[12px] uppercase">
          <span>{kategori}</span>
          <div className="flex items-center gap-1">
            <img src="/material-symbols-star-rounded.svg" className="w-4" alt="star" />
            <span>{rating}</span>
          </div>
        </div>
        <b className="text-[16px] uppercase mt-1">{namaProduk}</b>
        <b className="text-[15px] mt-1">{harga}</b>
      </div>
    </section>
  );
};

export default ProductCard;
