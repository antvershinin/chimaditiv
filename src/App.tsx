import { Layout } from "./components/layout/Layout";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { HomePage } from "./pages/homePage/HomePage";
import { Catalogue0 } from "./pages/cataloguesPage/CataloguesPage";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog/:catalog" element={<Catalogue0 />} />{" "}
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}

export default App;
