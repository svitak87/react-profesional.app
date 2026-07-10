import { useEffect, useState, useCallback } from "react";

const cache = {};

export const useFetch = (url) => {
    const [state, setState] = useState({
        data: null,
        isLoading: false,
        error: null,
    });


    // Esta función SIEMPRE consulta la API
    const fetchData = useCallback(async () => {
        if (!url) return;

        setState(prev => ({
            ...prev,
            isLoading: true,
            error: null,
        }));

        try {
            const response = await fetch(url);

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
            setState({
                data: null,
                isLoading: false,
                error: error.message,
            });
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

    }, [url, fetchData]);


    // Fuerza una consulta nueva
    const refetch = () => {
        if (!url) return;
        delete cache[url];
    };


    return {
        ...state,
        refetch
    };
};