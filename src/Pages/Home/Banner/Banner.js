import React from 'react';
import Typed from "react-typed";
import './Banner.css';
const Banner = () => {
    return (
        <div>
            <div style={{color: 'white' }} className="banner">
               <div className="row">
                    <div className="col-lg-8 col-md-6 col-sm-12 text-center">
                    <h1 className="p-2">Web Devlpment & Website Promitions</h1>
                    <h1>I'm <span className="name">Rezvi Rayhan</span></h1>
                    <Typed
                        className="typed-text"
                        strings={["Front-End Developer", "React developer", "Programmer"]}
                        typeSpeed={40}
                        backSpeed={60}
                        loop
                    >
                    </Typed>
                    <br />
                    <button className="btn btn-success">
                        <a className="text-white" href="https://drive.google.com/file/d/18lFe13gITzIDf09dPj7Vb0D8Prk70KzW/view?usp=sharing">
                            </a>My Resume
                            </button>
                </div>
               
               </div>
            </div>
        </div>
    );
};

export default Banner;