import MovieFilter from "@/components/movies/MovieFilters";
import MovieList from "@/components/movies/MovieList";
import Navbar from "@/components/ui/Navbar";
import Pagination from "@/components/ui/Pagination";
import { useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
export default function AllMovies() {
  const [currentPage, setCurrentPage] = useState(1);
  const { page = 1 } = useParams();
  const navigate = useNavigate();

  if (!page) {
    navigate("/");
    return <Navigate to="/" />;
  }

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    navigate(`/movies/list/${newPage}`);
  };

  const [filters, setFilters] = useState({
    genre: null,
    rangeDate: {
      from: null,
      to: null,
    },
    sortby: null,
    voteAverage: {
      from: null,
      to: null,
    },
    runtime: {
      from: null,
      to: null,
    },
  });

  const handleSortSelect = (sortBy) => {
    setFilters((prev) => ({ ...prev, sortby: sortBy }));
  };

  const handleGenreSelect = (genreId, isChecked) => {
    setFilters((prev) => {
      const prevGenre = prev.genre || [];
      if (isChecked) {
        return { ...prev, genre: [...prevGenre, genreId] };
      } else {
        return { ...prev, genre: prevGenre.filter((id) => id !== genreId) };
      }
    });
  };

  const handleDateSelect = (date) => {
    setFilters((prev) => ({
      ...prev,
      rangeDate: {
        from: date.from ? date.from.toISOString().split("T")[0] : null,
        to: date.to ? date.to.toISOString().split("T")[0] : null,
      },
    }));
  };

  const handleVoteAverageSelect = (voteAverage) => {
    setFilters((prev) => ({
      ...prev,
      voteAverage: {
        from: voteAverage.from,
        to: voteAverage.to,
      },
    }));
  }

  const handleRuntimeSelect = (runtime) => {
    setFilters((prev) => ({
      ...prev,
      runtime: {
        from: runtime.from,
        to: runtime.to,
      },
    }));
  }
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto mb-10">
        <h1 className="text-6xl my-7 ml-2">
          <strong>Movies</strong>
        </h1>
        <div className="flex lg:flex-row flex-col px-2">
          <div className="flex-1 rounded-lg my-5">
            <MovieFilter
              onSelectSortFilter={handleSortSelect}
              onSelectGenreFilter={handleGenreSelect}
              onSelectDateFilter={handleDateSelect}
              onSelectVoteAverageFilter={handleVoteAverageSelect}
              onSelectRuntimeFilter={handleRuntimeSelect}
            />
          </div>
          <div className="flex flex-col flex-[4] mx-5 min-h-screen p-5 shadow-2xl shadow-secondary-foreground rounded-xl">
            <div>
              <MovieList page={page} filters={filters} />
            </div>
            <div className="self-center mt-5">
              <Pagination
                currentPage={currentPage}
                handlePageChange={handlePageChange}
                totalPages={42147}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
