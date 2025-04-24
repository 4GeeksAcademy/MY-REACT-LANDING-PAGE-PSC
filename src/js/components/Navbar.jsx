import React from "react";
import PropType from "prop-types"


const Navbar = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div id="navContainer" className="container-fluid">
                <a id="navTittle" className="navbar-brand">{props.navTittle}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active optionButton" aria-current="page" href="#">{props.navHome}</a>
                        <a className="nav-link optionButton" href="#">{props.navFeatures}</a>
                        <a className="nav-link optionButton" href="#">{props.navPricing}</a>
                    </div>
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
export default Navbar