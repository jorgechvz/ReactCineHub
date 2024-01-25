import { useEffect, useState } from "react";
const apiKey = import.meta.env.VITE_TDMB_API_KEY;

export const useGetFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    loading: true,
    hasError: null,
  });

  const getFetch = async () => {
    try {
      setState({
        ...state,
        loading: true,
      });
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      };
      const response = await fetch(url, options);
      const data = await response.json();
      setState({
        data: data,
        loading: false,
        hasError: null,
      });
    } catch (error) {
      setState({
        data: null,
        loading: false,
        hasError: error,
      });
    }
  };

  useEffect(() => {
    getFetch();
  }, [url]);

  return { data: state.data, loading: state.loading, hasError: state.hasError };
};

export const usePostFetch = (url, body) => {
  const [state, setState] = useState({
    data: null,
    loading: true,
    hasError: null,
  });

  const postFetch = async () => {
    try {
      setState({
        ...state,
        loading: true,
      });
      const options = {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json,charset=utf-8",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify(body),
      };
      const response = await fetch(url, options);
      const data = await response.json();
      v;
      setState({
        data: data.results,
        loading: false,
        hasError: null,
      });
    } catch (error) {
      setState({
        data: null,
        loading: false,
        hasError: error,
      });
    }
  };

  useEffect(() => {
    postFetch();
  }, [url]);

  return { data: state.data, loading: state.loading, hasError: state.hasError };
};

export const useDeleteFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    loading: true,
    hasError: null,
  });

  const deleteFetch = async () => {
    try {
      setState({
        ...state,
        loading: true,
      });
      const options = {
        method: "DELETE",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      };
      const response = await fetch(url, options);
      const data = await response.json();
      setState({
        data: data.results,
        loading: false,
        hasError: null,
      });
    } catch (error) {
      setState({
        data: null,
        loading: false,
        hasError: error,
      });
    }
  };

  useEffect(() => {
    deleteFetch();
  }, [url]);

  return { data: state.data, loading: state.loading, hasError: state.hasError };
};
