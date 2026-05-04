import { useMemo } from "react";
import PropTypes from "prop-types";

const ImageContainer = ({
  className = "",
  imageContainerPosition,
  imageContainerBorder,
  imageContainerBackgroundColor,
  imageContainerMargin,
  imageContainerTop,
  imageContainerLeft,
  fotoProduk,
}) => {
  const imageContainerStyle = useMemo(() => {
    return {
      position: imageContainerPosition,
      border: imageContainerBorder,
      backgroundColor: imageContainerBackgroundColor,
      margin: imageContainerMargin,
      top: imageContainerTop,
      left: imageContainerLeft,
    };
  }, [
    imageContainerPosition,
    imageContainerBorder,
    imageContainerBackgroundColor,
    imageContainerMargin,
    imageContainerTop,
    imageContainerLeft,
  ]);

  return (
    <div
      className={`w-[290px] h-[370px] flex items-start pt-[307px] px-[63px] pb-[30px] box-border relative isolate shrink-0 text-left text-[10px] text-[#000] font-[Montserrat] ${className}`}
      style={imageContainerStyle}
    >
      <div className="h-full w-full absolute !!m-[0 important] top-[0px] right-[0px] bottom-[0px] left-[0px] z-[0] shrink-0">
        <img
          className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src={fotoProduk}
        />
        <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] bg-[#000] opacity-[0]" />
      </div>
      <div className="h-[33px] w-[164px] flex items-start justify-end py-[2.2px] px-[7.7px] box-border relative isolate opacity-[0] z-[1] shrink-0">
        <div className="h-[calc(100%_+_4px)] w-[calc(100%_+_4px)] absolute !!m-[0 important] top-[0px] right-[-4px] bottom-[-4px] left-[0px] rounded-[15px] bg-[#fff] border-[#000] border-solid border-[2px] box-border z-[0] shrink-0" />
        <img
          className="w-4 absolute !!m-[0 important] bottom-[8px] left-[25px] rounded-[15px] max-h-full z-[1] shrink-0"
          alt=""
          src="/mdi-cart.svg"
        />
        <b className="h-[28.6px] w-[100px] relative tracking-[0.5px] leading-10 uppercase flex items-center z-[2] shrink-0">
          Add to cart
        </b>
      </div>
    </div>
  );
};

ImageContainer.propTypes = {
  className: PropTypes.string,
  fotoProduk: PropTypes.string,

  /** Style props */
  imageContainerPosition: PropTypes.string,
  imageContainerBorder: PropTypes.string,
  imageContainerBackgroundColor: PropTypes.string,
  imageContainerMargin: PropTypes.string,
  imageContainerTop: PropTypes.string,
  imageContainerLeft: PropTypes.string,
};

export default ImageContainer;
