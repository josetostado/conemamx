import styled from "styled-components";
import { backImg, backLog } from "../../assets";
import { footerbar } from "../../assets";

export const Spinner = styled.div`
  width: 100vw;
  height: 100vh;
`;
export const Container = styled.div`
  line-height: 1;
  width: 100%;
`;

export const ContainerBody = styled.div``;

export const FirstBlock = styled.div`
  padding: 150px 50px 30px 50px;
  display: flex;
  justify-content: center;
  max-width: 1260px;
  max-height: 729px;
  margin: 0 auto;

  @media (max-width: 768px) {
    height: 100%;
    padding: 0 10px;
    align-items: center;
    flex-direction: column;
    padding-bottom: 0;
    min-height: 100%;
    max-height: none;
    margin-top: 110px;
    min-width: 360px;
  }
`;

export const FirstBlockTitleSm = styled.div`
  font-size: 65px;
  font-family: Blockletter Regular;
  color: #1b223a;
  transition: color 2s;
  cursor: pointer;

  :hover {
    color: #ffffff;
  }

  @media (max-width: 768px) {
    margin-top: 30px;
    font-size: 6.4em;
  }
  @media (max-width: 590px) {
    font-size: 5em;
  }
  @media (max-width: 505px) {
    font-size: 4em;
  }
`;

export const FirstBlockTitleBg = styled.div`
  font-size: 120px;
  color: #1b223a;
  font-family: Blockletter Regular;

  transition: color 2s;

  :hover {
    color: #ffffff;
  }

  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 12em;
  }
  @media (max-width: 590px) {
    font-size: 10em;
  }
  @media (max-width: 505px) {
    font-size: 8em;
  }

  @media (max-width: 430px) {
    font-size: 7em;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  max-width: 400px;

  @media (max-width: 768px) {
    margin-top: 20px;
    margin-bottom: 24px;
    max-width: 590px;
    align-items: center;
  }

  @media (max-width: 590px) {
    padding: 15px;
  }
`;

export const ContentRight = styled.div`
  border: 15px solid #7f0701;
  background: rgb(154 27 13 / 0.9);
  padding: 15px;
  margin-left: 100px;
  width: 100%;
  height: auto;
  max-height: 450px;
  transition: background 2s;

  :hover {
    background: rgb(183 93 84 / 90%);
  }

  @media (max-width: 1170px) {
    margin-left: 50px;
  }

  @media (max-width: 900px) {
    margin-left: 35px;
  }

  @media (max-width: 768px) {
    height: 445px;
    max-height: none;
    margin-left: 0;
    border-width: 10px;
  }
`;

export const Description = styled.div`
  text-align: justify;
  color: #1b223a;
  font-family: DINAlternate-Bold;
  font-size: 20px;
  cursor: pointer;

  transition: color 2s;

  :hover {
    color: #ffffff;
  }

  cursor: pointer;

  @media (max-width: 1150px) {
    margin-bottom: 30px;
  }

  @media (max-width: 768px) {
    font-size: 2.5em;
  }
  @media (max-width: 430px) {
    font-size: 2em;
  }
`;

export const SecondBlock = styled.div`
  padding: 150px 50px 30px 50px;
  margin: 100px auto 0 auto;
  width: 90vw;
  height: 50vw;
  min-width: 1260px;
  max-width: 1260px;
  min-height: 700px;
  max-height: 700px;
  -webkit-clip-path: clip-path: polygon(43% 7%, 100% 7%, 100% 100%, 0 100%, 0 0, 37% 0);
  clip-path: polygon(43% 7%, 100% 7%, 100% 100%, 0 100%, 0 0, 37% 0);
  position: relative;
  background: rgb(107 5 0 / 90%);

  @media(max-width:1300px){
    min-width: 0;
    min-height: 670px;
  }
  @media(max-width:768px){
    min-height: 560px;
  }

  @media(max-width:590px) {
    min-height: 480px;
  }

`;

export const SecondBlockCover = styled.div`
  justify-content: space-between;
  text-align: left;
  width: 97%;
  height: 95%;
  -webkit-clip-path: clip-path: polygon(42% 7%, 100% 7%, 100% 100%, 0 100%, 0 0, 36% 0);
  clip-path: polygon(42% 7%, 100% 7%, 100% 100%, 0 100%, 0 0, 36% 0);
  background: rgb(255 30 0 / 26%);
  display: block;
  position: absolute;
  top: 3%;
  left: 1.5%;
  padding:30px;

`;

export const ContactForm = styled.div`
  margin: 100px auto;
  display: flex;
  color: #1b223a;
  flex-direction: row;
  justify-content: center;
  max-width: 1260px;

  @media (max-width: 1120px) {
    margin: 100px 10px;
    flex-direction: column;
  }
`;

export const ContactFormDescription = styled.div`
  width: 40%;
  font-family: DINAlternate-Bold;
  font-size: 30px;
  font-style: bold;

  @media (max-width: 1120px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    font-size: 2em;
  }
`;

export const ContactFormItem = styled.div`
  display: flex;
  margin: auto;
  align-items: center;

  @media (max-width: 1120px) {
    justify-content: center;
    width: 100%;
  }
  @media (max-width: 550px) {
    font-size: 0.9em;
  }
  @media (max-width: 440px) {
    font-size: 0.8em;
  }
  @media (max-width: 400px) {
    font-size: 0.65em;
  }
`;

export const ContactFormGroup = styled.div`
  width: 50%;
  fontfamily: DINAlternate-Bold;
  fontsize: 30px;
  fontstyle: bold;
  background: rgb(154 27 13 / 0.9);
  border: 15px solid #7f0701;

  @media (max-width: 1120px) {
    margin: auto;
    margin-top: 30px;
    width: 60%;
  }

  @media (max-width: 768px) {
    width: 80%;
  }
`;

export const FormGroupTitle = styled.div`
  font-family: Blockletter Regular;
  font-size: 50px;
  color: #ffffff;

  @media (max-width: 600px) {
    font-size: 30px;
  }
`;

export const ContactLink = styled.div`
  margin: auto;
  padding: 0px 30vw;
  display: flex;
  justify-content: space-between;
`;

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

export const SendButton = styled.button`
  background-color: "Transparent";
  border: "none";
  display: "flex";

  :active {
    outline: none;
    border: none;
  }
`;

export const CarouselDiv = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 1150px) {
    flex-direction: column;
  }
`;

export const CarouselDivBigText = styled.div`
  color: #ffffff;
  font-size: 80px;
  font-family: Blockletter Regular;

  @media (max-width: 700px) {
    font-size: 40px;
  }

  @media (max-width: 400px) {
    font-size: 30px;
  }
`;

export const CarouselDivBigTextSm = styled.div`
  color: #ffffff;
  font-size: 50px;
  font-family: Blockletter Regular;

  @media (max-width: 700px) {
    font-size: 30px;
  }

  @media (max-width: 400px) {
    font-size: 20px;
  }
`;

export const CarouselDivTitle = styled.div`
  color: #ffffff;
  font-size: 25px;
  font-family: DINAlternate-Bold;
  margin-left: 50px;
  padding-top: 10px;

  @media (max-width: 1150px) {
    margin-left: 0px;
  }

  @media (max-width: 400px) {
    font-size: 15px;
  }
`;

export const CarouselDivContent = styled.div`
  color: #ffffff;
  font-size: 18px;
  font-family: DINAlternate-Bold;
  margin-left: 50px;
  padding-top: 10px;

  @media (max-width: 1150px) {
    margin-left: 0px;
  }

  @media (max-width: 400px) {
    font-size: 10px;
  }
`;

export const BackGround = styled.div`
  height: 100%;

  background-attachment: fixed, fixed;
  background-size: cover;
  background-image: url(${backLog}), url(${backImg});
  background-repeat: no-repeat, no-repeat;
  background-size: 60% 60%, cover;
  background-position: center;
`;

export const List = styled.ul`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto 20px;
`;
