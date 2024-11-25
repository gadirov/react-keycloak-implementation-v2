import { useNavigate } from "react-router-dom";

const UnAutorized = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        width: "100%",
        display: "grid",
        placeContent: "center",
      }}
    >
      <div
        style={{
          background: "#eeeeee",
          width: "800px",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <h1 style={{ textAlign: "center", lineHeight: "80px" }}>
          You do not have permission to view this page or perform this action.
          Please check your credentials or contact the administrator for further
          assistance.
        </h1>
        <button
          style={{ width: "100px", height: "32px", cursor: "pointer" }}
          onClick={() => navigate(-1)}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default UnAutorized;
