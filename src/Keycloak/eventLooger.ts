import keycloak, { EVENTS } from "./keycloak";

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
      break;
    case EVENTS.REFRESH_ERROR:
      keycloak.logout();
      break;
    default:
      break;
  }
  console.log("onKeycloakEvent", event, authError);
};
