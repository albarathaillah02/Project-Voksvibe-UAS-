import CategoriesDetails from "./CategoriesDetails";
import PropTypes from "prop-types";

const ProductCard = ({
  className = "",
  state = "Default",
  categoriesDetailsMarginTop,
}) => {
  return (
    <section
      className={`h-[560px] w-[290px] shrink-0 flex flex-col items-start pt-0 px-0 pb-[110px] box-border relative isolate text-left text-[10px] text-[#000] font-[Montserrat] ${className}`}
    >
      <img
        className="w-[290px] h-[370px] absolute !!m-[0 important] top-[0px] left-[0px] object-cover z-[1]"
        alt=""
        src="/Rectangle-3@2x.png"
      />
      <div className="w-[290px] h-[370px] flex items-start pt-[307px] px-[63px] pb-[30px] box-border relative isolate z-[3]">
        <div className="h-full w-full absolute !!m-[0 important] top-[0px] right-[0px] bottom-[0px] left-[0px] z-[0] shrink-0">
          <img
            className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/Rectangle-3@2x.png"
          />
          <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] bg-[#000] opacity-[0]" />
        </div>
        <div className="h-[33px] w-[164px] flex items-end py-[2.2px] pl-[25px] pr-[7.7px] box-border relative isolate gap-[15.3px] opacity-[0] z-[1] shrink-0">
          <div className="h-[calc(100%_+_4px)] w-[calc(100%_+_4px)] absolute !!m-[0 important] top-[0px] right-[-4px] bottom-[-4px] left-[0px] rounded-[15px] bg-[#fff] border-[#000] border-solid border-[2px] box-border z-[0] shrink-0" />
          <div className="h-[21.8px] w-4 flex flex-col items-start justify-end pt-0 px-0 pb-[5.8px] box-border z-[1] shrink-0">
            <img
              className="w-4 relative rounded-[15px] max-h-full"
              alt=""
              src="/mdi-cart.svg"
            />
          </div>
          <b className="h-[28.6px] w-[100px] relative tracking-[0.5px] leading-10 uppercase flex items-center z-[2] shrink-0">
            Add to cart
          </b>
        </div>
      </div>
      <div className="w-[285.3px] h-[89px] flex flex-col items-start z-[2] mt-[-9px] relative text-[15px]">
        <CategoriesDetails
          categoriesDetailsMarginTop={categoriesDetailsMarginTop}
        />
        <b className="w-[57.3px] h-[39px] relative tracking-[0.5px] leading-10 uppercase flex items-center z-[2] mt-[-14px]">
          150000
        </b>
      </div>
    </section>
  );
};

ProductCard.propTypes = {
  className: PropTypes.string,
  categoriesDetailsMarginTop: PropTypes.any,

  /** Variant props */
  state: PropTypes.string,
};

export default ProductCard;
