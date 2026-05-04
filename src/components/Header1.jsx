import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Categories from "./Categories";
import PropTypes from "prop-types";

const Header1 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onVoksvibeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <header
      className={`self-stretch bg-[#ffc300] overflow-hidden flex items-center justify-center py-6 pl-[49.6px] pr-[30px] relative isolate text-left text-[35px] text-[#18181b] font-[Inter] ${className}`}
    >
      <img
        className="w-[52px] absolute !!m-[0 important] top-[calc(50%_-_26.5px)] right-[143px] max-h-full object-cover z-[0]"
        loading="lazy"
        alt=""
        src="/mdi-cart1@2x.png"
      />
      <div className="flex-1 flex items-center justify-between flex-wrap content-center gap-x-5 gap-y-2.5 max-w-[1162.4px] z-[1]">
        <h2
          className="m-0 w-[175px] relative text-[length:inherit] tracking-[-1.5px] leading-9 uppercase inline-block italic font-black font-[inherit] shrink-0 cursor-pointer"
          onClick={onVoksvibeTextClick}
        >
          Voksvibe
        </h2>
        <div className="flex-1 flex items-center flex-wrap content-center gap-3.5 min-w-[310px] max-w-[456.7px] text-sm text-[#e7000b]">
          <div className="flex items-start py-0 pl-0 pr-[17px]">
            <Categories
              state="Default"
              categoriesWidth="101px"
              categories="categories"
              categoriesWidth1="unset"
              categoriesDisplay="unset"
              categoriesAlignItems="unset"
              categoriesHeight="unset"
              categoriesPosition="absolute"
              categoriesTop="0%"
              categoriesLeft="0%"
            />
          </div>
          <div className="flex items-start py-0 pl-0 pr-3">
            <Categories
              state="Default"
              categoriesWidth="127px"
              categories="trending now"
              categoriesWidth1="unset"
              categoriesDisplay="unset"
              categoriesAlignItems="unset"
              categoriesHeight="unset"
              categoriesPosition="absolute"
              categoriesTop="0%"
              categoriesLeft="0%"
            />
          </div>
          <Categories
            state="Default"
            categoriesWidth="97px"
            categories="lookbook"
            categoriesWidth1="unset"
            categoriesDisplay="unset"
            categoriesAlignItems="unset"
            categoriesHeight="unset"
            categoriesPosition="absolute"
            categoriesTop="0%"
            categoriesLeft="0%"
          />
          <b className="relative tracking-[0.7px] leading-5 uppercase">Sale</b>
        </div>
        <div className="flex items-end pt-0 px-0 pb-[18.1px] gap-[27px]">
          <img
            className="w-[52px] relative max-h-full object-cover"
            loading="lazy"
            alt=""
            src="/material-symbols-search-rounded1@2x.png"
          />
          <button className="cursor-pointer [border:none] pt-0 pb-[28.9px] pl-[42px] pr-0 bg-[transparent] flex items-start">
            <div className="h-10 w-10 bg-[#fff] flex items-start justify-center">
              <b className="w-3.5 relative text-xl tracking-[0.5px] leading-10 uppercase inline-block font-[Montserrat] text-[#000] text-center shrink-0">
                0
              </b>
            </div>
          </button>
          <img
            className="w-[52px] relative max-h-full object-cover"
            loading="lazy"
            alt=""
            src="/gg-profile1@2x.png"
          />
        </div>
      </div>
    </header>
  );
};

Header1.propTypes = {
  className: PropTypes.string,
};

export default Header1;
