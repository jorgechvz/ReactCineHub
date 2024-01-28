import { useGetFetch } from "@/hooks/useFetch";
import { formateDate } from "@/lib/utils";
import { Link } from "react-router-dom";

export default function MovieList({ page, filters }) {
  let url = "https://api.themoviedb.org/3/discover/movie?language=en-US";

  if (filters.rangeDate.from !== null) {
    url += `&primary_release_date.gte=${filters.rangeDate.from}`;
  }

  if (filters.rangeDate.to !== null) {
    url += `&primary_release_date.lte=${filters.rangeDate.to}`;
  }

  if (filters.voteAverage.from !== null) {
    url += `&vote_average.gte=${filters.voteAverage.from}`;
  }

  if (filters.voteAverage.to !== null) {
    url += `&vote_average.lte=${filters.voteAverage.to}`;
  }

  if (filters.runtime.from !== null) {
    url += `&with_runtime.gte=${filters.runtime.from}`;
  }

  if (filters.runtime.to !== null) {
    url += `&with_runtime.lte=${filters.runtime.to}`;
  }

  if (filters.genre !== null) {
    const genreString = filters.genre.join(",");
    const encodedGenreString = encodeURIComponent(genreString);
    url += `&with_genres=${encodedGenreString}`;
  }

  if (filters.sortby !== null) {
    url += `&sort_by=${filters.sortby}`;
  }

  url += `&page=${page}`;
  const { data: listMovie, loading, hasError } = useGetFetch(url);

  return loading ? (
    <div>Loading...</div>
  ) : (
    <section className="mx-auto p-3 grid grid-cols-4 gap-5 max-w-5xl rounded-md">
      {listMovie.results.map((item) => (
        <div
          key={item.id}
          className="pt pb-1 min-w-[140px] min-h-[200px] border rounded-md"
        >
          <Link to={`/movies/${item.id}`}>
            <div>
              {item.poster_path === null ? (
                <img
                  className="rounded-t-md w-full h-full"
                  src="https://via.placeholder.com/220x330.png?text=No+Image"
                  alt={`Poster Image for ${item.title}`}
                />
              ) : (
                <img
                  className="rounded-t-md w-full h-full"
                  src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${item.poster_path}`}
                  alt={`Poster Image for ${item.title}`}
                />
              )}
            </div>
            <div className="pt-3 px-2 pb-1">
              <p>
                <strong>{item.title}</strong>
              </p>
              <p>{formateDate(item.release_date)}</p>
            </div>
          </Link>
        </div>
      ))}
    </section>
  );
}
