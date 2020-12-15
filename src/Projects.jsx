import React from 'react';
import ProjData from './ProjData';
import ProjectCards from './ProjectCards';


const Projects = () => {
    return(
        <>
            <section className="my-5">
                <h2 className="text-center"> My Projects </h2>
            </section>

            <section className="container-fluid mb-5">
                <section className="row">
                    <section className="col-10 mx-auto">
                        <section className="row gy-3">
                            {ProjData.map((val, ind) => {
                                    return <ProjectCards key={ind}
                                    imgTitle={val.imgtitle}
                                    imgWeb={val.imgweb}
                                    compName={val.compname}
                                    compDesc={val.description}
                                    />
                                })}
                        </section>
                    </section>
                </section>
            </section>
        </>
    );
}

export default Projects;