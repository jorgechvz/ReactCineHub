import { useGetFetch } from "@/hooks/useFetch";
import { apiUrls } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function Hero() {
  const [randomId, setRandomId] = useState();
  const [idGenerated, setIdGenerated] = useState(false);
  const { data: movies } = useGetFetch(apiUrls.now_playing.url);

  useEffect(() => {
    if (!idGenerated && movies && movies.results && movies.results.length > 0) {
      const randomIndex = Math.floor(Math.random() * movies.results.length);
      setRandomId(movies.results[randomIndex].id);
      setIdGenerated(true);
    }
  }, [movies, idGenerated]);

  const {
    data: movieId,
  } = useGetFetch(
    randomId ? `https://api.themoviedb.org/3/movie/${randomId}?language=en-US` : null
  );

  return (
    <header
      style={{
        backgroundImage: `url('https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/${movieId?.backdrop_path}')`,
      }}
      className="bg-no-repeat bg-center bg-cover max-w-7xl m-auto"
    >
      <div className="flex flex-col items-center justify-center h-[700px] bg-custom-gradient">
        <h1 className="text-4xl font-bold text-white">ReactCineHub</h1>
      </div>
    </header>
  );
}
