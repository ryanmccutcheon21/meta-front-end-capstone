import './App.css';
import { Route, Routes } from 'react-router-dom';
import { ChakraProvider, extendBaseTheme } from '@chakra-ui/react'
import Home from './pages/Home';
import Login from './pages/Login';
import About from './pages/About';
import Menu from './pages/Menu';
import Reservations from './pages/Reservations';
import Order from './pages/Order';

// Extend Chakra theme to include custom colors, fonts, etc.
const colors = {
  brand: {
    primary1: '#495E57',
    primary2: '#F4CE14',
    secondary1: '#EE9972',
    secondary2: '#FBDABB',
    highlight1: '#EDEFEE',
    highlight2: '#333333',
  }
}

const theme = extendBaseTheme({
  colors,
})

function App() {
  return (
    <ChakraProvider theme={theme}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/order" element={<Order />} />
        </Routes>
      </div>
    </ChakraProvider>
  );
}

export default App;