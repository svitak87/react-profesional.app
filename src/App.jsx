import { useState, useEffect } from 'react';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { getUsers } from './services/api.js'

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchingUsers = async () => {
      setLoading(true)
      setError(null)

      try {
        const response = await getUsers()
        setData(response)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }
    fetchingUsers()
  }, [])

  if (loading) return <p>Cargando perfil...</p>;
  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;

  return (
    <>
      <Header />
      {data &&
        data.map((user) => (
          <ul key={user.id}>
            <li>{user.name}</li>
          </ul>
        ))
      }
      <Footer />
    </>
  )
}

export default App
