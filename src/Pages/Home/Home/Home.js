import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Blog from '../Blog/Blog';
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
            <Blog></Blog>
            <Contact></Contact>
        </div>
    );
};

export default Home;