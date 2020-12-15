import React from 'react';
import{ NavLink } from 'react-router-dom';

const NavBar = () => {
    return(
        <>
            <div className="container-fluid nav_bg">
                <section className="row">
                    <section className="col-10 mx-auto">

                        <nav className="navbar navbar-expand-lg navbar-light">
                            <div className="container-fluid">
                                <NavLink exact className="navbar-brand" to="/">Wasif Ahmed</NavLink>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <NavLink activeClassName="menu_active"
                                                exact className="nav-link active" aria-current="page" to="/">Home</NavLink>
                                        </li>

                                        <li className="nav-item">
                                            <NavLink activeClassName="menu_active"
                                                exact className="nav-link" to="/my-services">My Services</NavLink>
                                        </li>

                                        <li className="nav-item">
                                            <NavLink activeClassName="menu_active"
                                                exact className="nav-link" to="/my-projects">My Projects</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>

                    </section>
                </section>
            </div>
        </>
    );
}

export default NavBar;