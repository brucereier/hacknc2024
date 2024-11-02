import './App.css'
import Home from './Home'
import Navbar from './Navbar'
import {Box} from '@chakra-ui/react'

function App() {

    return (
        <Box position="fixed" top="0" left="0" width="100vw">
            <Navbar/>
            <Home/>
        </Box>
    )
}

export default App
