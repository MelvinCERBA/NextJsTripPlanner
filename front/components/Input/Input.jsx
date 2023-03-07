import React, { useState } from "react";
import PropTypes from "prop-types";
import { joinClasses } from "../../commands";

function Input({ type = "search", placeholder = "Entrez ici", name = "searchbar", label = "Search", className = "", props }) {
  const [value, setValue] = useState("");
  const CLASS_NAME = "text-orange-main border-b border-black hover:border-orange-main focus:border-orange-main hover:border-b-2 focus:border-b-2 transition-all w-full";
  
  function onInputChange(event) {
    setValue(event.target.value);
  }

  const INPUT_DICT = {
    search: <input onChange={onInputChange} value={value} id={name} name={name} placeholder={placeholder} className={CLASS_NAME} type="search" {...props} />,
    text: <input onChange={onInputChange} value={value} id={name} name={name} placeholder={placeholder} className={CLASS_NAME} type="text" {...props} />,
    number: <input onChange={onInputChange} value={value} id={name} name={name} placeholder={placeholder} className={CLASS_NAME} type="number" {...props} />,
  };
  return (
    <div className={joinClasses(["flex flex-col w-auto", className])}>
      <label className="text-orange-main focus:text-orange-secondary" htmlFor={name}>{label}</label>
      {INPUT_DICT[type]}
    </div>
  );
}

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
  props: PropTypes.object,
};

export default Input;
