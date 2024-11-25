import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import AdmissionPlan from "./Components/AdmissionPlan";
import UnAutorized from "./Components/UnAutorized";

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
            <Route path="/403" element={<UnAutorized />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
