import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'
import { Navbar, Footer, Home, ExerciseDetails } from "./components"

const App = () => {
    return (
        <BrowserRouter>
            <Box width="400px" sx={{ width: { xl: "1488px" }, m: "auto" }}>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/exercises/:id' element={<ExerciseDetails />} />
                </Routes>
                <Footer />
            </Box>
        </BrowserRouter>
    )
}

export default App
