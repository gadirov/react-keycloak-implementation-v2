import keycloak from "./keycloak";

export enum EVENTS {
  AUTH_SUCCESS = "onAuthSuccess",
  INIT_ERROR = "onInitError",
  REFRESH_ERROR = "onAuthRefreshError",
}

type TAuthError = {
  error: string;
  error_description: string;
};

export const eventLogger = (
  event: string,
  authError: TAuthError | undefined
) => {
  switch (event) {
    case EVENTS.AUTH_SUCCESS:
      console.log("Auth Success");
      break;
    case EVENTS.INIT_ERROR:
      console.log("Init Error action will be executed");
      //TO DO: create unautorized modal
      break;
    case EVENTS.REFRESH_ERROR:
      keycloak.logout();
      break;
    default:
      break;
  }
  console.log("onKeycloakEvent", event, authError);
};
