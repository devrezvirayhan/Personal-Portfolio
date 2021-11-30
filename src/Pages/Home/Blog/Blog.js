import React from 'react';
import Fade from 'react-reveal/Fade';
import design from '../../../Images/Blog/Design.jpg';
import devlopment from '../../../Images/Blog/Devlopment.jpg';
import react from '../../../Images/Blog/React.jpg';
const Blog = () => {
    return (
        <div style={{ background: 'black', color: 'white' }}>

            <div className="container py-5">
                <h2 className="">My Blog</h2>
                <div className="row mt-5">

                    <Fade left>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div class="card">
                                <img class="card-img-top img-fluid img-thumbnail" src={design} />
                                <div style={{ color: 'black' }} class="card-body">
                                    <h4 class="card-title">Web Design</h4>
                                    <p class="card-text">Every day design fans submit incredible industry stories to our sister-site, Webdesigner News. Our colleagues sift through it, selecting the very best stories from the design, UX, tech, and development worlds and posting them live on the site.</p>
                                </div>
                            </div>
                        </div>
                    </Fade>
                    <Fade bottom>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div class="card">
                                <img class="card-img-top img-fluid img-thumbnail" src={react} />
                                <div style={{ color: 'black' }} class="card-body">
                                    <h4 class="card-title">React</h4>
                                    <p class="card-text">Lee works at Vercel and write about Next.js, MDX, Node, and React. His most popular posts are about design systems and design, as well as how to work with Yarn Workspaces and Lerna.Redux. He writes about UI engineering, software.</p>
                                </div>
                            </div>
                        </div>
                    </Fade>
                    <Fade right big>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div class="card">
                                <img class="card-img-top img-fluid img-thumbnail" src={devlopment} />
                                <div style={{ color: 'black' }} class="card-body">
                                    <h4 class="card-title">Web Devlopment</h4>
                                    <p class="card-text">Are you a professional web developer or a newbie? Did you go to a coding school, or are you self-taught? Whatever your case may be, unfortunately, you’re not done learning – nor will you ever be! With the sheer amount of programming languages. your career can be tough</p>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>


        </div>
    );
};

export default Blog;