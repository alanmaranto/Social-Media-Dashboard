import React from "react";

const TopCardList = () => {
  return (
    <section className="top-cards">
      <div className="wrapper">
        <div className="grid">
          <article className="card facebook">
            <p className="card-title">
              <img src="images/icon-facebook.svg" alt="" />
              @AlanMaranto
            </p>
            <p className="card-followers">
              <span className="card-followers-number">1487</span>
              <span className="card-followers-title">Followers</span>
            </p>
            <p className="card-today">
              <img src="images/icon-up.svg" alt="" />
              12 Today
            </p>
          </article>
          
          <article className="card twitter">
            <p className="card-title">
              <img src="images/icon-twitter.svg" alt="" />
              @Alan-Maranto
            </p>
            <p className="card-followers">
              <span className="card-followers number">185k</span>
              <span className="card-followers-title">Followers</span>
            </p>
            <p className="card-today">
              <img src="images/icon-up.svg" alt="" />
              12 today
            </p>
          </article>

          <article className="card instagram">
            <p className="card-title">
              <img src="images/icon-instagram.svg" alt="" />
              @Alan-Maranto
            </p>
            <p className="card-followers">
              <span className="card-followers number">185k</span>
              <span className="card-followers-title">Followers</span>
            </p>
            <p className="card-today">
              <img src="images/icon-up.svg" alt="" />
              12 today
            </p>
          </article>
          
          <article className="card youtube">
            <p className="card-title">
              <img src="images/icon-youtube.svg" alt="" />
              @SoyAlanMaranto
            </p>
            <p className="card-followers">
              <span className="card-followers number">12k</span>
              <span className="card-followers-title">Followers</span>
            </p>
            <p className="card-today">
              <img src="images/icon-up.svg" alt="" />
              12 today
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default TopCardList;
