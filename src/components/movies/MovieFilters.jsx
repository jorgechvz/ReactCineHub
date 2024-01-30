import { useState } from "react";
import GenreFilter from "./filters/GenreFilter";
import { SortFilter } from "./filters/SortFilter";
import YearFilter from "./filters/YearFilter";
import VoteAverage from "./filters/VoteAverageFilter";
import RuntimeFilter from "./filters/RuntimeFilter";

// Define the MovieFilter component
export default function MovieFilter({
  onSelectSortFilter,
  onSelectGenreFilter,
  onSelectDateFilter,
  onSelectVoteAverageFilter,
  onSelectRuntimeFilter,
}) {
  // Render the MovieFilter component
  return (
    <section className="space-y-10">
      <div className="shadow-xl px-2 py-3 shadow-secondary-foreground rounded-xl">
        <h2 className="ml-2 mb-2">
          <strong>Sort</strong>
        </h2>
        <SortFilter onSelect={onSelectSortFilter} />
      </div>
      <div className="shadow-xl px-2 py-3 shadow-secondary-foreground rounded-xl">
        <h2 className="ml-2 mb-2">
          <strong>Filters</strong>
        </h2>
        <div className="border-y-2 py-2">
          <h3 className="ml-2 mb-2">Genres</h3>
          <GenreFilter onSelect={onSelectGenreFilter} />
        </div>
        <div className="border-y-2 py-2">
          <h3 className="ml-2 mb-2">Year</h3>
          <YearFilter onSelect={onSelectDateFilter} />
        </div>
        <div className="border-y-2 py-2">
          <VoteAverage onSelect={onSelectVoteAverageFilter} />
        </div>
        <div className="border-y-2 py-2">
          <RuntimeFilter onSelect={onSelectRuntimeFilter} />
        </div>
      </div>
    </section>
  );
}
