import { cn } from "@/lib/utils";
import { Slider } from "@nextui-org/react";
import { useState } from "react";

// Define the RuntimeFilter component
export default function VoteAverage({ onSelect }) {
  // Define voteAverage state
  const [voteAverage, setVoteAverage] = useState({
    from: null,
    to: null,
  });

  // Render the RuntimeFilter component
  return (
    <Slider
      size="lg"
      label="Vote Average"
      maxValue={10}
      defaultValue={[0, 10]}
      step={0.1}
      onChange={(value) => {
        const range = {
          from: value[0],
          to: value[1],
        };
        setVoteAverage(range);
        onSelect(range);
      }}
      classNames={{
        base: "max-w-md gap-3",
        filler:
          "bg-gradient-to-r from-pink-300 to-cyan-300 dark:from-pink-600 dark:to-cyan-800",
      }}
      renderThumb={({ index, ...props }) => (
        <div
          {...props}
          className="group p-1 top-1/2 bg-background border-small border-default-200 dark:border-default-400/50 shadow-medium rounded-full cursor-grab data-[dragging=true]:cursor-grabbing"
        >
          <span
            className={cn(
              "transition-transform bg-gradient-to-br shadow-small rounded-full w-5 h-5 block group-data-[dragging=true]:scale-80",
              index === 0
                ? "from-pink-200 to-pink-500 dark:from-pink-400 dark:to-pink-600" // first thumb
                : "from-cyan-200 to-cyan-600 dark:from-cyan-600 dark:to-cyan-800" // second thumb
            )}
          />
        </div>
      )}
    />
  );
}
