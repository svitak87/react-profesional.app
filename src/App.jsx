import { useState, useEffect } from 'react';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SearchBoard } from './components/SearchBoard.jsx';
import { getUsers } from './services/api.js'

function App() {
 
  return (
    <>
      <Header />
        <SearchBoard  />
      <Footer />
    </>
  )
}

export default App
