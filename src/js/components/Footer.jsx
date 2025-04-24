import React from "react";
import PropType from "prop-types";


const Footer = (props) => {
    return (
        <>
            <div className="container">
                <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                    <div className="col-md-4 d-flex align-items-center">
                        <span className="mb-3 mb-md-0 text-body-secondary footerText">{props.footerText}</span>
                    </div>
                </footer>
            </div>
        </>

    );
};

Footer.propTypes = {
  footerText: PropType.string,
    
};
export default Footer