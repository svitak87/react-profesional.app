import React, { useContext, useEffect } from 'react'
import { useFetch } from '../hooks/useFetch';
import { useDebounce } from '../hooks/useDebounce';
import { SearchContext } from '../context/SearchContext';

import { Cards } from './Cards.jsx'
import { Spinner } from './Spinner';

import './SearchBoard.css'

export const SearchBoard = () => {
    const { search, setSearch } = useContext(SearchContext)
    const debounceValue = useDebounce(search, 500)

    const url = debounceValue
        ? `https://rickandmortyapi.com/api/character?name=${debounceValue}`
        : null;

    const rta = useFetch(url)
    const { data, isLoading, error, refetch } = rta

    return (
        <>
            <form action="" className="form-container" onSubmit={(e) => e.preventDefault()}>
                <input
                    id="search"
                    className="input-search"
                    type="search"
                    role="search"
                    aria-label="Search"
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    placeholder="Busca un personaje"
                />
                <button
                    className='navbar-toggler'
                    disabled={!url}
                    type="button"
                    onClick={refetch}
                >
                    Recargar
                </button>
            </form>
            {isLoading && <Spinner />}
            <Cards data={data} />
            {error && <p>{error}</p>}
        </>
    )
}
