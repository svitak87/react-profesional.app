import React, { useState, useEffect } from 'react'
import { useFetch } from '../hooks/useFetch';

export const SearchBoard = () => {
    const [page, setPage] = useState(1);
    const rta = useFetch(`https://rickandmortyapi.com/api/character?page=${page}`)
    const {data, status, error} = rta

    return (
        <>
            <button onClick={() => setPage(1)}>Página 1</button>
            <button onClick={() => setPage(2)}>Página 2</button>
            <p>{error}</p>
        </>
    )
}
