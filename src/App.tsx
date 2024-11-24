import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import AdmissionPlan from "./AdmissionPlan";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<AdmissionPlan />} />
            <Route path="ttq" element={<h1>Tedrisin Teshkili qaydalari</h1>} />
            <Route path="journals" element={<h1>Journals</h1>} />
            <Route path="subjects" element={<h1>Subjects</h1>} />
            <Route path="/403" element={<h1>UnAutorized</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
