import { useMemo } from "react";
import PropTypes from "prop-types";

const Categories = ({
  className = "",
  state = "Default",
  categoriesWidth,
  categories,
  categoriesWidth1,
}) => {
  const categoriesStyle = useMemo(() => {
    return {
      width: categoriesWidth,
    };
  }, [categoriesWidth]);

  const categories1Style = useMemo(() => {
    return {
      width: categoriesWidth1,
    };
  }, [categoriesWidth1]);

  return (
    <div
      className={`w-[101px] h-[34px] flex items-start text-left text-sm text-[#000] font-[Montserrat] ${className}`}
      style={categoriesStyle}
    >
      <div
        className="h-[34px] w-[101px] relative tracking-[0.5px] leading-10 uppercase font-semibold flex items-center"
        style={categories1Style}
      >
        {categories}
      </div>
    </div>
  );
};

Categories.propTypes = {
  className: PropTypes.string,
  categories: PropTypes.string,

  /** Variant props */
  state: PropTypes.string,

  /** Style props */
  categoriesWidth: PropTypes.string,
  categoriesWidth1: PropTypes.string,
};

export default Categories;
