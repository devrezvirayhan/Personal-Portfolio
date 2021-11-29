import React from 'react';
import Fade from 'react-reveal/Fade';
const Contact = () => {
    return (
        <div id="contact">
            <Fade left>
                <div style={{ backgroundColor: 'black', color: 'white' }}>
                    <div className="container">
                        <h2 className="p-2">Plase Fill Out This Form to Contact Us</h2>
                        <div className="row bg-dark p-3">
                            <div className="col-lg-7 col-md-6 col-sm-12">
                                <form>
                                    <div class="form-group text-left">
                                        <label for="exampleInputEmail1"><h6 className="">Email address</h6></label>
                                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value="Email" placeholder="Enter email" />
                                    </div>
                                    <div class="form-group text-left">
                                        <label for="exampleInputEmail1"><h6 className="">Your Name</h6></label>
                                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value="Name" placeholder="Your Name" />
                                    </div>
                                    <div class="form-group text-left">
                                        <label for="exampleFormControlTextarea1">Your Massage</label>
                                        <textarea class="form-control" id="exampleFormControlTextarea1" value="Massage" rows="4"></textarea>
                                    </div>
                                    <button type="submit" value="Semd" class="btn btn-primary">Send</button>
                                </form>
                            </div>
                            <div className="col-lg-5 col-md-6 col-sm-12">
                                <div class="card" >
                                    <div class="card-body text-dark">
                                        <h4>Get In Touch</h4>
                                        <p class="card-text">Especially when I learn programming, and web design development. I have had to learn by competing a lot.</p>
                                        <h4>Email</h4>
                                        <h5>rezvirayhan2002@gmail.com</h5>
                                        <h6>
                                            <a href="tel:01727979966">Call: 01727979966</a>
                                        </h6>
                                        <div className="mt-5">
                                            <a href="https://www.linkedin.com/in/rezvi-rayhan-3943531b3/" class="card-link">Linkedin</a>
                                            <a href="https://web.facebook.com/sksagor.rayhan/" class="card-link">Facebook</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
            </Fade>

            <footer style={{ backgroundColor: 'black', color: 'white' }} className=" p-3">
                <p>Powered By Rezvi Rayhan</p>
            </footer>
        </div>
    );
};

export default Contact;