/*
Created by Sunil Park.
Displays the food lists provided by the restaurant to users.
Food Lists = { menuList }
*/

import React, { useState } from "react";
import { Header } from "../components/index";
import { menuList } from "../data/menuList";

const Menu = () => {
  // menuPage = decide which number of values to use in the menuList array.
  // click the btn to set the menuPage value and then re-render by using Map().
  const [menuPage, setMenuPage] = useState(0);
  return (
    <section className="page menu" id="menu">
      <div className="wrapper">
        <Header props={"MENU"} />
        <article>
          <ul className="menu__btn">
            {menuList.map((item, idx) => {
              return (
                <li
                  key={item.category}
                  onClick={() => setMenuPage(idx)}
                  style={
                    idx === menuPage
                      ? { color: "white", backgroundColor: "rgb(43, 60, 47)" }
                      : { color: "black" }
                  }
                  title={`display ${item.category.toLowerCase()} table`}
                >
                  {item.category}
                </li>
              );
            })}
          </ul>
          <ol>
            {menuList[menuPage].items.map((item, idx) => {
              return (
                <li className="menu__item" key={item.name}>
                  <div className="menu__item__top">
                    <p className="menu__item__id">
                      <span>
                        {String.fromCharCode(65 + menuPage) + (idx + 1)}
                      </span>
                      {"- " + item.name}
                    </p>
                    <p className="menu__item__price">{`$${item.price}`}</p>
                  </div>
                  <div className="menu__item__bottom">
                    <p>{item.description}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </article>
      </div>
    </section>
  );
};

export default Menu;
