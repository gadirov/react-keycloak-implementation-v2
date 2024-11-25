import Keycloak from "keycloak-js";

const keycloakConfig = {
  url: process.env.REACT_APP_KEYCLOAK_URL,
  realm: "naa-lms",
  clientId: "naa-lms",
};

const keycloak = new Keycloak(keycloakConfig);

export const keycloakProviderConfig = {
  onLoad: "login-required",
  pkceMethod: "S256", //Proof Key for Code Exchange
  redirectUri: process.env.REACT_APP_KEYCLOAK_REDIRECT_URL,
};

export default keycloak;
