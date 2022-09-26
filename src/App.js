import Sidebar from './Components/Sidebar';
import Home from './Pages/Home';
import Favourite from './Pages/Favourite';
import Search from './Pages/Search';
import Playlist from './Pages/Playlist';
import { SongContext } from './Context/SongContext';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
function App() {
  return (

    <div className='container-fluid row'>
      <SongContext>
        <Router>
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fav" element={<Favourite />} />
            <Route path="/search" element={<Search />} />
            <Route path="/playlist/:id" element={<Playlist />} />
          </Routes>
        </Router>
      </SongContext>
    </div>
  );
}

export default App;
