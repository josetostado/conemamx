import React, { useEffect, useState } from "react";
import { ReactComponent as Logo } from "../../assets/image/RECURSOS/HEADER/header-1_logo.svg";
import { ReactComponent as Logo2 } from "../../assets/image/RECURSOS/HEADER/header-2_logo.svg";
import { rightlog, rightlog1, leftlog, leftlog1 } from "../../assets";
import {
  HeaderContainer,
  MainHeaderBar,
  ContainerLog,
  LeftLog,
  RightLog,
} from "./style";

function Header({ toggleMenu }) {
  const [state, setState] = useState({
    logo: Logo,
    img: rightlog,
  });

  window.addEventListener("scroll", (event) => {
    const rightLog = document.getElementsByClassName("rightLog")[0];
    const leftLog = document.getElementsByClassName("leftLog")[0];
    const mainHeaderBar = document.getElementsByClassName("MainHeaderBar")[0];
    if (window.scrollY > 80) {
      mainHeaderBar.style.minHeight = "52px";
      mainHeaderBar.style.height = "62px";
      mainHeaderBar.style.borderBottom = "10px solid #952511";
      leftLog.style.backgroundImage = `url(${leftlog1})`;
      leftLog.style.marginTop = "5px";
      leftLog.style.marginBottom = "5px";
      leftLog.style.height = "auto";
      rightLog.style.backgroundImage = `url(${rightlog1})`;
      rightLog.style.maxWidth = `280px`;
    } else {
      mainHeaderBar.style.height = "101px";
      mainHeaderBar.style.borderBottom = "20px solid #952511";
      leftLog.style.backgroundImage = `url(${leftlog})`;
      rightLog.style.backgroundImage = `url(${rightlog})`;
      rightLog.style.maxWidth = `131px`;
    }
  });

  return (
    <HeaderContainer>
      <MainHeaderBar className="MainHeaderBar">
        <ContainerLog>
          <LeftLog className="leftLog"></LeftLog>
          <RightLog className="rightLog"></RightLog>
        </ContainerLog>
      </MainHeaderBar>
    </HeaderContainer>
  );
}

export default Header;
