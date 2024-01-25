import MovieList from "@/components/categories/MovieList";
import Navbar from "@/components/ui/Navbar";
import { useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
export default function MovieCategory() {
  const { page = 1 } = useParams();

  const navigate = useNavigate();
  if (!page) {
    navigate("/");
    return <Navigate to="/" />;
  }
  const [filters, setFilters] = useState({
    genre: null, 
    year: null, 
    minPopularity: null, 
    minVoteAverage: null, 
    sortby: null,
  });
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto">
        <h1>Movies</h1>
        <div className="flex lg:flex-row flex-col px-2">
          <div className="flex-1 rounded-lg"></div>
          <div className="flex-[4] mx-5 min-h-screen p-5 shadow-2xl shadow-secondary-foreground rounded-xl">
            <div>
              <MovieList page={page} filters={filters} />
            </div>
            <div>
              <Link to={`/movies/list/${Number(page) + 1}`}>
                Next
              </Link>
              {
                Number(page) > 1 && (
                  <Link to={`/movies/list/${Number(page) - 1}`}>
                    Prev
                  </Link>
                )
              }
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
