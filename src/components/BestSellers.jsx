import ProductCard from "./ProductCard";
import CategoriesDetails from "./CategoriesDetails";
import ImageContainer from "./ImageContainer";
import PropTypes from "prop-types";

const BestSellers = ({ className = "" }) => {
  return (
    <main
      className={`self-stretch bg-[#fff] overflow-x-auto shrink-0 flex flex-col items-start pt-[73px] px-[62px] pb-[19px] gap-[59.6px] text-left text-4xl text-[#18181b] font-[Inter] mq450:gap-[30px] mq450:pl-5 mq450:pr-5 mq450:box-border mq825:pt-[47px] mq825:pb-5 mq825:box-border ${className}`}
      data-scroll-to="bestSellers"
    >
      <h1 className="m-0 relative text-[length:inherit] tracking-[-1.8px] leading-10 uppercase font-black font-[inherit] mq450:text-[22px] mq450:leading-6 mq825:text-[29px] mq825:leading-8">
        <span>{`Best `}</span>
        <span className="text-[#ffcc00]">Sellers</span>
      </h1>
      <div className="w-[257.3px] flex items-start py-0 px-2 box-border">
        <div className="w-[2112px] overflow-x-auto shrink-0 flex items-start flex-wrap content-start gap-[51px] max-w-[876%] mq675:gap-[25px]">
          <ProductCard state="Default" />
          <section className="h-[560px] w-[290px] shrink-0 flex flex-col items-start pt-0 px-0 pb-[135px] box-border relative isolate text-left text-[15px] text-[#000] font-[Montserrat]">
            <b className="w-[61.6px] h-[39px] absolute !!m-[0 important] top-[411px] left-[0px] tracking-[0.5px] leading-10 uppercase flex items-center z-[1] shrink-0">
              200000
            </b>
            <img
              className="w-[290px] h-[370px] absolute !!m-[0 important] top-[0px] left-[0px] object-cover z-[2] shrink-0"
              alt=""
              src="/Rectangle-3@2x.png"
            />
            <div className="w-[290px] h-[370px] flex items-start pt-[307px] px-[63px] pb-[30px] box-border relative isolate z-[4] shrink-0 text-[10px]">
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
            <CategoriesDetails categoriesDetailsMarginTop="-9px" />
          </section>
          <section className="h-[560px] w-[290px] shrink-0 flex flex-col items-start pt-0 px-0 pb-[110px] box-border relative isolate text-left text-[10px] text-[#000] font-[Montserrat]">
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
              <div className="w-[285.3px] h-[42px] flex items-start gap-[118.3px] z-[1]">
                <div className="h-[39px] w-[79.7px] relative tracking-[0.5px] leading-10 uppercase font-medium flex items-center">
                  Kategori
                </div>
                <div className="h-[42px] w-[87.3px] flex flex-col items-start pt-[3px] px-0 pb-0 box-border">
                  <div className="w-[87.3px] h-[39px] flex items-start gap-[5px]">
                    <button className="cursor-pointer [border:none] pt-1.5 px-0 pb-0 bg-[transparent] h-[30px] w-6 flex flex-col items-start box-border z-[2]">
                      <img
                        className="w-6 relative max-h-full shrink-0"
                        alt=""
                        src="/material-symbols-star-rounded.svg"
                      />
                    </button>
                    <div className="h-[39px] w-[58.3px] relative tracking-[0.5px] leading-10 uppercase font-medium flex items-center shrink-0 z-[1]">
                      rating
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[152px] h-16 flex flex-col items-start z-[2] mt-[-17px] relative">
                <div className="w-[152px] h-[39px] relative tracking-[0.5px] leading-10 uppercase font-semibold flex items-center z-[2]">
                  Product name
                </div>
                <b className="w-[9px] h-[39px] relative tracking-[0.5px] leading-10 uppercase flex items-center z-[1] mt-[-14px]">
                  0
                </b>
              </div>
            </div>
          </section>
          <section className="h-[560px] w-[290px] shrink-0 flex flex-col items-start pt-0 px-0 pb-[110px] box-border relative isolate text-left text-[10px] text-[#000] font-[Montserrat]">
            <div className="w-[187px] h-[411px] flex items-end py-0 px-0 box-border z-[4]">
              <div className="h-[425px] w-[290px] flex flex-col items-start shrink-0 z-[2]">
                <div className="w-[290px] h-[370px] flex items-start pt-[307px] px-[63px] pb-[30px] box-border relative isolate z-[2]">
                  <div className="h-full w-[187px] absolute !!m-[0 important] top-[0px] bottom-[0px] left-[0px] z-[0] shrink-0">
                    <img
                      className="absolute top-[0px] left-[0px] w-[290px] h-[370px] object-cover shrink-0"
                      alt=""
                      src="/Rectangle-3@2x.png"
                    />
                    <div className="absolute top-[0px] left-[0px] bg-[#000] w-[290px] h-[370px] opacity-[0] shrink-0" />
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
                <div className="w-[152px] h-16 flex flex-col items-start z-[1] mt-[-9px] relative text-[15px]">
                  <div className="w-[79.7px] h-[39px] relative tracking-[0.5px] leading-10 uppercase font-medium flex items-center z-[2]">
                    Kategori
                  </div>
                  <div className="w-[152px] h-[39px] relative tracking-[0.5px] leading-10 uppercase font-semibold flex items-center z-[1] mt-[-14px]">
                    Product name
                  </div>
                </div>
              </div>
              <div className="h-[61px] w-[67px] flex flex-col items-start justify-end pt-0 px-0 pb-[22px] box-border z-[1] ml-[-63px] relative shrink-0 text-[15px]">
                <div className="w-[67px] h-[39px] relative tracking-[0.5px] leading-10 uppercase font-medium flex items-center shrink-0">
                  rating
                </div>
              </div>
            </div>
            <img
              className="w-[290px] h-[370px] absolute !!m-[0 important] top-[0px] left-[0px] object-cover z-[1]"
              alt=""
              src="/Rectangle-3@2x.png"
            />
            <img
              className="cursor-pointer [border:none] p-0 bg-[transparent] w-6 absolute !!m-[0 important] top-[370px] left-[198px] max-h-full z-[2]"
              alt=""
              src="/material-symbols-star-rounded.svg"
            />
            <b className="w-[9px] h-[39px] relative text-[15px] tracking-[0.5px] leading-10 uppercase flex items-center z-[1]">
              0
            </b>
          </section>
          <section className="h-[560px] w-[290px] shrink-0 flex items-end pt-0 px-0 pb-[110px] box-border relative isolate text-left text-[15px] text-[#000] font-[Montserrat]">
            <b className="h-[39px] w-[152px] relative tracking-[0.5px] leading-10 uppercase flex items-center shrink-0 z-[1]">
              0
            </b>
            <div className="h-[39px] w-[152px] absolute !!m-[0 important] top-[386px] left-[0px] tracking-[0.5px] leading-10 uppercase font-semibold flex items-center z-[2] shrink-0">
              Product name
            </div>
            <div className="h-[39px] w-[67px] absolute !!m-[0 important] top-[364px] left-[227px] tracking-[0.5px] leading-10 uppercase font-medium flex items-center z-[3] shrink-0">
              rating
            </div>
            <div className="h-[39px] w-[119px] absolute !!m-[0 important] top-[361px] left-[0px] tracking-[0.5px] leading-10 uppercase font-medium flex items-center z-[4] shrink-0">
              Kategori
            </div>
            <img
              className="h-[370px] w-[290px] absolute !!m-[0 important] top-[0px] left-[0px] object-cover z-[5] shrink-0"
              alt=""
              src="/Rectangle-3@2x.png"
            />
            <img
              className="w-6 absolute !!m-[0 important] top-[370px] left-[198px] max-h-full z-[6] shrink-0"
              alt=""
              src="/material-symbols-star-rounded.svg"
            />
            <button className="cursor-pointer [border:none] pt-0 px-0 pb-20 bg-[transparent] h-[450px] w-[290px] flex flex-col items-start justify-end box-border z-[7] ml-[-152px] relative shrink-0">
              <ImageContainer fotoProduk="/Rectangle-3@2x.png" />
            </button>
          </section>
          <section className="h-[560px] w-[290px] shrink-0 flex items-start pt-[361px] px-0 pb-[110px] box-border relative isolate gap-[75px] text-left text-[15px] text-[#000] font-[Montserrat]">
            <div className="h-[39px] w-[152px] absolute !!m-[0 important] top-[386px] left-[0px] tracking-[0.5px] leading-10 uppercase font-semibold flex items-center z-[0] shrink-0">
              Product name
            </div>
            <div className="h-[89px] w-[152px] flex flex-col items-start gap-[11px] z-[3] shrink-0">
              <div className="w-[119px] h-[39px] relative tracking-[0.5px] leading-10 uppercase font-medium flex items-center z-[2]">
                Kategori
              </div>
              <b className="w-[152px] h-[39px] relative tracking-[0.5px] leading-10 uppercase flex items-center z-[1]">
                0
              </b>
            </div>
            <div className="h-[42px] w-[67px] flex flex-col items-start pt-[3px] px-0 pb-0 box-border z-[2] shrink-0">
              <div className="w-[67px] h-[39px] relative tracking-[0.5px] leading-10 uppercase font-medium flex items-center">
                rating
              </div>
            </div>
            <img
              className="h-[370px] w-[290px] absolute !!m-[0 important] top-[0px] left-[0px] object-cover z-[3] shrink-0"
              alt=""
              src="/Rectangle-3@2x.png"
            />
            <img
              className="cursor-pointer [border:none] p-0 bg-[transparent] w-6 absolute !!m-[0 important] top-[370px] left-[198px] max-h-full z-[4] shrink-0"
              alt=""
              src="/material-symbols-star-rounded.svg"
            />
            <ImageContainer
              imageContainerPosition="absolute"
              imageContainerBorder="none"
              imageContainerBackgroundColor="transparent"
              imageContainerMargin="0 !important"
              imageContainerTop="0px"
              imageContainerLeft="0px"
              fotoProduk="/Rectangle-3@2x.png"
            />
          </section>
        </div>
      </div>
    </main>
  );
};

BestSellers.propTypes = {
  className: PropTypes.string,
};

export default BestSellers;
