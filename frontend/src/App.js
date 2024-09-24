import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Homepage from './pages/Homepage';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
