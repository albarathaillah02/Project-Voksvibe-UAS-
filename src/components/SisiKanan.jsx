import Email from "./Email";
import Email1 from "./Email1";
import FrameComponent from "./FrameComponent";
import TidakPunyaAkunDaftarDisin from "./TidakPunyaAkunDaftarDisin";
import PropTypes from "prop-types";

const SisiKanan = ({ className = "" }) => {
  return (
    <section
      className={`flex-1 overflow-hidden flex flex-col items-center pt-0 px-0 pb-[1.9px] box-border gap-3.5 min-w-[370px] max-w-[509.9px] text-left text-xl text-[#000] font-[Montserrat] ${className}`}
    >
      <div className="self-stretch flex flex-col items-start gap-[5px] text-[40px]">
        <h1 className="m-0 self-stretch relative text-[length:inherit] tracking-[0.5px] leading-9 uppercase italic font-black font-[inherit]">
          masuk
        </h1>
        <h3 className="m-0 self-stretch relative text-xl tracking-[0.5px] leading-9 capitalize font-medium font-[inherit]">
          selamat datang! masukkan detail login anda.
        </h3>
      </div>
      <div className="self-stretch flex items-start justify-center pt-[19px] pb-0 pl-5 pr-[27px]">
        <div className="flex-1 flex items-start justify-between gap-5 max-w-[283px]">
          <div className="flex items-center gap-[7px]">
            <input
              className="cursor-pointer m-0 h-[17px] w-[17px] relative"
              type="radio"
            />
            <h3 className="m-0 relative text-[length:inherit] tracking-[0.5px] leading-9 capitalize font-medium font-[inherit]">
              Admin
            </h3>
          </div>
          <div className="flex items-center gap-[7px]">
            <input
              className="cursor-pointer m-0 h-[17px] w-[17px] relative"
              type="radio"
            />
            <h3 className="m-0 relative text-[length:inherit] tracking-[0.5px] leading-9 capitalize font-medium font-[inherit]">
              User
            </h3>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start pt-0 px-0 pb-16 box-border gap-4 max-h-[207px]">
        <div className="self-stretch flex flex-col items-center isolate max-h-[80px] shrink-0">
          <h3 className="m-0 w-full relative text-[length:inherit] tracking-[0.5px] leading-9 capitalize font-medium font-[inherit] inline-block max-w-[505.2px] z-[1] shrink-0">
            Email
          </h3>
          <Email property1="Default" />
        </div>
        <div className="self-stretch flex flex-col items-center isolate shrink-0">
          <h3 className="m-0 w-full relative text-[length:inherit] tracking-[0.5px] leading-9 capitalize font-medium font-[inherit] inline-block max-w-[505.2px] z-[1]">
            Password
          </h3>
          <Email1 property1="Default" />
        </div>
      </div>
      <FrameComponent property1="Default" />
      <div className="self-stretch flex items-start justify-between py-[13px] px-0 gap-5 text-[10px] text-[#006eff]">
        <TidakPunyaAkunDaftarDisin
          property1="Default"
          tidakPunyaAkunDaftarDisini="Tidak punya akun? Daftar disini"
        />
        <TidakPunyaAkunDaftarDisin
          property1="Default"
          tidakPunyaAkunDaftarDisinFlex="unset"
          tidakPunyaAkunDaftarDisinWidth="91px"
          tidakPunyaAkunDaftarDisini="Lupa password"
        />
      </div>
    </section>
  );
};

SisiKanan.propTypes = {
  className: PropTypes.string,
};

export default SisiKanan;
