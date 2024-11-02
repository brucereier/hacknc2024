// App.js
import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import Profile from './Profile';
import Settings from './Settings';
import About from './About';
import EventPage from './EventPage'; // Import the EventPage component
import { Box, Flex } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

function App() {

    return (
        <Router>
            <Box position="fixed" top="0" left="0" width="100vw">
                <Navbar />
            </Box>
            <Flex alignContent="center">
              <Box mt={7} width="90vw"> {/* Adjust margin to avoid overlap with Navbar */}
                  <Routes>
                      <Route path="/" element={<Navigate to="/home" replace />} />
                      <Route path="/home" element={<Home />} />
                      <Route path="/profile" element={<Profile />} />
                      <Route path="/settings" element={<Settings />} />
                      <Route path="/about" element={<About />} />
                      <Route path="/event/:id" element={<EventPage />} /> {/* Dynamic Event route */}
                  </Routes>
              </Box>
            </Flex>
        </Router>
    );
}

export default App
