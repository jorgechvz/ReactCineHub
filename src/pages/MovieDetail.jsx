import MovieDetailRender from "@/components/movieDetail/MovieDetailRender";
import Navbar from "@/components/ui/Navbar";
import { Navigate, useNavigate, useParams } from "react-router-dom";
export default function MovieDetail() {
  // Get the movie id from the url
  const { id } = useParams();
  // Define the navigate function
  const navigate = useNavigate();
  // If the id parameter is not a number or is less than 1, redirect to the home page
  if (!id) {
    navigate("/");
    return <Navigate to="/" />;
  }
  // Handle the back button click
  const onNavigateBack = () => {
    navigate(-1);
  };
  // Render the MovieDetail component
  return (
    <>
      <Navbar />
      <main>
        <MovieDetailRender movieId={id} />
      </main>
    </>
  );
}
