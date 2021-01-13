import styled from "styled-components";

export const FirstBlock = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 1260px;
  margin: 150px auto 40px;
  padding: 0 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const FirstBlockTitleSm = styled.p`
  font-size: 65px;
  font-family: Blockletter Regular;
  color: #1b223a;
  transition: color 2s;
  cursor: pointer;
  margin: 0;
  line-height: 0.4;

  :hover {
    color: #ffffff;
  }

  @media (max-width: 768px) {
    font-size: 6.4em;
  }
  @media (max-width: 607px) {
    font-size: 6em;
  }
  @media (max-width: 590px) {
    font-size: 5.2em;
  }
  @media (max-width: 537px) {
    font-size: 4.8em;
  }
  @media (max-width: 505px) {
    font-size: 4.4em;
  }
  @media (max-width: 466px) {
    font-size: 3.8em;
  }
  @media (max-width: 406px) {
    font-size: 3.5em;
  }
  @media (max-width: 380px) {
    font-size: 3em;
  }
  @media (max-width: 335px) {
    font-size: 2.8em;
  }
  @media (max-width: 318px) {
    font-size: 2.5em;
  }
`;

export const FirstBlockTitleBg = styled.p`
  font-size: 120px;
  color: #1b223a;
  font-family: Blockletter Regular;

  margin: 0;
  transition: color 2s;

  :hover {
    color: #ffffff;
  }

  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 11.8em;
  }
  @media (max-width: 607px) {
    font-size: 11em;
  }
  @media (max-width: 590px) {
    font-size: 10em;
  }
  @media (max-width: 537px) {
    font-size: 9.1em;
  }
  @media (max-width: 505px) {
    font-size: 8em;
  }
  @media (max-width: 466px) {
    font-size: 7em;
  }
  @media (max-width: 406px) {
    font-size: 6.9em;
  }
  @media (max-width: 380px) {
    font-size: 5.8em;
  }
  @media (max-width: 318px) {
    font-size: 5.2em;
  }
`;

export const ContentLeft = styled.div`
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
  max-width: 360px;
  transition: color 2s;
  margin-bottom: 16px;

  :hover {
    color: #ffffff;
  }

  cursor: pointer;

  @media (max-width: 1150px) {
    margin-bottom: 30px;
  }

  @media (max-width: 768px) {
    max-width: none;
    font-size: 2.5em;
  }
  @media (max-width: 590px) {
    margin: 0 20px 30px;
  }
  @media (max-width: 537px) {
    margin: 0 20px 30px;
  }
  @media (max-width: 505px) {
    font-size: 1.7em;
    max-width: 380px;
    margin: 0 0 30px;
  }
  @media (max-width: 466px) {
    max-width: 350px;
  }
  @media (max-width: 404px) {
    max-width: 341px;
    font-size: 2em;
  }
  @media (max-width: 378px) {
    max-width: 310px;
    font-size: 1.5em;
  }
  @media (max-width: 360px) {
    max-width: 290px;
  }
`;
