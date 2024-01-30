import { Checkbox } from "@/components/ui/checkbox";
import { useGetFetch } from "@/hooks/useFetch";
import { useState } from "react";

// Define the GenreFilter component
export default function GenreFilter({ onSelect }) {
  // Fetch the genres
  const { data, loading, hasError } = useGetFetch(
    "https://api.themoviedb.org/3/genre/movie/list?language=en"
  );

  // Define the checkedItems state
  const [checkedItems, setCheckedItems] = useState({});

  // Define the handleChange function
  const handleChange = (id, isChecked) => {
    setCheckedItems((prev) => ({ ...prev, [id]: isChecked }));
    onSelect(id, isChecked);
  };

  // Render the GenreFilter component
  return loading ? (
    <div>Loading...</div>
  ) : (
    <div className="mt-5 ml-2 flex flex-wrap gap-3">
      {data.genres.map((item) => (
        <div key={item.id} className="flex items-center space-x-1 mb-2">
          <Checkbox
            id={item.name}
            value={item.id}
            checked={checkedItems[item.id] || false}
            onCheckedChange={(isChecked) => handleChange(item.id, isChecked)}
          />
          <label
            htmlFor={item.name}
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {item.name}
          </label>
        </div>
      ))}
    </div>
  );
}
