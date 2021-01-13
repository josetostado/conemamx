import React from "react";
import {
  FirstBlock,
  FirstBlockTitleBg,
  FirstBlockTitleSm,
  Description,
  ContentLeft,
  ContentRight,
} from "./style";
import ReactPlayer from "react-player";
import { photogears } from "../../assets";

export default function CompletedFirstBlock() {
  return (
    <FirstBlock>
      <ContentLeft>
        <FirstBlockTitleSm>BIENVENIDOS A</FirstBlockTitleSm>
        <FirstBlockTitleBg>CONEMA</FirstBlockTitleBg>
        <Description>
          En CONEMA nos hemos comprometido con la calidad y el cumplimiento a
          tiempo de todas las obras en las que hemos trabajado. Veinte años de
          experiencia de cada uno de nuestros ingenieros y técnicos respaldan
          este compromiso.
        </Description>
        <img src={photogears} style={{ width: "100%" }} alt="Trabajadores" />
      </ContentLeft>
      <ContentRight>
        <ReactPlayer
          muted={true}
          playing={true}
          // url= {video}
          width="100%"
          height="100%"
          url={"https://www.youtube.com/watch?v=XEXh331A3WM&feature=youtu.be"}
          controls={true}
        ></ReactPlayer>
      </ContentRight>
    </FirstBlock>
  );
}
