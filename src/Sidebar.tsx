import { Link } from "react-router-dom";
import keycloak from "./Keycloak/keycloak";
import ProtectedRoutes from "./Keycloak/ProtectedRoute";

const SideBar = () => {
  const logout = () => {
    keycloak.logout();
  };
  const name = keycloak?.idTokenParsed?.name;

  return (
    <div style={{ width: "300px", height: "100vh", background: "lightgreen" }}>
      <h1> Welcome {name}</h1>
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
        <Link to="/">
          <li>Admission Plan</li>
        </Link>
        <Link to="/ttq">
          <li>Tedrisin Teshkili qaydalari</li>
        </Link>
        <ProtectedRoutes roles={["view-applications"]} showNotAllowed={false}>
          <Link to="/journals">
            <li>Journals</li>
          </Link>
        </ProtectedRoutes>
        <Link to="/subjects">
          <li>Subjects</li>
        </Link>
      </ul>
      <h2
        style={{
          position: "absolute",
          bottom: 0,
          left: "30px",
          cursor: "pointer",
        }}
        onClick={logout}
      >
        Logout
      </h2>
    </div>
  );
};

export default SideBar;
