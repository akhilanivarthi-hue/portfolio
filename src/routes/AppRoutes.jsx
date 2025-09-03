import React from 'react';
import { Routes, Route, Router } from 'react-router-dom';
import HomePage from '../Home-page/HomePage';
import AboutPage from '../About-Page/AboutPage';
import Wifire from '../Wifire/Wifire.js';
import Sony from '../Sony/Sony.js';
import Personal from '../Personal-Projects/personalProjects.js';
import Garden from '../GardenProject/garden.js';

const AppRoutes = () => (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />  
            <Route path="/wifire" element={<Wifire />} /> 
            <Route path="/sony" element={<Sony />} />  
            <Route path="/work-experience" element={<Personal />} />
            <Route path="/garden" element={<Garden />} />
        </Routes>
    
);

export default AppRoutes;