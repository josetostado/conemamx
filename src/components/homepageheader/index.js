import React, { useEffect, useState } from "react";
import { ReactComponent as Logo } from "../../assets/image/RECURSOS/HEADER/header-1_logo.svg";
import { ReactComponent as Logo2 } from "../../assets/image/RECURSOS/HEADER/header-2_logo.svg";
import { rightlog, rightlog1, leftlog, leftlog1 } from "../../assets";
import { 
  HeaderContainer,
  MainHeaderBar, 
  BottomHeaderBar,
  LeftLog,
  RightLog
} from './style';

function Header({toggleMenu}) {

  const [state, setState] = useState({
    logo: Logo,
    img: rightlog
  });

  window.addEventListener('scroll', event => {
    if(window.scrollY > 100){
      document.getElementsByClassName("MainHeaderBar")[0].style.height = "8vh";
      document.getElementsByClassName("MainHeaderBar")[0].style.borderBottom= '10px solid #952511';
      document.getElementsByClassName("leftLog")[0].style.backgroundImage = `url(${leftlog1})`;
      document.getElementsByClassName("rightLog")[0].style.backgroundImage = `url(${rightlog1})`;
    }
    else{
      document.getElementsByClassName("MainHeaderBar")[0].style.height = "14vh";
      document.getElementsByClassName("MainHeaderBar")[0].style.borderBottom= '20px solid #952511';
      document.getElementsByClassName("leftLog")[0].style.backgroundImage = `url(${leftlog})`;
      document.getElementsByClassName("rightLog")[0].style.backgroundImage = `url(${rightlog})`;
    }
  })

  return (
    <HeaderContainer>
        <MainHeaderBar className="MainHeaderBar">
          <LeftLog className="leftLog">
          </LeftLog>
          <RightLog className="rightLog">
          </RightLog>
        </MainHeaderBar>
    </HeaderContainer>
  );
}

export default Header;
