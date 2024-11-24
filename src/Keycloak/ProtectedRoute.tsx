import React from "react";
import { hasPermission } from "./roles";

interface IProps {
  showNotAllowed: boolean;
  children: React.ReactNode;
  roles: string | string[];
}
const ProtectedRoutes = ({ children, roles, showNotAllowed }: IProps) => {
  return hasPermission(roles) ? (
    <>{children}</>
  ) : showNotAllowed ? (
    <h1>403</h1>
  ) : null;
};

export default ProtectedRoutes;
