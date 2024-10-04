import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import MovieDetails from './pages/MovieDetails';
import Catalog from './pages/Catalog'; // Importando o Catalog
import Navbar from './components/Navbar'; // Certifique-se de que você importou a Navbar

function App() {
  return (
    <Router>
      <Navbar /> {/* A barra de navegação deve estar aqui */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Catalog />} />
        <Route path="/about" element={<About />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
