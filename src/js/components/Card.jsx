import React from "react";
import PropType from "prop-types"

const Card = (props) => {
    return (
        <>
        <div id="cardContent" className="card">
            <img id="cardImage" src={props.imageSource} className="card-img-top" alt="..." />
            <div id="cardInside" className="card-body">
                <h5 className="card-title">{props.cardTitle}</h5>
                <p className="card-text">{props.cardText}</p>
                <a href={props.buttonUrl} className="btn btn-primary cardButton">{props.buttonLabel}</a>
            </div>
        </div>
        </>

    );
};


Card.propTypes = {
	CardTitle: PropType.string,
	CardText: PropType.string,
	buttonUrl: PropType.string,
	buttonLabel: PropType.string,
    imageSource: PropType.string,

};




export default Card