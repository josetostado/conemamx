import styled from "styled-components";
import { backLog } from "../../assets";

export const Spinner = styled.div`
  width: 100vw;
  height: 100vh;
`;
export const Container = styled.div`
  line-height: 1;
  width: 100%;
`;

export const ContainerBody = styled.div``;

export const ContactLink = styled.div`
  margin: auto;
  padding: 0px 30vw;
  display: flex;
  justify-content: space-between;
`;

export const SendButton = styled.button`
  background-color: "Transparent";
  border: "none";
  display: "flex";

  :active {
    outline: none;
    border: none;
  }
`;

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -10;
  background-attachment: fixed, fixed;
  background-size: cover;
  background-image: url("/assets/images/backgrand_lowpoli.jpg");
  background-repeat: no-repeat, no-repeat;
  background-size: 100% 100%, cover;
  background-position: center;
`;

export const SecondaryBackground = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -10;
  background-attachment: fixed, fixed;
  background-size: cover;
  background-image: url(${backLog});
  background-repeat: no-repeat, no-repeat;
  background-size: 60% 60%, cover;
  background-position: center;
  @media (max-width: 768px) {
  }
`;
