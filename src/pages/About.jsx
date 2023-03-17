/*
Created by Sunil Park.
This is the about page.
No other features have been added other than the introducing the restaurant.
*/

import React from "react";
import { Header } from "../components/index";
import bbq from "../assets/about_bbq.jpg";
import sushi from "../assets/about_sushi.jpg";
import "../components/components.css";

const About = () => {
  return (
    <section className="page about" id="about">
      <div className="wrapper">
        <Header props="ABOUT" />
        <article>
          <section className="about__content">
            <img src={bbq} alt="BBQ" />
            <div className="about__content__text">
              <h2>KayaGarden</h2>
              <p>
                Our restaurant has maintained the taste of traditional{" "}
                <span>Korean food</span> for over 20 years. The reason we were
                able to maintain good quality for a long time is because there
                was a lot of interest and love from customers to KayaGarden
                restaurant. We will continute to repay your love with the{" "}
                <span>best quality and service</span>.
              </p>
            </div>
          </section>
          <section className="about__content">
            <img src={sushi} alt="Sushi" />
            <div className="about__content__text">
              <h2>Service</h2>
              <p>
                In order to preserve the <span>pride</span> of traditional food,
                we make our own ingredients and cook them every morning. To
                provide a variety of services, Japanese menus are also offered
                as a side. Seafood is freshly ordered every morning, so you can
                feel fresh foods at KayaGarden. We strive to provide the best{" "}
                <span>service</span> to our customers.
              </p>
            </div>
          </section>
        </article>
      </div>
    </section>
  );
};

export default About;
