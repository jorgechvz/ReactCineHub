import { cn } from "@/lib/utils";
import { Slider } from "@nextui-org/react";
import { useState } from "react";

// Define the RuntimeFilter component
export default function RuntimeFilter({ onSelect }) {
  // Define the runtime state
  const [runtime, setRuntime] = useState({
    from: null,
    to: null,
  });

  // Render the RuntimeFilter component
  return (
    <Slider
      size="lg"
      label="Runtime (min)"
      maxValue={360}
      defaultValue={[0, 360]}
      step={15}
      showSteps={true} 
      onChange={(value) => {
        const range = {
          from: value[0],
          to: value[1],
        };
        setRuntime(range);
        onSelect(range);
      }}
      classNames={{
        base: "max-w-md",
        filler: "bg-gradient-to-r from-primary-500 to-secondary-400",
        labelWrapper: "mb-2",
        label: "font-medium text-default-700 text-medium",
        value: "font-medium text-default-500 text-small",
        thumb: [
          "transition-size",
          "bg-gradient-to-r from-secondary-400 to-primary-500",
          "data-[dragging=true]:shadow-lg data-[dragging=true]:shadow-black/20",
          "data-[dragging=true]:w-7 data-[dragging=true]:h-7 data-[dragging=true]:after:h-6 data-[dragging=true]:after:w-6",
        ],
        step: "data-[in-range=true]:bg-black/30 dark:data-[in-range=true]:bg-white/50",
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
