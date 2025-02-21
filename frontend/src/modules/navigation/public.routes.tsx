import { Navigate, Route, Routes } from "react-router-dom";
import { MainPage } from "../pages/main";
import { RecipePage } from "../pages/recipe";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/recipe/:id" element={<RecipePage />} />
      <Route path="*" element={<Navigate to={"/"} replace />} />
    </Routes>
  );
};

export default PublicRoutes;
