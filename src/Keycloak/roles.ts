import keycloak from "../Keycloak/keycloak";

// export const getUserRoles = () => {
//   const token = keycloak?.tokenParsed;
//   if (!token || !token.resource_access) {
//     return [];
//   }
//   const { resource_access }: TTokenType = token as TTokenType;
//   const roles = resource_access["account"]?.roles || [];
//   return roles;
// };

const getUserRoles = (): string[] => {
  const roles = keycloak?.tokenParsed?.resource_access?.account?.roles || [];
  return roles;
};

export const hasPermission = (role: string | string[]) => {
  const roles = getUserRoles();
  const compareArrays = (roles: string[], role: string[]) =>
    role?.some((r) => roles.includes(r));
  if (Array.isArray(role)) {
    return compareArrays(roles, role);
  } else {
    return roles?.includes(role);
  }
};

// import keycloak from "../config/keycloak";

// type TTokenType = {
//   resource_access: {
//     [key: string]: {
//       roles: string[];
//     };
//   };
//   azp: string;
// };

// export const getUserRoles = () => {
//   const token = keycloak.tokenParsed;
//   const { resource_access, azp }: TTokenType = token as TTokenType;
//   const roles = resource_access[azp]?.roles;

//   return roles;
// };

// export const hasPermission = (role: string | string[]) => {
//   const roles = getUserRoles();
//   const compareArrays = (a: string[], b: string[]) =>
//     a?.some((element, index) => element === b[index]);

//   if (Array.isArray(role)) {
//     return compareArrays(roles, role);
//   } else {
//     return roles?.includes(role);
//   }
// };
