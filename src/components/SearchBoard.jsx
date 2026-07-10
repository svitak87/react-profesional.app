import React, { useState, useEffect } from 'react'
import { useFetch } from '../hooks/useFetch';
import { useDebounce } from '../hooks/useDebounce';

import { Spinner } from './Spinner';

export const SearchBoard = () => {
    const [searchValue, setSearchValue] = useState("");
    const debounceValue = useDebounce(searchValue, 500)

    const url = debounceValue
        ? `https://rickandmortyapi.com/api/character?name=${debounceValue}`
        : null;

    const rta = useFetch(url)
    const { data, isLoading, error, refetch } = rta

    return (
        <>
            <form action="">
                <label htmlFor="">Busca un personaje</label>
                <input
                    type="text"
                    value={searchValue}
                    onChange={(event) => setSearchValue(event.target.value)}
                />
                <button
                    disabled={!url}
                    type="button"
                    onClick={refetch}
                >
                    Recargar
                </button>
            </form>
            {isLoading && <Spinner />}
            {error && <p>{error}</p>}
            {data && (
                <ul>
                    {data.results.map((character) => (
                        <li key={character.id}>
                            <p>{character.name}</p>
                            <img src={character.image} alt={character.name} />
                        </li>
                    ))}
                </ul>
            )}
        </>
    )
}
