/*
Created by Sunil Park.
This page provides the restaurant's address, email, phone number and closing times.
*/

import React from "react";
import { Header } from "../components/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
  faStore,
} from "@fortawesome/free-solid-svg-icons";
const Location = () => {
  return (
    <section className="page location" id="location">
      <div className="wrapper">
        <Header props="LOCATION" />
        <article>
          <div className="location__line"></div>
          <section className="location__left">
            <div className="location__left__map">
              <h5>
                Address <FontAwesomeIcon icon={faLocationDot} />
              </h5>
              <address>450 Broad Ave, Leonia, NJ 07605</address>
              <a
                className="location__map"
                href="https://goo.gl/maps/AGh4Cc12UHX8Nqhe6"
                target="_blank"
                rel="noreferrer"
                title="Google Map"
              >
                Google Map
              </a>
            </div>
            <div>
              <h5>
                Email <FontAwesomeIcon icon={faEnvelope} />
              </h5>
              <p>kayagardeninc@gmail.com</p>
            </div>
            <div>
              <h5>
                Phone <FontAwesomeIcon icon={faPhone} />
              </h5>
              <p>(201)461-7525</p>
            </div>
          </section>
          <section className="location__right">
            <h5>
              Open Hours <FontAwesomeIcon icon={faStore} />
            </h5>
            <p>
              <span>SAT</span> 11:15AM–10:30PM
            </p>
            <p>
              <span>SUN</span> 11:15AM–10PM
            </p>
            <p>
              <span>MON</span> 11:15AM–10:30PM
            </p>
            <p>
              <span>TUE</span> 11:15AM–10:30PM
            </p>
            <p>
              <span>WED</span> 11:15AM–10:30PM
            </p>
            <p>
              <span>THU</span> 11:15AM–10:30PM
            </p>
            <p>
              <span>FRI</span> 11:15AM–10:30PM
            </p>
          </section>
        </article>
      </div>
    </section>
  );
};

export default Location;
