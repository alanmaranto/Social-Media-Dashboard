import React from "react";
import CardSmall from "../card-small/CardSmall";
import cardSmallData from "../../mock/overviewData";
import "./style.css";

const Overview = () => {
  return (
    <section className="overview">
      <div className="wrapper">
        <h2>Overview - Today</h2>
        <div className="grid">
          {cardSmallData.map(({ icon, pageViews, growth, key }) => (
            <CardSmall
              icon={icon}
              key={key}
              pageViews={pageViews}
              growth={growth}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Overview;
