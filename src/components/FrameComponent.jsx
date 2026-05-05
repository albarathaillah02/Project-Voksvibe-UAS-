import PropTypes from "prop-types";

const FrameComponent = ({ className = "", property1 = "Default" }) => {
  return (
    <button
      className={`cursor-pointer [border:none] p-0 bg-[#0c0c0c] w-[220px] h-9 relative rounded-md ${className}`}
    >
      <div className="absolute top-[13px] left-[88px] text-xs tracking-[1px] leading-[10px] font-extrabold font-[Montserrat] text-[#fff] text-left">
        LOGIN
      </div>
    </button>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  property1: PropTypes.string,
};

export default FrameComponent;
