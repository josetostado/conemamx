import React from "react";
import { Footer } from "./style";

import { ReactComponent as FooterText } from "../../assets/image/RECURSOS/FOOTER/footer_consejo.svg";
import { ReactComponent as FooterCopy } from "../../assets/image/RECURSOS/FOOTER/footer_copyR.svg";
import { ReactComponent as FooterLogo } from "../../assets/image/RECURSOS/FOOTER/footer_logo.svg";
import { ReactComponent as FooterRay } from "../../assets/image/RECURSOS/FOOTER/footer_ray.svg";

export default function MyFooter() {
  return (
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
  );
}
