import { useGetFetch } from "@/hooks/useFetch";
import Trending from "@/components/home/MovieSection";
import { apiUrls } from "@/lib/utils";

export default function MainHome() {
  // Fetch data for Trending movies
  const {
    data: trendingMovies,
    loading: trendingLoading,
    hasError: trendingError,
  } = useGetFetch(apiUrls.now_playing.url);
  // Fetch data for Popular movies
  const {
    data: popularMovies,
    loading: popularLoading,
    hasError: popularError,
  } = useGetFetch(apiUrls.popular.url);
  // Fetch data for Top Rated movies
  const {
    data: topRateMovies,
    loading: topRateLoading,
    hasError: topRateError,
  } = useGetFetch(apiUrls.top_rated.url);
  // Fetch data for Upcoming movies
  const {
    data: upcomingMovies,
    loading: upcomingLoading,
    hasError: upcomingError,
  } = useGetFetch(apiUrls.upcoming.url);

  return (
    <main className="max-w-7xl m-auto">
      {trendingLoading ? (
        <div>Loading...</div>
      ) : (
        <Trending
          seccionName={apiUrls.now_playing.title}
          data={trendingMovies.results}
        />
      )}
      {popularLoading ? (
        <div>Loading...</div>
      ) : (
        <Trending seccionName={apiUrls.popular.title} data={popularMovies.results} />
      )}
      {topRateLoading ? (
        <div>Loading...</div>
      ) : (
        <Trending seccionName={apiUrls.top_rated.title} data={topRateMovies.results} />
      )}
      {upcomingLoading ? (
        <div>Loading...</div>
      ) : (
        <Trending seccionName={apiUrls.upcoming.title} data={upcomingMovies.results} />
      )}
    </main>
  );
}
