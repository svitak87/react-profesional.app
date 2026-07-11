import React, { useContext } from "react";
import { SearchContext } from '../context/SearchContext';
import icon from '../assets/R&M-icon.png'

import './Header.css'

export const Header = () => {
  const { search, setSearch } = useContext(SearchContext);
  return (
    <header>
      <nav className="navbar navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="https://rickandmortyapi.com/" target="_blank">
            <img src={icon} className="icon" />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="offcanvas offcanvas-end text-bg-dark"
            tabIndex="-1"
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5
                className="offcanvas-title"
                id="offcanvasDarkNavbarLabel"
              >
                Dark offcanvas
              </h5>

              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>

            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="https://rickandmortyapi.com/documentation"
                    target="_blank"
                  >
                    Docs
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link active"
                    href="https://rickandmortyapi.com/about"
                    target="_blank"
                    >
                    About
                  </a>
                </li>
              </ul>

              <form className="d-flex mt-3" role="search" onSubmit={(e) => e.preventDefault()}>
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />

                <button
                  className="btn btn-success"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};