import React from 'react';
import { NavLink } from 'react-router-dom';
import useWebAnimations from "@wellyshen/use-web-animations";
import image from '../src/images/My-Work.png'
import image2 from '../src/images/My-Work-Shadow.png'

const Home = () => {

    
    const imgUpFrames = [
        { transform: 'translateY(0%)'},
        { transform: 'translateY(4%)'},
    ];

    const imgDownFrames = [
        { transform: 'translateY(4%)'},
        { transform: 'translateY(-4%)'},
    ];
    
    const imgTiming = {
        duration: 2000,
        iterations: Infinity,
        direction: "alternate", // Run the animation forwards and then backwards
        easing: "ease-in-out", // Use a fancy timing function
    }

    const upImgMove = useWebAnimations({
        keyframes: imgUpFrames,
        timing: imgTiming,
    });

    const downImgMove = useWebAnimations({
        keyframes: imgDownFrames,
        timing: imgTiming,
    });

    return(
        <>
            <section id="header" className="d-flex align-items-center">
                <section className="container-fluid ">
                    <section className="row">
                        <section className="col-10 mx-auto">
                            <section className="row pt-lg-2">
                                <section className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h1>
                                    <strong className="brand-name">"Managing Partner for Asia" </strong>
                                         in Upshot Firm.
                                    </h1>

                                    <h2 className="my-3">
                                    I am a proud member of a close team of creatives, designers and developers who work together to create beautiful, engaging digital experiences.
                                    </h2>

                                    <section className="mt-3">
                                        <NavLink to="/my-projects" className="btn btn-get-started">
                                            See My Projects
                                        </NavLink>
                                    </section>                                    
                                </section>
                                
                                <section className="col-lg-6 pt-lg-4 order-1 order-lg-2 header-img">
                                    <img className="img-fluid animated" src={image} ref={upImgMove.ref} alt="Shadow Image" />
                                    <img className="img-fluid animated" src={image2} ref={downImgMove.ref} alt="Shadow Image" />
                                </section>
                            </section>
                        </section>
                    </section>
                </section>

            </section>
        </>
    );
}

export default Home;