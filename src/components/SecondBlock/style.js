import styled from "styled-components";

export const SecondBlock = styled.div`
padding: 3% 1.5%;
margin: 100px auto 0 auto;
width: 90%;
height: 100%;
min-width: 1260px;
max-width: 1260px;
-webkit-clip-path: clip-path: polygon(43% 7%, 100% 7%, 100% 100%, 0 100%, 0 0, 37% 0);
clip-path: polygon(43% 7%, 100% 7%, 100% 100%, 0 100%, 0 0, 37% 0);
position: relative;
background: rgb(107 5 0 / 90%);

@media(max-width:1300px){
  min-width: 0;
}
@media(max-width:768px){
  -webkit-clip-path: clip-path: polygon(60% 5%, 100% 5%, 100% 100%, 0px 100%, 0px 0px, 50% 0px);;
  clip-path: polygon(60% 5%, 100% 5%, 100% 100%, 0px 100%, 0px 0px, 50% 0px);;
  padding: 2% 1%;
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
position: relative;
top: 3%;
left: 1.5%;
padding: 0px 30px 30px 30px;
@media(max-width:768px){
  -webkit-clip-path: clip-path: polygon(60% 5%, 100% 5%, 100% 100%, 0px 100%, 0px 0px, 50% 0px);;
  clip-path: polygon(60% 5%, 100% 5%, 100% 100%, 0px 100%, 0px 0px, 50% 0px);;
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
