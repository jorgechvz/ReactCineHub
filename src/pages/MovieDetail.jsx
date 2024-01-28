import MovieDetailRender from "@/components/movieDetail/MovieDetailRender";
import Navbar from "@/components/ui/Navbar";
import { Navigate, useNavigate, useParams } from "react-router-dom";
export default function MovieDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  if (!id) {
    navigate("/");
    return <Navigate to="/" />;
  }
  const onNavigateBack = () => {
    navigate(-1);
  };

  return (
    <>
      <Navbar />
      <main>
        <MovieDetailRender movieId={id} />
      </main>
    </>
  );
}
