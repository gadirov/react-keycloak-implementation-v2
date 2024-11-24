import { useEffect, useState } from "react";
import { get } from "./axiosConfig/axiosConfig";
import ProtectedRoutes from "./Keycloak/ProtectedRoute";

interface IProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const AdmissionPlan = () => {
  const [data, setData] = useState<any>(null);
  useEffect(() => {
    const getInfo = async () => {
      const res = await get("https://jsonplaceholder.typicode.com/posts");
      setData(res);
    };
    getInfo();
  }, []);
  return (
    <h1>
      {data?.slice(0, 10)?.map((item: IProps) => (
        <div style={{ display: "flex" }} key={item.id}>
          <li>{item.title}</li>
          <ProtectedRoutes roles={["view-applications"]} showNotAllowed={false}>
            <button>Delete</button>
          </ProtectedRoutes>
        </div>
      ))}
    </h1>
  );
};

export default AdmissionPlan;
