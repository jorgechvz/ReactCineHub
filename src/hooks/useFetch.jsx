import { useEffect, useState } from "react";
// Define the API key from the .env file
const apiKey = import.meta.env.VITE_TDMB_API_KEY;

// Define the useGetFetch hook
export const useGetFetch = (url) => {
  // Define the state for the data, loading and error
  const [state, setState] = useState({
    data: null,
    loading: true,
    hasError: null,
  });

  // Define the getFetch function
  const getFetch = async () => {
    try {
      // Set the loading state to true
      setState({
        ...state,
        loading: true,
      });
      // Define the options for the fetch request
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      };
      // Fetch the data
      const response = await fetch(url, options);
      const data = await response.json();
      // Set the data, loading and error states
      setState({
        data: data,
        loading: false,
        hasError: null,
      });
    } catch (error) {
      // Set the data, loading and error states
      setState({
        data: null,
        loading: false,
        hasError: error,
      });
    }
  };
  // Call the getFetch function when the url changes
  useEffect(() => {
    getFetch();
  }, [url]);
  // Return the data, loading and error states
  return { data: state.data, loading: state.loading, hasError: state.hasError };
};

// Define the usePostFetch hook
export const usePostFetch = (url, body) => {
  // Define the state for the data, loading and error
  const [state, setState] = useState({
    data: null,
    loading: true,
    hasError: null,
  });
  // Define the postFetch function
  const postFetch = async () => {
    try {
      // Set the loading state to true
      setState({
        ...state,
        loading: true,
      });
      // Define the options for the fetch request
      const options = {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json,charset=utf-8",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify(body),
      };
      // Fetch the data
      const response = await fetch(url, options);
      const data = await response.json();
      // Set the data, loading and error states
      setState({
        data: data.results,
        loading: false,
        hasError: null,
      });
    } catch (error) {
      // Set the data, loading and error states
      setState({
        data: null,
        loading: false,
        hasError: error,
      });
    }
  };
  // Call the postFetch function when the url changes
  useEffect(() => {
    postFetch();
  }, [url]);
  // Return the data, loading and error states
  return { data: state.data, loading: state.loading, hasError: state.hasError };
};
// Define the useDeleteFetch hook
export const useDeleteFetch = (url) => {
  // Define the state for the data, loading and error
  const [state, setState] = useState({
    data: null,
    loading: true,
    hasError: null,
  });
  // Define the deleteFetch function
  const deleteFetch = async () => {
    try {
      // Set the loading state to true
      setState({
        ...state,
        loading: true,
      });
      // Define the options for the fetch request
      const options = {
        method: "DELETE",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      };
      // Fetch the data
      const response = await fetch(url, options);
      const data = await response.json();
      // Set the data, loading and error states
      setState({
        data: data.results,
        loading: false,
        hasError: null,
      });
    } catch (error) {
      // Set the data, loading and error states
      setState({
        data: null,
        loading: false,
        hasError: error,
      });
    }
  };
  // Call the deleteFetch function when the url changes
  useEffect(() => {
    deleteFetch();
  }, [url]);
  // Return the data, loading and error states
  return { data: state.data, loading: state.loading, hasError: state.hasError };
};
