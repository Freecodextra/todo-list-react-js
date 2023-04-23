import React, { useContext, useEffect, useState } from 'react'
import { ThemeContext, UpdateThemeContext } from '../theme/Theme.jsx';
import { BsMoon, BsFillSunFill } from "react-icons/bs";
import './Header.css'

function Header() {
  const theme = useContext(ThemeContext);
  const updateTheme = useContext(UpdateThemeContext);
  const [isdark, setIsDark] = useState(false);
  useEffect(()=> {
    theme === "dark" ? setIsDark(true) : setIsDark(false);
  },[theme])
  function handleClick() {
    theme === "dark" ? updateTheme("light") :  updateTheme("dark");
  }
  return (
    <div className='header'>
      <div className="text">
        <h2>My Tasks</h2>
      </div>
      <div className="icon neuphormism center" onClick={handleClick}>
      {isdark ? <BsFillSunFill /> : <BsMoon />}
      </div>
    </div>
  )
}

export default Header