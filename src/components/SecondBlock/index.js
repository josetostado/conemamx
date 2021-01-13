import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import ImageGallery from "react-image-gallery";
import {
  SecondBlock,
  SecondBlockCover,
  CarouselDivBigTextSm,
  CarouselDivBigText,
  CarouselDiv,
  CarouselDivTitle,
  CarouselDivContent,
} from "./style";
import {
  PROYECTOSDesktop,
  PROYECTOSMobile,
  SERVICIOSDesktop,
  SERVICIOSMobile,
} from "../../assets";

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

export default function CompleteSecondBlock() {
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  React.useEffect(() => {
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

  return (
    <>
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
                  Contamos con la experiencia necesaria para cumplir con las
                  necesidades de tus proyectos, equilibrando la variable
                  CALIDAD-COSTO.
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
                  Cada proyecto es una experiencia única para nuestro equipo de
                  ingenieros y técnicos, en CONEMA brindamos un servicio de
                  excelencia, contamos con mano de obra calificada y competitiva
                  innovando en nuestros procesos de ingeniería.
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
    </>
  );
}
