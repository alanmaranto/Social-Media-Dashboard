import React from "react";
import Header from "./components/header/Header";
import TopCardList from "./components/top-card-list/TopCardList";
import OverView from './components/overview/Overview';
import "./globals.css";

function App() {
  return (
    <>
      <Header />
      <TopCardList />
      <OverView />
    </>
  );
}

export default App;
