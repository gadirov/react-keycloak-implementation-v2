import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { get } from "../axiosConfig/axiosConfig";
import ProtectedRoutes from "../Keycloak/ProtectedRoute";
import { handlePermissionDeny } from "../Keycloak/PermissionDeny";
import { hasPermission } from "../Keycloak/roles";

interface IProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const AdmissionPlan = () => {
  const [data, setData] = useState<any>(null);
  const navigate = useNavigate();
  useEffect(() => {
    const getInfo = async () => {
      const res = await get("https://jsonplaceholder.typicode.com/posts");
      setData(res);
    };
    getInfo();
  }, []);

  const deleteHandler = () => {
    if (hasPermission([""])) {
      console.log("deleted items");
    } else {
      handlePermissionDeny(navigate);
    }
  };
  return (
    <h1>
      {data?.slice(0, 10)?.map((item: IProps) => (
        <div style={{ display: "flex" }} key={item.id}>
          <li>{item.title}</li>
          <ProtectedRoutes roles={["view-applications"]}>
            <button onClick={deleteHandler}>Delete</button>
          </ProtectedRoutes>
        </div>
      ))}
    </h1>
  );
};

export default AdmissionPlan;
