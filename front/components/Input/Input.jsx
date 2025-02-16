import React from "react";
import PropTypes from "prop-types";
import { joinClasses } from "../../commands";

function Input({
  type = "search",
  placeholder = "Entrez ici",
  name = "searchbar",
  label = "Search",
  className = "",
  onChange = () => {},
  value = "",
  selectOptions = [<></>],
  props,
}) {
  const CLASS_NAME =
    "text-orange-main border-b border-black hover:border-orange-main focus:border-orange-main hover:border-b-2 focus:border-b-2 transition-all w-full";
  const INPUT_DICT = {
    select: (
      <select
        key="select-1"
        onChange={onChange}
        value={value}
        id={name}
        name={name}
        placeholder={placeholder}
        className={joinClasses([CLASS_NAME, "bg-white"])}
        type="select"
        {...props}
      >
        {selectOptions}
      </select>
    ),
    search: (
      <input
        key="search-2"
        onChange={onChange}
        value={value}
        id={name}
        name={name}
        placeholder={placeholder}
        className={CLASS_NAME}
        type="text"
      />
    ),
    text: (
      <input
        key="text-3"
        onChange={onChange}
        id={name}
        name={name}
        placeholder={placeholder}
        className={CLASS_NAME}
        type="text"
        {...props}
      />
    ),
    password: (
      <input
        key="password-4"
        onChange={onChange}
        id={name}
        name={name}
        placeholder={placeholder}
        className={CLASS_NAME}
        type="password"
        {...props}
      />
    ),
    number: (
      <input
        key="number-5"
        onChange={onChange}
        id={name}
        name={name}
        placeholder={placeholder}
        className={CLASS_NAME}
        type="number"
        {...props}
      />
    ),
    date: (
      <input
        onChange={onChange}
        id={name}
        name={name}
        placeholder={placeholder}
        className={CLASS_NAME}
        type="date"
        {...props}
      />
    ),
    datetime: (
      <input
        onChange={onChange}
        id={name}
        name={name}
        placeholder={placeholder}
        className={CLASS_NAME}
        type="datetime-local"
        {...props}
      />
    ),
  };
  return (
    <div className={joinClasses(["flex flex-col w-auto", className])}>
      <label
        className="text-orange-main focus:text-orange-secondary"
        htmlFor={name}
      >
        {label}
      </label>
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
  onChange: PropTypes.func,
  value: PropTypes.string,
  selectOptions: PropTypes.array,
};

export { Input };
