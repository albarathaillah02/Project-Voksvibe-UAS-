import Categories from "./Categories";
import PropTypes from "prop-types";

const Header = ({ className = "" }) => {
  return (
    <header
      className={`self-stretch bg-[#ffc300] overflow-hidden shrink-0 flex items-start justify-between pt-6 pb-[42px] pl-[69px] pr-[49px] box-border gap-5 top-[0] z-[99] sticky max-w-full text-left text-[35px] text-[#000] font-[Montserrat] mq675:gap-5 mq675:pl-[34px] mq675:pr-6 mq675:box-border ${className}`}
    >
      <div className="w-[182.5px] flex flex-col items-start pt-[26px] px-0 pb-0 box-border text-[#18181b] font-[Inter]">
        <h2 className="m-0 relative text-[length:inherit] tracking-[-1.5px] leading-9 uppercase italic font-black font-[inherit]">
          Voksvibe
        </h2>
      </div>
      <div className="flex flex-col items-start pt-[26px] pb-0 pl-0 pr-[21px] box-border max-w-full text-sm">
        <div className="flex items-start gap-[26px]">
          <div className="flex flex-col items-start py-0 pl-0 pr-[5px]">
            <Categories state="Default" categories="categories" />
          </div>
          <Categories
            state="Default"
            categoriesWidth="127px"
            categories="trending now"
            categoriesWidth1="127px"
          />
          <div className="flex items-start gap-3.5 text-[#e7000b] font-[Inter] mq825:hidden">
            <Categories
              state="Default"
              categoriesWidth="97px"
              categories="lookbook"
              categoriesWidth1="97px"
            />
            <div className="flex flex-col items-start pt-[6.8px] px-0 pb-0">
              <b className="relative tracking-[0.7px] leading-5 uppercase">
                Sale
              </b>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-end gap-[69px] text-center text-xl">
        <img
          className="w-[52px] relative max-h-full"
          loading="lazy"
          alt=""
          src="/material-symbols-search-rounded.svg"
        />
        <div className="flex-1 flex items-start gap-[27px]">
          <div className="h-10 w-10 relative">
            <div className="absolute top-[0px] left-[0px] w-full h-full">
              <button className="cursor-pointer [border:none] p-0 bg-[#fff] absolute top-[0px] left-[0px] rounded-[50%] w-full h-full z-[1]" />
              <div className="absolute top-[0px] left-[4px] w-[33px] flex items-start isolate">
                <img
                  className="w-[52px] absolute !!m-[0 important] bottom-[-30px] left-[-31px] max-h-full shrink-0"
                  loading="lazy"
                  alt=""
                  src="/mdi-cart.svg"
                />
                <b className="flex-1 relative tracking-[0.5px] leading-10 uppercase z-[2] shrink-0">
                  0
                </b>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start pt-[17px] px-0 pb-0">
            <img
              className="w-[52px] relative max-h-full"
              loading="lazy"
              alt=""
              src="/gg-profile.svg"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
