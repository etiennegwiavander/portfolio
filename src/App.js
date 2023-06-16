import './App.css';
import { Route, Routes} from 'react-router-dom'
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <Box className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </Box>
  );
}

export default App;
