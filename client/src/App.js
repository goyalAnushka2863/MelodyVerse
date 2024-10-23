import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import Dashboard from './Dashboard'
import MelodyVerse from './MelodyVerse'
import PrivateRoute from './PrivateRoute'; // added to avoid going directly to the dashboard route

const App = ()=>{
    return (
        <div>
            <BrowserRouter>
                <Routes>
                <Route path="/" element={<MelodyVerse/>} />
                <Route path="/login" element={<Login/>} />
				<Route path="/register" element={<Register/>} />
                <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default App;