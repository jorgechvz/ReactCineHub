import MovieFilter from "@/components/movies/MovieFilters";
import MovieList from "@/components/movies/MovieList";
import Navbar from "@/components/ui/Navbar";
import Pagination from "@/components/ui/Pagination";
import { useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

// Define the AllMovies component
export default function AllMovies() {
  // Define the current page state
  const [currentPage, setCurrentPage] = useState(1);
  // Get the page parameter from the url
  const { page = 1 } = useParams();
  // Define the navigate function
  const navigate = useNavigate();
  // If the page parameter is not a number or is less than 1, redirect to the home page
  if (!page) {
    navigate("/");
    return <Navigate to="/" />;
  }
  // Handle the page change
  const handlePageChange = (newPage) => {
    // Update the current page state
    setCurrentPage(newPage);
    // Navigate to the new page
    navigate(`/movies/list/${newPage}`);
  };

  // Define the filters state
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
  // Handle the sort filter select
  const handleSortSelect = (sortBy) => {
    setFilters((prev) => ({ ...prev, sortby: sortBy }));
  };
  // Handle the genre filter select
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
  // Handle the date filter select
  const handleDateSelect = (date) => {
    setFilters((prev) => ({
      ...prev,
      rangeDate: {
        from: date.from ? date.from.toISOString().split("T")[0] : null,
        to: date.to ? date.to.toISOString().split("T")[0] : null,
      },
    }));
  };
  // Handle the vote average filter select
  const handleVoteAverageSelect = (voteAverage) => {
    setFilters((prev) => ({
      ...prev,
      voteAverage: {
        from: voteAverage.from,
        to: voteAverage.to,
      },
    }));
  };
  // Handle the runtime filter select
  const handleRuntimeSelect = (runtime) => {
    setFilters((prev) => ({
      ...prev,
      runtime: {
        from: runtime.from,
        to: runtime.to,
      },
    }));
  };
  // Render the AllMovies component
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
