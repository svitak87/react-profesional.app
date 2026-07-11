import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SearchBoard } from './components/SearchBoard.jsx';
import { Title } from './components/Title.jsx';

import { SearchProvider } from './context/SearchContext';

import './App.css';
function App() {

  return (
    <SearchProvider>
      <div className="app-container">
        <Header />
        <Title />
        <main className="app-main">
          <SearchBoard />
        </main>

        <Footer />
      </div>
    </SearchProvider>
  )
}

export default App
