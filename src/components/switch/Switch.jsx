import React, { useRef, useEffect, useState } from "react";
import './style.css';

const Switch = () => {
  const refDarkMode = useRef(null)
  const [darkMode, setdarkMode] = useState(false)

  const onChangeDarkMode = () => {
    setdarkMode(refDarkMode.current.checked)
    if (refDarkMode.current.checked) {
/*       console.log('light')
      document.body.classList.remove('is-light-mode')
      document.body.classList.add('is-dark-mode') */
    } else {
/*       console.log('dark')

      document.body.classList.remove('is-dark-mode')
      document.body.classList.add('is-light-mode') */
    }
  }

  return (
    <div className="dark-mode">
      <p className="dark-mode title">Dark Mode</p>
      <input ref={refDarkMode} onChange={onChangeDarkMode} type="checkbox" className="checkbox" id="checkbox" />
      <label htmlFor="checkbox" className="switch"></label>
    </div>
  );
};

export default Switch;
