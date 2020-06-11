import React, { useState, useEffect } from "react";
import Header from "./components/header/Header";
import TopCardList from "./components/top-card-list/TopCardList";
import OverView from "./components/overview/Overview";
import Switch from "./components/switch/Switch";
import "./globals.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const mainClass = darkMode ? "is-dark-mode" : "i-light-mode";

  const changeMedia = (mediaquery) => {
    setDarkMode(mediaquery.matches)
    if (mediaquery.matches) {
      console.log("light");
      /*       document.body.classList.remove('is-light-mode')
      document.body.classList.add('is-dark-mode') */
    } else {
      console.log("dark");

      /*       document.body.classList.remove('is-dark-mode')
      document.body.classList.add('is-light-mode') */
    }
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addListener(changeMedia);
    setDarkMode(mediaQuery.matches);
  }, []);

  return (
    <main className={mainClass}>
      <Header>
        <Switch />
      </Header>
      <TopCardList />
      <OverView />
    </main>
  );
}

export default App;
