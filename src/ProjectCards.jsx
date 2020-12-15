import React from 'react';
import useWebAnimations from "@wellyshen/use-web-animations";

const ProjectCards = (props) => {

    const cardUpFrames = [
        { transform: 'translateY(0%)', border: '1px solid #ffd700'},
        { transform: 'translateY(1%)', border: '1px solid #ff0000'},
        { transform: 'translateY(2%)', border: '1px solid #00ff00'},
        { transform: 'translateY(3%)', border: '1px solid #0000ff'},
        { transform: 'translateY(4%)', border: '1px solid #ffd700'},
    ];
    
    const cardTiming = {
        duration: 2500,
        iterations: Infinity,
        direction: "alternate", // Run the animation forwards and then backwards
        easing: "ease-in-out", // Use a fancy timing function
    }

    const upCardMove = useWebAnimations({
        keyframes: cardUpFrames,
        timing: cardTiming,
    });


    return (
        <>
            <section className="col-md-4 col-10 mx-auto">
                <div id="cardanim" className="card" ref={upCardMove.ref}>
                    <a href="https://upshotfirm.com/portfolio/" rel="noreferrer" target="_blank" className="proj-links">
                        <img src={props.imgTitle} className="card-img-top" alt={props.imgTitle} />
                        <div className="card-body">
                            <h5 className="card-title card-title font-weight-bold proj-link">{props.compName}</h5>
                            <p className="card-text">{props.compDesc}</p>
                        </div>
                    </a>
                </div>
            </section>
        </>
    );
}

export default ProjectCards;