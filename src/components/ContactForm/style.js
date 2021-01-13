import styled from "styled-components";

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
    margin: 0 auto;
    width: 75%;
    font-size: 2em;
    align-items: center;
  }
`;

export const ContactFormItem = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 1120px) {
    line-height: 0.5;
    justify-content: space-between;
    width: 80%;
  }
  @media (max-width: 850px) {
    font-size: 0.9em;
  }
  @media (max-width: 776px) {
    width: 85%;
  }
  @media (max-width: 720px) {
    font-size: 0.8em;
  }
  @media (max-width: 581px) {
    width: 90%;
  }
  @media (max-width: 550px) {
    width: 100%;
  }
  @media (max-width: 470px) {
    font-size: 0.7em;
  }
  @media (max-width: 420px) {
    font-size: 0.6em;
  }
  @media (max-width: 371px) {
    font-size: 0.5em;
  }
  @media (max-width: 325px) {
    width: 105%;
  }
  @media (max-width: 307px) {
    width: 106%;
  }
`;

export const IconContainer = styled.div`
  margin-right: 30px;
  @media (max-width: 520px) {
    margin-right: 10px;
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
    width: 80%;
  }

  @media (max-width: 768px) {
    width: 80%;
  }
  @media (max-width: 550px) {
    width: 100%;
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

export const TextArea = styled.textarea`
  @media (max-width: 1120px) {
    height: 200px;
  }
  @media (max-width: 440px) {
    height: 100px;
  }
`;
