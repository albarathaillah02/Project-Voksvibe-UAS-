import PropTypes from "prop-types";

const Email = ({ className = "", property1 = "Default" }) => {
  return (
    <div
      className={`self-stretch h-[51px] rounded-[5px] bg-[#fff] border-[#666] border-solid border-[1px] box-border flex items-center py-0 px-1.5 z-[0] shrink-0 ${className}`}
    >
      <input
        className="w-full [border:none] [outline:none] bg-[transparent] h-4 flex items-start justify-center py-0 px-1 box-border font-[Inter] text-xs text-[#666]"
        placeholder="Masukkan email anda"
        type="text"
      />
    </div>
  );
};

Email.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  property1: PropTypes.string,
};

export default Email;
