import styled from "styled-components";
import { rightlog, leftlog } from "../../assets";

// position:fixed;
export const HeaderContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const MainHeaderBar = styled.div`
  transition: 1s;
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 100%;
  min-height: 101px;
  max-height: 101px;
  background-color: rgba(203, 47, 29, 0.8);
  align-items: flex-end;
  border-bottom: 20px solid #952511;
`;

export const BottomHeaderBar = styled.div`
  transition: 1s;
  width: 100%;
  height: 20px;
  background-color: #952511;
  opacity: 1;
`;

export const ContainerLog = styled.div`
  justify-content: space-between;
  display: flex;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  max-width: 1260px;
`;

export const LeftLog = styled.div`
  transition: 0.5s;
  margin: 0 20px 0 6.5%;
  max-width: 205px;
  width: 100%;
  height: 100%;
  background-image: url(${leftlog});
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;

export const RightLog = styled.div`
  transition: 0.5s;
  margin: 0 11.5% 0 20px;
  max-width: 135px;
  width: 100%;
  height: 100%;
  background-image: url(${rightlog});
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;
