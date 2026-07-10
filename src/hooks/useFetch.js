import { useEffect, useState } from "react";

const cache = {};

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    status: "idle",
    error: null,
  });

  useEffect(() => {
    if (!url) return;

    // Si existe en caché
    if (cache[url]) {
      setState({
        data: cache[url],
        status: "success",
        error: null,
      });
      return;
    }

    // Limpiar estado anterior
    setState({
      data: null,
      status: "loading",
      error: null,
    });

    // Crear el controlador
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error("Error en la petición");
        }

        const data = await response.json();

        cache[url] = data;

        setState({
          data,
          status: "success",
          error: null,
        });
      } catch (error) {
        // Ignorar si la petición fue cancelada
        if (error.name === "AbortError") return;

        setState({
          data: null,
          status: "error",
          error: error.message,
        });
      }
    };

    fetchData();

    // Cleanup
    return () => {
      controller.abort();
    };
  }, [url]);

  return state;
};