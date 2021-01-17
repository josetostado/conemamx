import React from "react";
import axios from "axios";
import ScrollAnimation from "react-animate-on-scroll";
import { useFormik } from "formik";
import { NotificationManager } from "react-notifications";
import {
  ContactForm,
  ContactFormDescription,
  ContactFormItem,
  ContactFormGroup,
  FormGroupTitle,
  TextArea,
  IconContainer,
} from "./style";

import { IconContext } from "react-icons";
import { AiOutlineSend } from "react-icons/ai";

import { ReactComponent as MapsIcon } from "../../assets/image/RECURSOS/BODY/body_contact_mapsbotton.svg";
import { ReactComponent as PhoneIcon } from "../../assets/image/RECURSOS/BODY/body_contact_phonebotton.svg";
import { ReactComponent as SendIcon } from "../../assets/image/RECURSOS/BODY/body_contact_emailbotton.svg";

export default function CContactForm() {
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
      }
      if (!values.email) {
        errors.email = "¡El campo de correo electrónico es obligatorio!";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "¡El email debe ser válido!";
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

  return (
    <ScrollAnimation animateIn="fadeIn">
      <ContactForm>
        <ContactFormDescription>
          <ContactFormItem>
            <IconContainer className="contactIcon">
              <a href="https://maps.app.goo.gl/sziFGF85Ju1QVYF49">
                <MapsIcon className="rotate" />
              </a>
            </IconContainer>
            <div style={{ width: "calc(100% - 35px)" }}>
              <p>Col. Progreso Nacional,</p>
              <p>Alcaldía, Gustavo A. Madero</p>
              <p>Ciudad de México, México</p>
            </div>
          </ContactFormItem>
          <ContactFormItem style={{ marginTop: "35px" }}>
            <IconContainer className="contactIcon">
              <PhoneIcon className="rotate" />
            </IconContainer>
            <div style={{ width: "calc(100% - 35px)" }}>
              <a href="tel:+525558864581" className="phoneLink">
                <p className="phone">(+52)55 5886-4581</p>
              </a>
              <a href="tel:+522821076564" className="phoneLink">
                <p className="phone">(+52)28 2107-6564</p>
              </a>
            </div>
          </ContactFormItem>
          <ContactFormItem style={{ marginTop: "30px" }}>
            <IconContainer className="contactIcon">
              <a href="mailto:cotizaciones@conemamx.com">
                <SendIcon className="rotate" />
              </a>
            </IconContainer>
            <div style={{ width: "calc(100% - 35px)" }}>
              <p>cotizaciones@conemamx.com</p>
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
              placeholder="Nombre*"
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
                placeholder="Email*"
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
            <TextArea
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
  );
}
