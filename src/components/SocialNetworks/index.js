import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { List } from "./style";

import {
  FacebookBotton,
  InstagramBotton,
  LinkedinBotton,
  TwirerBotton,
  WhatsappBotton,
  YoutubeBotton,
} from "../../assets";

export default function SocialNetworks() {
  return (
    <ScrollAnimation animateIn="fadeIn">
      <List>
        <li>
          <a href="http://linkedin.com/in/operaciones-conema-40a97b1bb">
            <img alt="Linkedin logo" src={LinkedinBotton} />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/CONEMAmx-102090445069714/">
            <img alt="Facebook logo" src={FacebookBotton} />
          </a>
        </li>
        <li>
          <a href="#">
            <img alt="Whatsapp logo" src={WhatsappBotton} />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/AmxConem">
            <img alt="Twitter logo" src={TwirerBotton} />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/invites/contact/?i=1lkgw3y8erjdt&utm_content=kj84l1g">
            <img alt="Instagram logo" src={InstagramBotton} />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/channel/UC7d9_QAwMQm0TOHbbXFFbQA">
            <img alt="Youtube logo" src={YoutubeBotton} />
          </a>
        </li>
      </List>
    </ScrollAnimation>
  );
}
