import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Brightness5Icon from '@mui/icons-material/Brightness5';
import { useState } from 'react';

const NLModeToggler = ({theme, setTheme}) => {

  const handleChange = (event, th) => {
    localStorage.setItem('theme', th)
    setTheme(th)
  };

  return (
    <ToggleButtonGroup
      value={theme}
      exclusive
      onChange={handleChange}
      aria-label="text alignment"
      className='bg-white-light'
    >
      <ToggleButton value="dark" aria-label="left aligned">
        <DarkModeIcon />
      </ToggleButton>
      <ToggleButton value="light" aria-label="celocalStntered">
        <Brightness5Icon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

export default NLModeToggler;