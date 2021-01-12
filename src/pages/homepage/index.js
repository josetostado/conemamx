import React, { useEffect, useState } from "react";

import ReactPlayer from "react-player";

import LoadingMask from "react-loadingmask";
import "react-loadingmask/dist/react-loadingmask.css";

import {
  PROYECTOSDesktop,
  SERVICIOSDesktop,
  PROYECTOSMobile,
  SERVICIOSMobile,
} from "../../assets";

import { AiOutlineSend } from "react-icons/ai";
import { IconContext } from "react-icons";

import { ReactComponent as MapsIcon } from "../../assets/image/RECURSOS/BODY/body_contact_mapsbotton.svg";
import { ReactComponent as PhoneIcon } from "../../assets/image/RECURSOS/BODY/body_contact_phonebotton.svg";
import { ReactComponent as SendIcon } from "../../assets/image/RECURSOS/BODY/body_contact_emailbotton.svg";
import { ReactComponent as FooterText } from "../../assets/image/RECURSOS/FOOTER/footer_consejo.svg";
import { ReactComponent as FooterCopy } from "../../assets/image/RECURSOS/FOOTER/footer_copyR.svg";
import { ReactComponent as FooterLogo } from "../../assets/image/RECURSOS/FOOTER/footer_logo.svg";
import { ReactComponent as FooterRay } from "../../assets/image/RECURSOS/FOOTER/footer_ray.svg";

import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

import ImageGallery from "react-image-gallery";

import ScrollAnimation from "react-animate-on-scroll";

import {
  photogears,
  // video,
  FacebookBotton,
  InstagramBotton,
  LinkedinBotton,
  TwirerBotton,
  WhatsappBotton,
  YoutubeBotton,
} from "../../assets";

import Header from "../../components/homepageheader";

import { useFormik } from "formik";

import axios from "axios";

import {
  List,
  Container,
  ContainerBody,
  Content,
  ContentRight,
  FirstBlockTitleSm,
  FirstBlockTitleBg,
  Description,
  FirstBlock,
  SecondBlock,
  SecondBlockCover,
  ContactForm,
  CarouselDiv,
  CarouselDivTitle,
  CarouselDivContent,
  ContactFormDescription,
  ContactFormItem,
  ContactFormGroup,
  CarouselDivBigText,
  CarouselDivBigTextSm,
  FormGroupTitle,
  BackGround,
  Footer,
} from "./style";

import "react-notifications/lib/notifications.css";

function debounce(fn, ms) {
  let timer;
  return (_) => {
    clearTimeout(timer);
    timer = setTimeout((_) => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

function HomePage() {
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  const fontSize = 24;
  const Icon = ({ type, className = "", style = {} } = {}) => (
    <i className={`fas fa-${type} ${className}`} style={style} />
  );

  const RocketHor = (
    <Icon
      type="rocket"
      className="animation-horizon"
      style={{ fontSize, color: "#120338" }}
    />
  );

  const [state, setState] = useState({
    isLoading: true,
  });

  function fakeRequest() {
    return new Promise((resolve) => setTimeout(() => resolve(), 5000));
  }

  const formik = useFormik({
    initialValues: {
      name: "",
      company: "",
      email: "",
      number: "",
      message: "",
    },
    validate(values) {
      const errors = {};
      if (!values.name) {
        errors.name = "¡El campo de nombre es obligatorio!";
      } else if (!values.company) {
        errors.name = "¡El campo del nombre de la empresa es obligatorio!";
      } else if (!values.email) {
        errors.email = "¡El campo de correo electrónico es obligatorio!";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "¡El email debe ser válido!";
      } else if (!values.message) {
        errors.message = "¡El campo de mensaje es obligatorio!";
      }

      return errors;
    },
    onSubmit(values, { setSubmitting, setErrors, setStatus, resetForm }) {
      const userinfo = values;
      let formData = new FormData();
      formData.append("email", userinfo.email);
      formData.append("text", userinfo.message);
      formData.append("name", userinfo.name);
      formData.append("company", userinfo.company);
      formData.append("number", userinfo.number);
      axios.post(
        "https://protected-spire-89566.herokuapp.com/sendmail",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );

      resetForm({});
      setStatus({ success: true });

      setTimeout(function () {
        NotificationManager.success(
          "Success message",
          "This mail is sent correctly"
        );
      }, 1000);
    },
  });

  useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }, 10);

    window.addEventListener("resize", debouncedHandleResize);

    return (_) => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  });

  useEffect(() => {
    const width = window.innerWidth;

    fakeRequest().then(() => {
      const el = document.querySelector(".loader-container");
      el.remove();
      if (width < 400) {
        setState({
          isLoading: false,
        });
      } else {
        setState({
          isLoading: false,
        });
      }
    });
  }, []);

  if (state.isLoading) {
    return <></>;
  }

  return (
    <LoadingMask
      className="customize"
      loading={false}
      loadingText={"Customize animation"}
      indicator={RocketHor}
    >
      <Container>
        <BackGround>
          <ContainerBody>
            <Header></Header>
            <FirstBlock>
              <Content>
                <FirstBlockTitleSm>BIENVENIDOS A</FirstBlockTitleSm>
                <FirstBlockTitleBg>CONEMA</FirstBlockTitleBg>
                <Description>
                  En CONEMA nos hemos comprometido con la calidad y el
                  cumplimiento a tiempo de todas las obras en las que hemos
                  trabajado. Veinte años de experiencia de cada uno de nuestros
                  ingenieros y técnicos respaldan este compromiso.
                </Description>
                <img
                  src={photogears}
                  style={{ width: "100%" }}
                  alt="Trabajadores"
                />
              </Content>
              <ContentRight>
                <ReactPlayer
                  muted={true}
                  playing={true}
                  // url= {video}
                  width="100%"
                  height="100%"
                  url={
                    "https://www.youtube.com/watch?v=XEXh331A3WM&feature=youtu.be"
                  }
                  controls={true}
                ></ReactPlayer>
              </ContentRight>
            </FirstBlock>
            <SecondBlock>
              <SecondBlockCover>
                <ScrollAnimation animateIn="fadeIn">
                  <div style={{ display: "flex" }}>
                    <CarouselDivBigTextSm>NUESTROS</CarouselDivBigTextSm>
                  </div>
                  <CarouselDiv>
                    <CarouselDivBigText>SERVICIOS</CarouselDivBigText>
                    <div>
                      <CarouselDivTitle>
                        CONSTRUCCIÓN, ENSAMBLES Y MANTENIMIENTO.
                      </CarouselDivTitle>
                      <CarouselDivContent>
                        Contamos con la experiencia necesaria para cumplir con
                        las necesidades de tus proyectos, equilibrando la
                        variable CALIDAD-COSTO.
                      </CarouselDivContent>
                    </div>
                  </CarouselDiv>
                </ScrollAnimation>
                <div style={{ marginTop: "20px" }}>
                  {dimensions.width <= 768 ? (
                    <ImageGallery
                      showNav={false}
                      showThumbnails={false}
                      autoPlay={true}
                      slideInterval={5000}
                      showPlayButton={false}
                      items={SERVICIOSMobile}
                    />
                  ) : (
                    <ImageGallery
                      showNav={false}
                      showThumbnails={false}
                      autoPlay={true}
                      slideInterval={5000}
                      showPlayButton={false}
                      items={SERVICIOSDesktop}
                    />
                  )}
                </div>
              </SecondBlockCover>
            </SecondBlock>
          </ContainerBody>
        </BackGround>

        <BackGround>
          <div style={{ height: "10px" }}></div>
          <ContainerBody>
            <SecondBlock>
              <SecondBlockCover>
                <ScrollAnimation animateIn="fadeIn">
                  <div style={{ display: "flex" }}>
                    <CarouselDivBigTextSm>NUESTROS</CarouselDivBigTextSm>
                  </div>
                  <CarouselDiv>
                    <CarouselDivBigText>PROYECTOS</CarouselDivBigText>
                    <div>
                      <CarouselDivContent>
                        Cada proyecto es una experiencia única para nuestro
                        equipo de ingenieros y técnicos, en CONEMA brindamos un
                        servicio de excelencia, contamos con mano de obra
                        calificada y competitiva innovando en nuestros procesos
                        de ingeniería.
                      </CarouselDivContent>
                    </div>
                  </CarouselDiv>
                </ScrollAnimation>
                <div style={{ marginTop: "20px" }}>
                  {dimensions.width <= 768 ? (
                    <ImageGallery
                      showNav={false}
                      showThumbnails={false}
                      autoPlay={true}
                      slideInterval={5000}
                      showPlayButton={false}
                      items={PROYECTOSMobile}
                    />
                  ) : (
                    <ImageGallery
                      showNav={false}
                      showThumbnails={false}
                      autoPlay={true}
                      slideInterval={5000}
                      showPlayButton={false}
                      items={PROYECTOSDesktop}
                    />
                  )}
                </div>
              </SecondBlockCover>
            </SecondBlock>
            <ScrollAnimation animateIn="fadeIn">
              <ContactForm>
                <ContactFormDescription>
                  <ContactFormItem style={{ display: "flex", margin: "auto" }}>
                    <div
                      className="contactIcon"
                      style={{ width: "5%", marginRight: "30px" }}
                    >
                      <a href="https://maps.app.goo.gl/sziFGF85Ju1QVYF49">
                        <MapsIcon className="rotate" />
                      </a>
                    </div>
                    <div
                      style={{ width: "300px", marginRight: "30px" }}
                      className="contactDescirption"
                    >
                      <div>Col. Progreso Nacional,</div>
                      <div>Alcaldía, Gustavo A. Madero</div>
                      <div>Ciudad de México, México</div>
                    </div>
                  </ContactFormItem>
                  <ContactFormItem style={{ marginTop: "30px" }}>
                    <div
                      className="contactIcon"
                      style={{ width: "5%", marginRight: "30px" }}
                    >
                      <PhoneIcon className="rotate" />
                    </div>
                    <div
                      style={{ width: "300px", marginRight: "30px" }}
                      className="contactDescirptionphone"
                    >
                      <a href="tel:+525558864581" className="phoneLink">
                        <div className="phone">(+52)55 5886-4581</div>
                      </a>
                      <a href="tel:+522821076564" className="phoneLink">
                        <div className="phone">(+52)28 2107-6564</div>
                      </a>
                    </div>
                  </ContactFormItem>
                  <ContactFormItem style={{ marginTop: "30px" }}>
                    <div
                      className="contactIcon"
                      style={{ width: "5%", marginRight: "30px" }}
                    >
                      <a href="mailto:cotizaciones@conemamx.com">
                        <SendIcon className="rotate" />
                      </a>
                    </div>
                    <div
                      style={{ width: "300px", marginRight: "30px" }}
                      className="contactDescirption"
                    >
                      <div>cotizaciones@conemamx.com</div>
                    </div>
                  </ContactFormItem>
                </ContactFormDescription>
                <ContactFormGroup>
                  <form
                    onSubmit={formik.handleSubmit}
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "10px",
                      }}
                    >
                      <FormGroupTitle>COTIZA AQUI</FormGroupTitle>
                      <button type="submit" className="sendBtn">
                        <div
                          style={{
                            fontFamily: "DINAlternate-Bold",
                            fontSize: "30px",
                            color: "#ffffff",
                            margin: "auto",
                          }}
                        >
                          enviar
                        </div>
                        <IconContext.Provider
                          value={{
                            color: "white",
                            className: "global-class-name",
                          }}
                        >
                          <AiOutlineSend style={{ margin: "auto" }} />
                        </IconContext.Provider>
                      </button>
                    </div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Nombre"
                      className={formik.errors.name ? "error" : null}
                      onChange={formik.handleChange}
                      value={formik.values.name}
                      style={{ margin: "10px" }}
                    />
                    {formik.errors.name ? (
                      <span className="errorText">{formik.errors.name}</span>
                    ) : null}
                    <input
                      type="text"
                      name="company"
                      placeholder="Empresa"
                      className={formik.errors.company ? "error" : null}
                      onChange={formik.handleChange}
                      value={formik.values.company}
                      style={{ margin: "10px" }}
                    />
                    {formik.errors.company ? (
                      <span className="errorText">{formik.errors.company}</span>
                    ) : null}
                    <div style={{ display: "flex" }}>
                      <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        className={formik.errors.email ? "error" : null}
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        style={{ margin: "10px", width: "calc(50% - 20px)" }}
                      />
                      <input
                        type="text"
                        name="number"
                        placeholder="Teléfono"
                        className={formik.errors.number ? "error" : null}
                        onChange={formik.handleChange}
                        value={formik.values.number}
                        style={{ margin: "10px", width: "calc(50% - 20px)" }}
                      />
                    </div>
                    {formik.errors.email ? (
                      <span className="errorText">{formik.errors.email}</span>
                    ) : null}
                    <textarea
                      name="message"
                      placeholder="Mensaje"
                      className={formik.errors.message ? "error" : null}
                      onChange={formik.handleChange}
                      value={formik.values.message}
                      style={{ margin: "10px" }}
                    />
                    {formik.errors.message ? (
                      <span className="errorText">{formik.errors.message}</span>
                    ) : null}
                  </form>
                </ContactFormGroup>
              </ContactForm>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn">
              <List>
                <li>
                  <a href="http://linkedin.com/in/operaciones-conema-40a97b1bb">
                    <img alt="Linkedin logo" src={LinkedinBotton} />
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/CONEMAmx-102090445069714/">
                    <img alt="Facebook logo" src={FacebookBotton} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img alt="Whatsapp logo" src={WhatsappBotton} />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/AmxConem">
                    <img alt="Twitter logo" src={TwirerBotton} />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/invites/contact/?i=1lkgw3y8erjdt&utm_content=kj84l1g">
                    <img alt="Instagram logo" src={InstagramBotton} />
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/channel/UC7d9_QAwMQm0TOHbbXFFbQA">
                    <img alt="Youtube logo" src={YoutubeBotton} />
                  </a>
                </li>
              </List>
            </ScrollAnimation>

            <Footer>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  alignItems: "flex-end",
                  margin: "80px 50px 20px 50px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    width: "15vw",
                    display: "flex",
                    height: "100%",
                    alignItems: "flex-end",
                  }}
                >
                  <div style={{ width: "2vw" }}>
                    <FooterRay />
                  </div>
                  <div style={{ width: "13vw" }}>
                    <FooterCopy />
                  </div>
                </div>
                <div style={{ width: "40vw", marginTop: "80px" }}>
                  <FooterText />
                </div>
                <div style={{ width: "12vw" }}>
                  <FooterLogo />
                </div>
              </div>
            </Footer>

            <NotificationContainer />
          </ContainerBody>
        </BackGround>
      </Container>
    </LoadingMask>
  );
}

export default HomePage;
