export const body_servicesandprojectsframe_outline = require("./image/RECURSOS/BODY/body_servicesandprojectsframe_outline.svg");
export const FacebookBotton = require("./image/RECURSOS/BODY/body_social_facebookBotton.png");
export const InstagramBotton = require("./image/RECURSOS/BODY/body_social_InstagramBotton.png");
export const LinkedinBotton = require("./image/RECURSOS/BODY/body_social_LinkedinBotton.png");
export const TwirerBotton = require("./image/RECURSOS/BODY/body_social_TwirerBotton.png");
export const WhatsappBotton = require("./image/RECURSOS/BODY/body_social_WhatsappBotton.png");
export const YoutubeBotton = require("./image/RECURSOS/BODY/body_social_YoutubeBotton.png");
export const photogears = require("./image/RECURSOS/BODY/body_welcome_photogears.png");
export const footerbar = require("./image/RECURSOS/FOOTER/footer_bar.png");
export const rightlog = require("./image/RECURSOS/HEADER/header-1_gear.png");
export const rightlog1 = require("./image/RECURSOS/HEADER/header-2_gear.png");
export const leftlog = require("./image/RECURSOS/HEADER/header-1_logo.svg");
export const leftlog1 = require("./image/RECURSOS/HEADER/header-2_logo.svg");
export const backImg = require("./image/backgrand_lowpoli.jpg");
export const backLog = require("./image/backgrand_Cgear.svg");
// export const video = require('./videoes/advertising.mp4');

const PROJECTS_ASSETS = "/assets/images/slides/proyectos";
const PROJECTS_DESKTOP = `${PROJECTS_ASSETS}/desktop`;
const PROJECTS_MOVIL = `${PROJECTS_ASSETS}/movil`;

const SERVICES_ASSETS = "/assets/images/slides/servicios/";
const SERVICES_DESKTOP = `${SERVICES_ASSETS}/desktop`;
const SERVICES_MOVIL = `${SERVICES_ASSETS}/movil`;

const getImage = (url, index) => `${url}/${index}.png`;

export const PROYECTOSDesktop = [
  { original: getImage(PROJECTS_DESKTOP, 1) },
  { original: getImage(PROJECTS_DESKTOP, 2) },
  { original: getImage(PROJECTS_DESKTOP, 3) },
  { original: getImage(PROJECTS_DESKTOP, 4) },
  { original: getImage(PROJECTS_DESKTOP, 5) },
  { original: getImage(PROJECTS_DESKTOP, 6) },
  { original: getImage(PROJECTS_DESKTOP, 7) },
  { original: getImage(PROJECTS_DESKTOP, 8) },
  { original: getImage(PROJECTS_DESKTOP, 9) },
  { original: getImage(PROJECTS_DESKTOP, 10) },
  { original: getImage(PROJECTS_DESKTOP, 11) },
  { original: getImage(PROJECTS_DESKTOP, 12) },
  { original: getImage(PROJECTS_DESKTOP, 13) },
  { original: getImage(PROJECTS_DESKTOP, 14) },
  { original: getImage(PROJECTS_DESKTOP, 15) },
  { original: getImage(PROJECTS_DESKTOP, 16) },
  { original: getImage(PROJECTS_DESKTOP, 17) },
  { original: getImage(PROJECTS_DESKTOP, 18) },
  { original: getImage(PROJECTS_DESKTOP, 19) },
  { original: getImage(PROJECTS_DESKTOP, 20) },
  { original: getImage(PROJECTS_DESKTOP, 21) },
];

export const PROYECTOSMobile = [
  { original: getImage(PROJECTS_MOVIL, 1) },
  { original: getImage(PROJECTS_MOVIL, 2) },
  { original: getImage(PROJECTS_MOVIL, 3) },
  { original: getImage(PROJECTS_MOVIL, 4) },
  { original: getImage(PROJECTS_MOVIL, 5) },
  { original: getImage(PROJECTS_MOVIL, 6) },
  { original: getImage(PROJECTS_MOVIL, 7) },
  { original: getImage(PROJECTS_MOVIL, 8) },
  { original: getImage(PROJECTS_MOVIL, 9) },
  { original: getImage(PROJECTS_MOVIL, 10) },
  { original: getImage(PROJECTS_MOVIL, 11) },
  { original: getImage(PROJECTS_MOVIL, 12) },
  { original: getImage(PROJECTS_MOVIL, 13) },
  { original: getImage(PROJECTS_MOVIL, 14) },
  { original: getImage(PROJECTS_MOVIL, 15) },
  { original: getImage(PROJECTS_MOVIL, 16) },
  { original: getImage(PROJECTS_MOVIL, 17) },
  { original: getImage(PROJECTS_MOVIL, 18) },
  { original: getImage(PROJECTS_MOVIL, 19) },
  { original: getImage(PROJECTS_MOVIL, 20) },
  { original: getImage(PROJECTS_MOVIL, 21) },
];

export const SERVICIOSDesktop = [
  { original: getImage(SERVICES_DESKTOP, 1) },
  { original: getImage(SERVICES_DESKTOP, 2) },
  { original: getImage(SERVICES_DESKTOP, 3) },
  { original: getImage(SERVICES_DESKTOP, 4) },
];

export const SERVICIOSMobile = [
  { original: getImage(SERVICES_MOVIL, 1) },
  { original: getImage(SERVICES_MOVIL, 2) },
  { original: getImage(SERVICES_MOVIL, 3) },
  { original: getImage(SERVICES_MOVIL, 4) },
];
