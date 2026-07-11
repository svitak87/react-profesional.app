import { useEffect, useState, useCallback, useRef } from "react";

const cache = {};

export const useFetch = (url) => {
    const [state, setState] = useState({
        data: null,
        isLoading: false,
        error: null,
    });
    const controllerRef = useRef(null);


    // Esta función SIEMPRE consulta la API
    const fetchData = useCallback(async () => {
        if (!url) return;

        if (controllerRef.current) {
            controllerRef.current.abort();
        }

        const controller = new AbortController();
        controllerRef.current = controller;

        setState(prev => ({
            ...prev,
            isLoading: true,
            error: null,
        }));

        try {
            const response = await fetch(url, { signal: controller.signal });

            if (!response.ok || response.status === 404) {
                throw new Error("No hay resultado para tu búsqueda");
            }

            const data = await response.json();

            // Guardamos la respuesta nueva
            cache[url] = data;

            setState({
                data,
                isLoading: false,
                error: null,
            });

        } catch (error) {
            if (error.name === "AbortError") {
                return;
            }

            setState({
                data: null,
                isLoading: false,
                error: error.message,
            });
        } finally {
            if (controllerRef.current === controller) {
                controllerRef.current = null;
            }
        }

    }, [url]);


    // Carga automática con caché
    useEffect(() => {
        if (!url) {
            setState({
                data: null,
                isLoading: false,
                error: null,
            });
            return;
        }

        if (cache[url]) {
            setState({
                data: cache[url],
                isLoading: false,
                error: null,
            });

            return;
        }

        fetchData();

        return () => {
            if (controllerRef.current) {
                controllerRef.current.abort();
                controllerRef.current = null;
            }
        };
    }, [url, fetchData]);


    // Fuerza una consulta nueva
    const refetch = () => {
        if (!url) return;
        delete cache[url];
        fetchData();
    };


    return {
        ...state,
        refetch
    };
};