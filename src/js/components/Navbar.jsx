import React from "react";
import PropType from "prop-types";

const Navbar = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div id="navContainer" className="container-fluid">
                <a id="navTittle" className="navbar-brand">{props.navTittle}</a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item d-lg-none dropdown">
                            <a
                                className="nav-link dropdown-toggle optionButton mt-2"
                                href="#"
                                id="mobileDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Menú
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="mobileDropdown">
                                <li><a className="dropdown-item" href="#">{props.navHome}</a></li>
                                <li><a className="dropdown-item" href="#">{props.navFeatures}</a></li>
                                <li><a className="dropdown-item" href="#">{props.navPricing}</a></li>
                            </ul>
                        </li>

                        {/* Enlaces visibles solo en pantallas grandes */}
                        <li className="nav-item d-none d-lg-block">
                            <a className="nav-link optionButton" href="#">{props.navHome}</a>
                        </li>
                        <li className="nav-item d-none d-lg-block">
                            <a className="nav-link optionButton" href="#">{props.navFeatures}</a>
                        </li>
                        <li className="nav-item d-none d-lg-block">
                            <a className="nav-link optionButton" href="#">{props.navPricing}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

Navbar.propTypes = {
    navTittle: PropType.string,
    navHome: PropType.string,
    navFeatures: PropType.string,
    navPricing: PropType.string,
};

export default Navbar;
