import React from 'react';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import Roll from 'react-reveal/Roll';
import Rotate from 'react-reveal/Rotate';
import Finance from '../../../Images/Project/Finance Service.png';
import FoodNetwork from '../../../Images/Project/Food Network.png';
import Honda from '../../../Images/Project/Honda.png';
import TeslaCar from '../../../Images/Project/Tesla-Car.png';
import Travel from '../../../Images/Project/Travel.png';
const Work = () => {
    return (
        <div style={{ backgroundColor: 'black', color: 'white' }} className="p-1" id="projects">
            <h2 className="mb-5">My Recent Project</h2>
            <div className="container">
                <div className="row">

                    <Fade left>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <img className="img-fluid img-thumbnail" src={TeslaCar} alt="" />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="text-left">
                                <div className="mt-2 mb-4">
                                    <h2>Tesla-Car</h2>
                                    <h4>(MERN Stack Project)</h4>
                                </div>
                                <li>Implemented login system using firebase. Private Routes are ensured</li>
                                <li>Developed admin panel for users and admin where admin can do CRUD operations</li>
                                <li>Technology used: React js, Router, Firebase Authentication, Bootstrap, Node js, MongoDB, Express, Heroku, Netlify, and Stripe.</li>
                                <div className="mt-5">
                                    <button className="btn btn-success text-white mx-4">
                                        <a className="text-white" target="_blank" href="https://github.com/rezvirayhan2002/Tesla-Car">Client Link</a>
                                    </button>
                                    <button className="btn btn-success text-white mx-4">
                                        <a className="text-white" target="_blank" href="https://github.com/rezvirayhan2002/Tesla-Car-Server">Servier Link</a>
                                    </button>
                                    <button className="btn btn-success text-white mx-4">
                                        <a className="text-white" target="_blank" href="https://tesla-car-16994.web.app/">Live Link</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Fade>
                    <Fade right>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="text-left">
                                <div className="mt-2 mb-4 mt-5">
                                    <h2>Travel-Tour </h2>
                                    <h4>(MERN Stack Project)</h4>
                                </div>
                                <li>Integrated GHOST CMS API in the blog section for displaying blog post</li>
                                <li>Implemented login system using firebase. Private Routes are ensured.</li>
                                <li>Technology used: React js, Router, Firebase Authentication, Bootstrap, Node js, MongoDB, Express, Heroku, Netlify, Stripe.</li>
                                <div className="mt-5 mb-5">
                                    <button className="btn btn-success text-white mx-4">
                                        <a className="text-white" target="_blank" href="https://github.com/rezvirayhan2002/Travel-Tour">Client Link</a>
                                    </button>
                                    <button className="btn btn-success text-white mx-4">
                                        <a className="text-white" target="_blank" href="https://github.com/rezvirayhan2002/Travel-Tour-Server">Servier Link</a>
                                    </button>
                                    <button className="btn btn-success text-white mx-4">
                                        <a className="text-white" target="_blank" href="https://traveling-8e246.web.app/">Live Link</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 mt-5">
                            <img className="img-fluid img-thumbnail" src={Travel} alt="" />
                        </div>
                    </Fade>
                    <Rotate bottom left>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <img className="img-fluid img-thumbnail" src={Honda} alt="" />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="text-left">
                                <div className="mt-2 mb-4">
                                    <h2>Honda-CBR</h2>
                                    <h4>(Bootstrap Project Only Design)</h4>
                                </div>
                                <li>very simple project. But gorgeous project design.</li>
                                <li>it was the company's project. which has much more designs. But for some
                                    private reason that is not possible</li>
                                <li>Technology used: Bootstrap, Netlify, Stripe</li>
                                <div className="mt-5">
                                    <button className="btn btn-success text-white mx-5">
                                        <a className="text-white" target="_blank" href="https://github.com/rezvirayhan2002/Honda-CBR-">Client Link</a>
                                    </button>
                                    <button className="btn btn-success text-white mx-5">
                                        <a className="text-white" target="_blank" href="https://honda-d4d2f8.netlify.app/">Live Link</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Rotate>
                    <Bounce left>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="text-left">
                                <div className="mt-2 mb-4 mt-5">
                                    <h2>Finince Service </h2>
                                    <h4>(Custom Design Project Project Only Design)</h4>
                                </div>
                                <li>Secure your family’s future with Shade.</li>
                                <li>it was the company's project. which has much more designs. But for some
                                    private reason that is not possible</li>
                                <li>Technology used: Bootstrap, Netlify, Stripe</li>
                                <div className="mt-5 mb-5">
                                    <button className="btn btn-success text-white mx-5">
                                        <a className="text-white" target="_blank" href="https://github.com/rezvirayhan2002/finance_server">Client Link</a>
                                    </button>

                                    <button className="btn btn-success text-white mx-5">
                                        <a className="text-white" target="_blank" href="https://rezvirayhan2002.github.io/finance_server/">Live Link</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 mt-5">
                            <img className="img-fluid img-thumbnail" src={Finance} alt="" />
                        </div>
                    </Bounce>
                    <Roll left>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <img className="img-fluid img-thumbnail" src={FoodNetwork} alt="" />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="text-left">
                                <div className="mt-2 mb-4">
                                    <h2>Honda-CBR</h2>
                                    <h4>(Bootstrap Project Only Design)</h4>
                                </div>
                                <li>very simple project. But gorgeous project design.A healthy diet is essential for good health and nutrition. It protects you against many chronic noncommunicable diseases, </li>
                                <li>Imagine you don't need a diet because we provide healthy and delicious food for you!
                                    private reason that is not possible</li>
                                <li>Technology used: Bootstrap, Netlify, Stripe</li>
                                <div className="mt-5">
                                    <button className="btn btn-success text-white mx-5">
                                        <a className="text-white" target="_blank" href="https://github.com/rezvirayhan2002/programming_network">Client Link</a>
                                    </button>
                                    <button className="btn btn-success text-white mx-5">
                                        <a className="text-white" target="_blank" href="https://rezvirayhan2002.github.io/programming_network/">Live Link</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Roll>
                </div>
            </div>
        </div>
    );
};

export default Work;