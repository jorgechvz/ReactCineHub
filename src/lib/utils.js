import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Tailwind CSS classnames
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// Format date to "Jan 1, 2021"
export function formateDate(date) {
  return new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

// Api urls for the fetch's url and title
export const apiUrls = {
  now_playing: {
    url: "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
    title: "Now Playing",
  },
  popular: {
    url: "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    title: "What's Popular",
  },
  top_rated: {
    url: "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
    title: "Top Rated",
  },
  upcoming: {
    url: "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
    title: "Upcoming",
  },
};
