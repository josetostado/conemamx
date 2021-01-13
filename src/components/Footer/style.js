import styled from "styled-components";
import { footerbar } from "../../assets";

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0)
    ),
    url(${footerbar});
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;
