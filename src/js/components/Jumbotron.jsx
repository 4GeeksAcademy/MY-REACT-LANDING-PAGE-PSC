import React from "react";
import PropType from "prop-types";

const Jumbotron = (props) => {
    return (
        <div id="background" className="p-5 mb-4 bg-light rounded-3">
        <div id="contStyle" className="container-fluid py-5">
          <h1 id="headerText"className="display-5 fw-bold">{props.primaryText}</h1>
          <p id="parText" className="col-md-8 fs-4">{props.secondaryText}</p>
          <button id="buttonJumbo" src={props.buttonUrl} onClick={props.buttonUrl} className="btn btn-primary btn-lg" type="button">{props.buttonLabel}</button>
        </div>
      </div>
    )
};

Jumbotron.propTypes = {
  primaryText: PropType.string,
  secondaryText: PropType.string,
  buttonUrl: PropType.string,
  buttonLabel: PropType.string,
  
};

export default Jumbotron