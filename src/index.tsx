import ReactDOM from "react-dom/client";
import App from "./App";
import keycloak, { keycloakProviderConfig } from "./Keycloak/keycloak";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import { eventLogger } from "./Keycloak/eventLooger";
import Cookies from "js-cookie";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const tokenLogger = ({ token }: any) => {
  Cookies.set("token", token);
};

root.render(
  <ReactKeycloakProvider
    authClient={keycloak}
    initOptions={keycloakProviderConfig}
    LoadingComponent={<h1>Loading...</h1>}
    onEvent={eventLogger}
    onTokens={tokenLogger}
  >
    <App />
  </ReactKeycloakProvider>
);
