import styled from "styled-components";

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

export const BackGround = styled.div`
  height: 100%;

  background-attachment: fixed, fixed;
  background-size: cover;
  background-repeat: no-repeat, no-repeat;
  background-size: 60% 60%, cover;
  background-position: center;
`;
