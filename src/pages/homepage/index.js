import React, { useEffect, useState } from "react";

import LoadingMask from "react-loadingmask";
import "react-loadingmask/dist/react-loadingmask.css";

import { NotificationContainer } from "react-notifications";

import "react-notifications/lib/notifications.css";

import { Background, SecondaryBackground } from "./style";

import Header from "../../components/homepageheader";
import FirstBlock from "../../components/FirstBlock";
import SecondBlock from "../../components/SecondBlock";
import ContactForm from "../../components/ContactForm";
import SocialNetworks from "../../components/SocialNetworks";
import Footer from "../../components/Footer";

function HomePage() {
  const fontSize = 24;
  const Icon = ({ type, className = "", style = {} } = {}) => (
    <i className={`fas fa-${type} ${className}`} style={style} />
  );

  const RocketHor = (
    <Icon
      type="rocket"
      className="animation-horizon"
      style={{ fontSize, color: "#120338" }}
    />
  );

  const [state, setState] = useState({
    isLoading: true,
  });

  function fakeRequest() {
    return new Promise((resolve) => setTimeout(() => resolve(), 5000));
  }

  useEffect(() => {
    const width = window.innerWidth;

    fakeRequest().then(() => {
      const el = document.querySelector(".loader-container");
      el.remove();
      if (width < 400) {
        setState({
          isLoading: false,
        });
      } else {
        setState({
          isLoading: false,
        });
      }
    });
  }, []);

  if (state.isLoading) {
    return <></>;
  }

  return (
    <LoadingMask
      className="customize"
      loading={false}
      loadingText={"Customize animation"}
      indicator={RocketHor}
    >
      <Header></Header>
      <Background />
      <SecondaryBackground />
      <FirstBlock />
      <SecondBlock />
      <ContactForm />
      <SocialNetworks />
      <Footer />
      <NotificationContainer />
    </LoadingMask>
  );
}

export default HomePage;
