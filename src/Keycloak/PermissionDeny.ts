import { NavigateFunction } from "react-router-dom";

export const handlePermissionDeny = (navigate: NavigateFunction) => {
  navigate("/403");
};
