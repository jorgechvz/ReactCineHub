import { Checkbox } from "@/components/ui/checkbox";
import { useGetFetch } from "@/hooks/useFetch";
import { useState } from "react";

export default function GenreFilter({ onSelect }) {
  const { data, loading, hasError } = useGetFetch(
    "https://api.themoviedb.org/3/genre/movie/list?language=en"
  );

  const [checkedItems, setCheckedItems] = useState({});

  const handleChange = (id, isChecked) => {
    setCheckedItems((prev) => ({ ...prev, [id]: isChecked }));
    onSelect(id, isChecked);
  };
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
