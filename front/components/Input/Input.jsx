import { useState } from 'react'
import { joinClasses } from '../../commands';

export const Input = ({ type = "search", placeholder = "Entrez ici", name = "searchbar", label = "Search", className = '', props }) => {
  const [value, setValue] = useState("");
  const CLASS_NAME = "text-orange-main border-b border-black hover:border-orange-main focus:border-orange-main hover:border-b-2 focus:border-b-2 transition-all";
  
  function onInputChange(event) {
    setValue(event.target.value)
  }

  const INPUT_DICT = {
    search: <input onChange={onInputChange} value={value} name={name} placeholder={placeholder} className={CLASS_NAME} type="search" {...props} />,
    text: <input onChange={onInputChange} value={value} name={name} placeholder={placeholder} className={CLASS_NAME} type="text" {...props} />,
    number: <input onChange={onInputChange} value={value} name={name} placeholder={placeholder} className={CLASS_NAME} type="number" {...props} />,
  }
  return (
    <div className={joinClasses(["flex flex-col w-full", className])}>
      <label className="text-orange-main focus:text-orange-secondary" htmlFor={name}>{label}</label>
      {INPUT_DICT[type]}
    </div>
  )
}
