import styled from "styled-components";
import { backImg, backLog } from "../../assets";
import { body_servicesandprojectsframe_outline } from "../../assets";
import { body_videoframe_outline } from "../../assets";
import { footerbar } from '../../assets';

export const Spinner = styled.div`
  width: 100vw;
  height: 100vh
`;
export const Container = styled.div`
  line-height: 1;
  width: 100%;
`;

export const ContainerBody = styled.div`

`;

export const FirstBlock = styled.div`
  padding: 200px 50px 30px 50px;
  display: flex;

  @media(max-width: 1150px){
    flex-direction: column;
    padding: 200px 10px;
  }

  @media(max-width: 650px){
    flex-direction: column;
    padding: 100px 10px;
  }
`;

export const FirstBlockTitleSm = styled.div`
  font-size: 65px;
  font-family: Blockletter Regular;
  color: #1b223a;
  transition: color 2s;
  cursor: pointer;

  :hover{
    color: #ffffff;
  }

  @media(max-width: 1150px){
    font-size: 50px;
  }

  @media(max-width: 600px){
    font-size: 30px;
  }
`;

export const FirstBlockTitleBg = styled.div`
  font-size: 120px;
  color: #1b223a;
  font-family: Blockletter Regular;

  transition: color 2s;

  :hover{
    color: #ffffff;
  }

  cursor: pointer;

  @media(max-width: 1150px){
    font-size: 100px;
  }
  
  @media(max-width: 600px){
    font-size: 60px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 400px;

  @media(max-width: 1150px){
    text-align: center;
    width: 100%;
    margin: 30px auto;
  }
`;

export const ContentRight = styled.div`
  border: 15px solid #7f0701;
  background: rgb(154 27 13 / 0.9);
  padding:15px;
  margin-left: 100px;
  width: 100%;
  height: 100%;

  transition: background 2s;

  :hover{
    background: rgb(183 93 84 / 90%);
  }

  @media(max-width: 1150px){
    width: 100%;
    padding:15px;
    margin-left: 0px;
  }

`;

export const Description = styled.div`
  text-align: justify;
  color: #1b223a;
  font-family: DINAlternate-Bold;
  font-size: 20px;
  cursor: pointer;

  transition: color 2s;

  :hover{
    color: #ffffff;
  }

  cursor: pointer;


  @media(max-width: 1150px){
    margin-bottom: 30px;
  }
  
`;

export const SecondBlock = styled.div`
  margin: 100px 50px 0 50px;
  width: 90vw;
  height: 50vw;
  -webkit-clip-path: clip-path: polygon(43% 7%, 100% 7%, 100% 100%, 0 100%, 0 0, 37% 0);
  clip-path: polygon(43% 7%, 100% 7%, 100% 100%, 0 100%, 0 0, 37% 0);
  position: relative;
  background: rgb(107 5 0 / 90%);

  @media(max-width:1150px){
    margin: 100px 10px 0 10px;
    width: 96vw;
    height: 80vw;
  }
  @media(max-width:650px){
    margin: 20px 10px 0 10px;
    width: 96vw;
    height: 100vw;
  }

  @media(max-width:400px){
    margin: 20px 10px 0 10px;
    width: 95vw;
    height: 160vw;
  }
`;

export const SecondBlockCover = styled.div`
  justify-content: space-between;
  text-align: left;
  width: 88vw;
  height: 48vw;
  -webkit-clip-path: clip-path: polygon(42% 7%, 100% 7%, 100% 100%, 0 100%, 0 0, 36% 0);
  clip-path: polygon(42% 7%, 100% 7%, 100% 100%, 0 100%, 0 0, 36% 0);
  background: rgb(255 30 0 / 26%);
  display: block;
  position: absolute;
  top: 1vw;
  left: 1vw;
  padding:30px;

  @media(max-width:1150px){
    width: 94vw;
    height: 78vw;
  }

  @media(max-width:650px){
    width: 94vw;
    height: 98vw;
  }

  @media(max-width:400px){
    width: 93vw;
    height: 158vw;
  }
`;

export const ContactForm = styled.div`
  margin: 100px 80px;
  display: flex;
  color: #1b223a;
  flex-direction: row;

  @media(max-width: 1150px){
    margin: 100px 10px;
    flex-direction: column;
  }
`;

export const ContactFormDescription = styled.div`
  width: 40%; 
  font-family: DINAlternate-Bold;
  font-size: 30px;
  font-style: bold; 

  @media(max-width: 1150px){
    display:flex;
    flex-direction: column;
    width: 100%;
    font-size: 20px;
  }
`;

export const ContactFormItem = styled.div`
  display: flex;
  margin: auto;
  align-items: center;


  @media(max-width: 1150px){
    justify-content: center;
    width: 100%;
  }
`;

export const ContactFormGroup = styled.div`
  width: 50%;
  fontFamily: DINAlternate-Bold;
  fontSize: 30px;
  fontStyle: bold;
  background: rgb(154 27 13 / 0.9);
  border: 15px solid #7f0701; 

  @media(max-width: 1150px){
    margin: auto;
    margin-top: 30px;
    width: 60%;
  }

  @media(max-width: 800px){
    margin-top: 30px;
    width: 100%;
  }
`;

export const FormGroupTitle = styled.div`
  font-family: Blockletter Regular; 
  font-size: 50px;
  color: #ffffff;

  @media(max-width: 600px){
    font-size: 30px;
  }
`;

export const ContactLink = styled.div`
  margin:auto;
  padding: 0px 30vw;
  display: flex;
  justify-content: space-between;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0),rgba(0, 0, 0, 0)),url(${footerbar});
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;

export const SendButton = styled.button`
  background-color: 'Transparent';
  border: 'none';
  display: 'flex';

  :active {
    outline: none;
    border: none;
  }
`;

export const CarouselDiv = styled.div`
  display: flex;
  flex-direction: row;

  @media(max-width: 1150px){
    flex-direction: column;
  }
`;

export const CarouselDivBigText = styled.div`
  color: #ffffff;
  font-size: 80px; 
  font-family: Blockletter Regular;

  @media(max-width: 700px){
    font-size: 40px; 
  }

  @media(max-width: 400px){
    font-size: 30px; 
  }
`;

export const CarouselDivBigTextSm = styled.div`
  color: #ffffff;
  font-size: 50px; 
  font-family: Blockletter Regular;

  @media(max-width: 700px){
    font-size: 30px; 
  }

  @media(max-width: 400px){
    font-size: 20px; 
  }
`;

export const CarouselDivTitle = styled.div`
  color: #ffffff; 
  font-size: 25px; 
  font-family: DINAlternate-Bold; 
  margin-left:50px;
  padding-top:10px;

  @media(max-width: 1150px){
    margin-left:0px;
  }

  @media(max-width: 400px){
    font-size: 15px;
  }
`;

export const CarouselDivContent = styled.div`
  color: #ffffff; 
  font-size: 18px; 
  font-family: DINAlternate-Bold; 
  margin-left:50px;
  padding-top:10px;

  @media(max-width: 1150px){
    margin-left:0px;
  }

  @media(max-width: 400px){
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