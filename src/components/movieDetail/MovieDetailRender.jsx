import { useGetFetch } from "@/hooks/useFetch";

export default function MovieDetailRender({ movieId }) {
  const { data, loading, hasError } = useGetFetch(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`
  );

  const {
    data: creditsData,
    loading: creditsLoading,
    hasError: creditsHasError,
  } = useGetFetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`
  );

  const {
    data: recommendationsData,
    loading: recommendationsLoading,
    hasError: recommendationsHasError,
  } = useGetFetch(
    `https://api.themoviedb.org/3/movie/${movieId}/recommendations?language=en-US&page=1`
  );

  return loading ? (
    <p>Loading...</p>
  ) : (
    <>
      <div
        className="m-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/${data?.backdrop_path}')`,
        }}
      >
        <div className="bg-custom-gradient-detail ">
          <div className="flex py-14 px-16 gap-8 max-w-[1440px] mx-auto my-16 justify-center align-center">
            <img
              src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${data.poster_path}`}
              alt={`Poster Image for ${data.title}`}
              className="rounded-md"
            />
            <div className="text-white space-y-5 self-center">
              <h2 className="text-3xl font-bold">
                {data.title}
                <span> ({new Date(data.release_date).getFullYear()})</span>
              </h2>
              <p>{data.genres.map((genre) => genre.name).join(", ")}</p>
              <p>{data.tagline}</p>
              <h3 className="text-xl font-bold">Overview</h3>
              <p>{data.overview}</p>
            </div>
          </div>
        </div>
      </div>
      <section className="max-w-7xl mx-auto my-10 space-y-10">
        {" "}
        (
        <div>
          <h2 className="text-3xl font-bold mb-5">Cast</h2>
          <ul
            className="flex gap-7 overflow-x-scroll bg-no-repeat bg-bottom"
            style={{
              backgroundImage:
                "url('https://www.themoviedb.org/assets/2/v4/misc/trending-bg-39afc2a5f77e31d469b25c187814c0a2efef225494c038098d62317d923f8415.svg')",
            }}
          >
            {creditsLoading ? (
              <p>Loading...</p>
            ) : (
              creditsData.cast.map((cast) => (
                <li
                  key={cast.id}
                  className="pt-3 pb-1 min-w-[150px] min-h-[220px]"
                >
                  {cast.profile_path === null ? (
                    <img
                      src={`https://via.placeholder.com/138x175.png?text=No+Image`}
                      alt={`Profile Image for ${cast.name}`}
                    />
                  ) : (
                    <img
                      src={`https://www.themoviedb.org/t/p/w138_and_h175_face/${cast.profile_path}`}
                      alt={`Profile Image for ${cast.name}`}
                    />
                  )}
                  <p>{cast.name}</p>
                  <p>{cast.character}</p>
                </li>
              ))
            )}
          </ul>
        </div>
        {recommendationsLoading ? (
          <p>Loading...</p>
        ) : (
          recommendationsData.results && (
            <div>
              <h2 className="text-3xl font-bold mb-5">Recommendations</h2>
              <ul
                className="flex gap-7 overflow-x-scroll bg-no-repeat bg-bottom"
                style={{
                  backgroundImage:
                    "url('https://www.themoviedb.org/assets/2/v4/misc/trending-bg-39afc2a5f77e31d469b25c187814c0a2efef225494c038098d62317d923f8415.svg')",
                }}
              >
                {recommendationsData.results.length === 0 ? (
                  <p>No Recommendations</p>
                ) : (
                  recommendationsData.results.map((recommendation) => (
                    <li
                      key={recommendation.id}
                      className="pt-3 pb-1 min-w-[250px] min-h-[141px]"
                    >
                      {recommendation.backdrop_path === null ? (
                        <img
                          src={`https://via.placeholder.com/250x141.png?text=No+Image`}
                          alt={`Poster Image for ${recommendation.title}`}
                          className="rounded-md"
                        />
                      ) : (
                        <img
                          src={`https://www.themoviedb.org/t/p/w250_and_h141_face/${recommendation.backdrop_path}`}
                          alt={`Poster Image for ${recommendation.title}`}
                          className="rounded-md"
                        />
                      )}
                      <p>{recommendation.title}</p>
                      <p>{recommendation.release_date}</p>
                    </li>
                  ))
                )}
              </ul>
            </div>
          )
        )}
        {data.belongs_to_collection && (
          <div className="max-w-[1440px] max-h-[800px]">
            <h2 className="text-3xl font-bold mb-5">Collection</h2>
            <div
              className="m-0 bg-cover bg-no-repeat w-full h-full"
              style={{
                backgroundImage: `url('https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/${data?.backdrop_path}')`,
              }}
            >
              <div className="bg-custom-gradient-detail">
                <div class="py-[150px] flex justify-center align-middle px-16 gap-8 mx-auto my-16">
                  <div className="text-white space-y-5">
                    <h3 className="text-3xl font-bold">
                      {data.belongs_to_collection.name}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
