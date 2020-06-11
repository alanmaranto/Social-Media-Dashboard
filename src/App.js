import React, { useState, useEffect } from "react";
import Header from "./components/header/Header";
import TopCardList from "./components/top-card-list/TopCardList";
import OverView from "./components/overview/Overview";
import Switch from "./components/switch/Switch";
import "./globals.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [checked, setChecked] = useState(false);

  const mainClass = darkMode ? "is-dark-mode" : "is-light-mode";

  const changeMedia = (mediaquery) => {
    setDarkMode(mediaquery.matches);
    setChecked(mediaquery.matches);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addListener(changeMedia);
    setDarkMode(mediaQuery.matches);
    setChecked(mediaQuery.matches);
  }, []);

  return (
    <main className={mainClass}>
      <Header>
        <Switch
          setDarkMode={setDarkMode}
          checked={checked}
          setChecked={setChecked}
        />
      </Header>
      <TopCardList />
      <OverView />
    </main>
  );
}

export default App;
