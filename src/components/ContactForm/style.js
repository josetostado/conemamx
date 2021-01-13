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
