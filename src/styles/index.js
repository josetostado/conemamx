import styled from "styled-components";
import { backImg } from "../assets";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.45),rgba(0, 0, 0, 0.45)),url(${backImg});
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: 930px) {
    height: fit-content;
  }
  media (max-width: 445px){
    width:200px;
  }

  .bottom-fix{
    width:100%;
    position: fixed;
    bottom: 0px;
  }

  @media(max-width: 930px){
    .bottom-fix{
      position: inherit;
    }
  }
`;

export const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  width: 100%;
  
  padding-bottom: 77px;

  @media (max-width: 930px) {
    overflow: scroll;
    padding-top: 60px;
    padding-bottom: 77px;
  }

  @media (max-width: 700px) {
    padding-top: 60px;
    padding-bottom: 77px;
  }
`;

export const TitleContainer = styled.div`
  padding: 60px 100px 0 100px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;

  & .label {
    float: left;
    font-size: 38px;
    text-align: left;
    width: 40%;
    font-family: 'AvenirNext Regular' !important;
  }

  @media (max-width: 930px) {
    padding: 64px 20px 0 20px;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;

    & .label {
      float: left;
      font-size: 24px;
      text-align: left;
      width: 100%;
    }
  }
`;
