import React from "react";
import PropTypes from "prop-types";

const Button = ({ label = "Button", alternate = false, props }) => {
  const PRIMARY_CLASS = "border px-8 py-3 rounded-lg bg-orange-main text-white text-xl";
  const SECONDARY_CLASS = "border border-orange-main px-8 py-3 rounded-lg bg-white text-orange-main text-xl";

  return (
    <button type="button" className={alternate ? SECONDARY_CLASS : PRIMARY_CLASS} {...props}>
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  alternate: PropTypes.bool,
  props: PropTypes.object,
};

export { Button };