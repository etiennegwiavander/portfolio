import './App.css';
import { Route, Routes} from 'react-router-dom'
import { Box } from '@mui/material';
import Navbar from './components/Navbar';

function App() {
  return (
    <Box className="App">
      <Navbar/>
     
    </Box>
  );
}

export default App;
