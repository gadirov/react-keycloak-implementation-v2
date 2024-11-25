import { Link } from "react-router-dom";
import keycloak from "../Keycloak/keycloak";
import ProtectedRoutes from "../Keycloak/ProtectedRoute";

const SideBar = () => {
  const menuItems = [
    { to: "/", label: "Admission Plan", protected: false },
    { to: "/ttq", label: "Tedrisin Teshkili qaydalari", protected: false },
    {
      to: "/journals",
      label: "Journals",
      protected: true,
      requiredRoles: ["view-applications"],
    },
    { to: "/subjects", label: "Subjects", protected: false },
  ];

  return (
    <div style={{ width: "300px", height: "100vh", background: "lightgreen" }}>
      <h1> Welcome {keycloak?.idTokenParsed?.name}</h1>
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          flexBasis: "300px",
          padding: 0,
          margin: 0,
          gap: "20px",
          fontSize: "20px",
        }}
      >
        {menuItems.map((item, index) =>
          item.protected ? (
            <ProtectedRoutes roles={item.requiredRoles} key={index}>
              <Link to={item.to}>
                <li>{item.label}</li>
              </Link>
            </ProtectedRoutes>
          ) : (
            <Link to={item.to} key={index}>
              <li>{item.label}</li>
            </Link>
          )
        )}
      </ul>
      <h2
        style={{
          position: "absolute",
          bottom: 0,
          left: "30px",
          cursor: "pointer",
        }}
        onClick={() => keycloak.logout()}
      >
        Logout
      </h2>
    </div>
  );
};

export default SideBar;
