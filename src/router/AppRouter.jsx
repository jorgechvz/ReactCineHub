import Home from "@/pages/Home";
import MovieDetail from "@/pages/MovieDetail";
import MovieCategory from "@/pages/MoviesCategory";
import { Route, Routes } from "react-router-dom";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:id" element={<MovieDetail />} />
        <Route
          path="/movies/list/:page?"
          element={<MovieCategory />}
        />
      </Routes>
    </>
  );
};
