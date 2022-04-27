
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Register from '../pages/Register';
import About from '../pages/About';
import Login from '../pages/Login';
import NewBlog from '../pages/NewBlog';
import Profile from '../pages/Profile';
import UpdateBlog from '../pages/UpdateBlog';
import NotFound from '../pages/NotFound';
import Details from '../pages/Details';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';



const AppRouter = () => {
    return (
        <>
            <Router>
            <Navbar/>
                <Routes>
                    <Route path="/" element={<Dashboard/>}/>
                    <Route path="/About" element={<About/>}/>
                    <Route path="/Login" element={<Login/>}/>
                    <Route path="*" element={<NotFound/>}/>
                    <Route path="/Register" element={<Register/>}/>

                    <Route path="/Profile" element={<Profile/>}/>
                    <Route path="/NewBlog" element={<NewBlog/>}/>
                    <Route path="/Details/:id" element={<Details/>}/>
                    <Route path="/UpdateBlog/:id" element={<UpdateBlog/>}/>
                </Routes>
                <Footer/>
            </Router>
            
        </>
    )
}

export default AppRouter