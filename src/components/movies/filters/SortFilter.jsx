import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";

const sortOptions = [
  {
    value: "popularity.asc",
    label: "Popularity Ascending",
  },
  {
    value: "popularity.desc",
    label: "Popularity Descending",
  },
  {
    value: "revenue.asc",
    label: "Revenue Ascending",
  },
  {
    value: "revenue.desc",
    label: "Revenue Descending",
  },
  {
    value: "primary_release_date.asc",
    label: "Release Date Ascending",
  },
  {
    value: "primary_release_date.desc",
    label: "Release Date Descending",
  },
  {
    value: "vote_average.asc",
    label: "Vote Average Ascending",
  },
  {
    value: "vote_average.desc",
    label: "Vote Average Descending",
  },
  {
    value: "vote_count.asc",
    label: "Vote Count Ascending",
  },
  {
    value: "vote_count.desc",
    label: "Vote Count Descending",
  },
];

export function SortFilter({ onSelect }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[250px] justify-between"
        >
          {value
            ? sortOptions.find((options) => options.value === value)?.label
            : "Sort results by..."}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[250px] p-0">
        <Command>
          <CommandInput placeholder="Sort results by..." className="h-9" />
          <CommandEmpty>No sort option found.</CommandEmpty>
          <CommandGroup>
            {sortOptions.map((option) => (
              <CommandItem
                key={option.value}
                value={option.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                  onSelect(currentValue);
                }}
              >
                {option.label}
                <CheckIcon
                  className={cn(
                    "ml-auto h-4 w-4",
                    value === option.value ? "opacity-100" : "opacity-0"
                  )}
                />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
