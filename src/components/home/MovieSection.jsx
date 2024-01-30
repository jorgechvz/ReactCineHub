import { formateDate } from "@/lib/utils";
import { Link } from "react-router-dom";

// Define the Trending component
export default function Trending({ seccionName,data }) {
  // Render the Trending component
  return (
    <div className="m-4 px-6">
      <h2 className="py-4">{seccionName}</h2>
      <ul className="flex gap-7 overflow-x-scroll bg-no-repeat bg-bottom" style={{backgroundImage: "url('https://www.themoviedb.org/assets/2/v4/misc/trending-bg-39afc2a5f77e31d469b25c187814c0a2efef225494c038098d62317d923f8415.svg')"}}>
        {data.map((item) => (
          <li key={item.id} className="pt-3 pb-1 min-w-[150px] min-h-[220px]">
            <Link to={`movies/${item.id}`}>
              <div>
                <img
                  src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${item.poster_path}`}
                  alt={`Poster Image for ${item.title}`}
                />
              </div>
              <div className="pt-3">
                <p><strong>{item.title}</strong></p>
                <p>{formateDate(item.release_date)}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
