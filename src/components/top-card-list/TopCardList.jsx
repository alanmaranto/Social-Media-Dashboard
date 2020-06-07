import React from "react";
import Card from "../card/Card";
import cardsData from "../../mock/socialMediaData";
import "./style.css";

const TopCardList = () => {
  return (
    <section className="top-cards">
      <div className="wrapper">
        <div className="grid">
          {cardsData.map(
            ({ id, username, followers, todayFollower, icon, name }) => (
              <Card
                key={id}
                username={username}
                followers={followers}
                todayFollowers={todayFollower}
                icon={icon}
                name={name}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default TopCardList;
