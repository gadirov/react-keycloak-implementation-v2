import Keycloak from "keycloak-js";

export enum EVENTS {
  AUTH_SUCCESS = "onAuthSuccess",
  INIT_ERROR = "onInitError",
  REFRESH_ERROR = "onAuthRefreshError",
}

const keycloakConfig = {
  url: "http://localhost:4000/",
  realm: "naa-lms",
  clientId: "naa-lms",
};

const keycloak = new Keycloak(keycloakConfig);

export const keycloakProviderConfig = {
  onLoad: "login-required",
  pkceMethod: "S256", //Proof Key for Code Exchange
  redirectUri: "http://localhost:3000",
};

export default keycloak;
