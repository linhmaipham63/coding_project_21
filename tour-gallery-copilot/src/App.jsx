import { useState, useEffect } from 'react';
import Gallery from './components/Gallery';
import './App.css';

// Fetch tours from https://course-api.com/react-tours-project using useEffect
// Store in state: tours, loading, error

function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTours = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://www.course-api.com/react-tours-project');
      if (!response.ok) {
        throw new Error('Failed to fetch tours');
      }
      const data = await response.json();
      setTours(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  const removeTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  if (tours.length === 0) {
    return (
      <div>
        <h1>No Tours Left</h1>
        <button onClick={fetchTours}>Refresh</button>
      </div>
    );
  }

  return (
    <div>
      <h1>Our Tours</h1>
      <Gallery tours={tours} removeTour={removeTour} />
    </div>
  );
}

export default App;