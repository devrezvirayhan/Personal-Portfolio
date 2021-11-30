import React from 'react';
import Typed from "react-typed";
import './Banner.css';
const Banner = () => {
    return (
        <div>
            <div style={{color: 'white'}} className="banner">
               <div className="row">
                    <div className="col-lg-12 col-md-6 col-sm-12 text-center">
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
                   <a className="text-white"target="_blank" href="https://doc-00-2k-docs.googleusercontent.com/docs/securesc/m7duc9suqmsos0k4igoh8mvbuj1iim0m/9cpf4rvitmv1dvlv8qqikhqtjl7as3r1/1638280575000/11285269262551470395/11285269262551470395/18lFe13gITzIDf09dPj7Vb0D8Prk70KzW?e=download&authuser=0&nonce=7mq7b1o9k618u&user=11285269262551470395&hash=o6c509eet0peu1n18mohj6fibnhabpbi">Download Resume</a>
                   </button>
                </div>
               
               </div>
            </div>
        </div>
    );
};

export default Banner;