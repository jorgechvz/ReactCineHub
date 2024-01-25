import { useGetFetch } from "@/hooks/useFetch";
import { formateDate } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function MovieList({ page, filters }) {
  const {
    data: listMovie,
    loading,
    hasError,
  } = useGetFetch(
    `https://api.themoviedb.org/3/discover/movie?language=en-US&year=${filters.year}&page=${page}&with_genres=${filters.genre}`
  );

  return loading ? (
    <div>Loading...</div>
  ) : (
    <section className="mx-auto p-3 grid grid-cols-4 gap-5 max-w-5xl rounded-md">
      {listMovie.results.map((item) => (
        <div
          key={item.id}
          className="pt pb-1 min-w-[140px] min-h-[200px] border rounded-md"
        >
          <Link to={`movies/${item.id}`}>
            <div>
              <img
                className="rounded-t-md w-full h-full"
                src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${item.poster_path}`}
                alt={`Poster Image for ${item.title}`}
              />
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
