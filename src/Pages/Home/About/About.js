import React from 'react';
import Rezvi from '../../../Images/About-Rezvi.jpg';
import Slide from 'react-reveal/Slide';
const About = () => {
    return (
        <div style={{ backgroundColor: '#3f3f3f', color: 'white' }} className="p-1" id="aboutMe">

            <Slide top>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-6 col-sm-12 text-left">
                            <h2>Biography</h2>
                            <p>Born and Barisal in Bangladesh. <b>Currently working Freelancer & Fiverr</b> working Of The <b>Web Design $ Development</b> </p>
                            <p>Also, Studied in the <b>Computer Technology</b> Infra Polytecnic Institue. Kasipur Barisal. (BTEB).</p>
                            <p>Especially when I learn Programming, and Web Design Development. I have had to learn by competing a lot. I like programming very much.</p>
                            <p>Finished <b>Junior School Certificate (JSC). & Secondary School Certificate (SSC)</b> Form Govt. Technical School & Collage Jhalakathi.</p>
                            <p>Alumni of Khayerhat Fazlul Hoq High School. (2007-2015).</p>
                            <p>I'm Md. Abu Rayhan. I am currently studying Diploma in Computer Technology. I like
                                programming very much. I am currently working on Web Design and Development. I am
                                a professional MERN Stack Web Devloper</p>
                            <p>Fluent in <b>Emglish & Bangal</b></p>
                            <p>Car and Tech enthusiast.
                            </p>
                        </div>
                        <div className="col-lg-5 col-md-6 col-sm-12">
                            <img className="img-fluid img-thumbnail" src={Rezvi} alt="" />
                        </div>
                    </div>
                </div>
            </Slide>

        </div>
    );
};

export default About;