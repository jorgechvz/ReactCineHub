import Home from "@/pages/Home";
import MovieDetail from "@/pages/MovieDetail";
import { Route, Routes } from "react-router-dom";
import AllMovies from "@/pages/AllMovies";
import LoginPage from "@/pages/LoginPage";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:id" element={<MovieDetail />} />
        <Route path="/movies/list/:page?" element={<AllMovies />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
};
