import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Work from '../Work/Work';
import Navbar from './../Navbar/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <About></About>
            <Work></Work>
            <Contact></Contact>
        </div>
    );
};

export default Home;