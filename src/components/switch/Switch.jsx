import React, { useRef } from "react";
import "./style.css";

const Switch = ({ setDarkMode, checked, setChecked }) => {
  const refDarkMode = useRef(null);

  const onChangeDarkMode = () => {
    setChecked(refDarkMode.current.checked);
    setDarkMode(refDarkMode.current.checked);
  };

  return (
    <div className="dark-mode">
      <p className="dark-mode title">Dark Mode</p>
      <input
        ref={refDarkMode}
        onChange={onChangeDarkMode}
        type="checkbox"
        checked={checked}
        className="checkbox"
        id="checkbox"
      />
      <label htmlFor="checkbox" className="switch"></label>
    </div>
  );
};

export default Switch;
