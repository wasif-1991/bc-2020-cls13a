import React from 'react';
import useWebAnimations from "@wellyshen/use-web-animations";


const Services = () => {

    const cardColorFrames = [
        { transform: 'translateY(0%)', color: 'black',  border: '1px solid black'},
        { transform: 'translateY(0.2%)', color: 'red', border: '1px solid red'},
        { transform: 'translateY(0.2%)', color: 'blue', border: '1px solid blue'},
        { transform: 'translateY(0.2%)', color: 'green', border: '1px solid green'},
        { transform: 'translateY(0.2%)', color: 'purple', border: '1px solid purple'},
        { transform: 'translateY(0.3%)', color: 'brown', border: '1px solid brown'},
    ];

    const cardColorFrames2 = [
        { transform: 'translateY(0%)', color: 'white', border: '1px solid white'},
        { transform: 'translateY(0.2%)', color: 'lightblue', border: '1px solid lightblue'},
        { transform: 'translateY(0.2%)', color: 'green', border: '1px solid green'},
        { transform: 'translateY(0.3%)', color: 'yellow', border: '1px solid yellow'},
        { transform: 'translateY(0.2%)', color: 'orange', border: '1px solid orange'},
        { transform: 'translateY(0.2%)', color: 'brown', border: '1px solid brown'},
    ];
    
    const cardTiming = {
        duration: 8500,
        iterations: Infinity,
        direction: "alternate", // Run the animation forwards and then backwards
        easing: "ease-in-out", // Use a fancy timing function
    }

    const upCardMove = useWebAnimations({
        keyframes: cardColorFrames,
        timing: cardTiming,
    });

    const upCardMove2 = useWebAnimations({
        keyframes: cardColorFrames2,
        timing: cardTiming,
    });

    const upCardMove3 = useWebAnimations({
        keyframes: cardColorFrames2,
        timing: cardTiming,
    });

    const upCardMove4 = useWebAnimations({
        keyframes: cardColorFrames2,
        timing: cardTiming,
    });

    const upCardMove5 = useWebAnimations({
        keyframes: cardColorFrames2,
        timing: cardTiming,
    });

    const upCardMove6 = useWebAnimations({
        keyframes: cardColorFrames,
        timing: cardTiming,
    });

    return (
        <>
            <section id="header" className="d-flex align-items-center">
                <section className="container-fluid card-container">
                    <section className="row">
                        <section className="col-10 mx-auto">
                            <h2 className="servc-title">My Services</h2>
                            <section className="row row-bg">
                                <div class="card text-dark bg-warning mb-3">
                                    <div class="card-header"  ref={upCardMove.ref}>Web Designing</div>
                                    <div class="card-body">
                                        <h5 class="card-title">Creative Design</h5>
                                        <p class="card-text">I work day and nihgt to impress, making sure your brands looks the best in its category. My designing process is your thinking made visible with the creative touch.</p>
                                    </div>
                                </div>

                                <div class="card text-white bg-dark mb-3">
                                    <div class="card-header" ref={upCardMove2.ref}>Web Developement</div>
                                    <div class="card-body">
                                        <h5 class="card-title">Responsive Design</h5>
                                        <p class="card-text">As smartphone and tablet increase, so does the importance of mobile-friendly websites. At Upshot Firm, I specialize in responsive design. All my website creations are responsive.</p>
                                    </div>
                                </div>

                                <div class="card text-white bg-primary mb-3">
                                    <div class="card-header" ref={upCardMove3.ref}>Print Media</div>
                                    <div class="card-body">
                                        <h5 class="card-title">Business Printing</h5>
                                        <p class="card-text">Print Media is crucial to marketing plan such as brochures, flyers, etc. plays a vital role in the success of business. I can help you stand out in a crowd of standard and stale designs.</p>
                                    </div>
                                </div>

                                <div class="card text-white bg-success mb-3">
                                    <div class="card-header" ref={upCardMove4.ref}>Customer Contact</div>
                                    <div class="card-body">
                                        <h5 class="card-title">Excellent Support</h5>
                                        <p class="card-text">Using WhatsApp, and submit your query quickly. The WhatsApp is integrated with business, receive answers directly in your chat box and be able to respond in case it’s needed.</p>
                                    </div>
                                </div>

                                <div class="card text-white bg-danger mb-3">
                                    <div class="card-header" ref={upCardMove5.ref}>Customer Support</div>
                                    <div class="card-body">
                                        <h5 class="card-title">Swift Response</h5>
                                        <p class="card-text">My Company's Hosting Service offers 24×7 support. It will help keep your server running while you take care of your business! If you do not have managed services, it will still be here.</p>
                                    </div>
                                </div>

                                <div class="card text-dark bg-warning mb-3">
                                    <div class="card-header" ref={upCardMove6.ref}>Customer Experience</div>
                                    <div class="card-body">
                                        <h5 class="card-title">Designed with Love</h5>
                                        <p class="card-text">Why I get results that I get? I like to see my clients grow. I am no the type to charge you and forget about you, I will continuously work with you until and after your project has launched.</p>
                                    </div>
                                </div>
                            </section>
                        </section>
                    </section>
                </section>

            </section>
        </>
    );
}

export default Services;