import React from "react";
import PropTypes from "prop-types";

const Button = ({
  label = "Button",
  alternate = false,
  onClick = () => {},
  props,
}) => {
  const PRIMARY_CLASS =
    "border px-5 py-2 rounded-lg bg-orange-main text-white text-lg";
  const SECONDARY_CLASS =
    "border border-orange-main px-5 py-2 rounded-lg bg-white text-orange-main text-lg";

  return (
    <button
      type="button"
      className={alternate === true ? SECONDARY_CLASS : PRIMARY_CLASS}
      onClick={onClick}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  alternate: PropTypes.bool,
  props: PropTypes.object,
  onClick: PropTypes.func,
};

export { Button };
