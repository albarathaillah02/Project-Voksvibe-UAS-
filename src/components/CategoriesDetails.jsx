import { useMemo } from "react";
import PropTypes from "prop-types";

const CategoriesDetails = ({ className = "", categoriesDetailsMarginTop }) => {
  const categoriesDetailsStyle = useMemo(() => {
    return {
      marginTop: categoriesDetailsMarginTop,
    };
  }, [categoriesDetailsMarginTop]);

  return (
    <div
      className={`w-[285.3px] h-16 flex flex-col items-start z-[1] text-left text-[15px] text-[#000] font-[Montserrat] ${className}`}
      style={categoriesDetailsStyle}
    >
      <div className="w-[285.3px] h-[42px] flex items-start gap-[118.3px] z-[2]">
        <div className="h-[39px] w-[79.7px] relative tracking-[0.5px] leading-10 uppercase font-medium flex items-center shrink-0">
          Kategori
        </div>
        <div className="h-[42px] w-[87.3px] flex flex-col items-start pt-[3px] px-0 pb-0 box-border">
          <div className="w-[87.3px] h-[39px] flex items-start gap-[5px] shrink-0">
            <button className="cursor-pointer [border:none] pt-1.5 px-0 pb-0 bg-[transparent] h-[30px] w-6 flex flex-col items-start box-border z-[2]">
              <img
                className="w-6 relative max-h-full"
                loading="lazy"
                alt=""
                src="/material-symbols-star-rounded.svg"
              />
            </button>
            <div className="h-[39px] w-[58.3px] relative tracking-[0.5px] leading-10 uppercase font-medium flex items-center z-[1]">
              rating
            </div>
          </div>
        </div>
      </div>
      <div className="w-[152px] h-[39px] relative tracking-[0.5px] leading-10 uppercase font-semibold flex items-center z-[1] mt-[-17px]">
        Product name
      </div>
    </div>
  );
};

CategoriesDetails.propTypes = {
  className: PropTypes.string,

  /** Style props */
  categoriesDetailsMarginTop: PropTypes.string,
};

export default CategoriesDetails;
