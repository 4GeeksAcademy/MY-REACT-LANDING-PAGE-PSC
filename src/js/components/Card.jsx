import React from "react";

const card = () => {
    return (
        <>
        <div className="card">
            <img src={imageSource} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.cardTitle}</h5>
                <p className="card-text">{props.cardText}</p>
                <a href={props.buttonUrl} className="btn btn-primary">{props.buttonLabel}</a>
            </div>
        </div>
        </>

    );
};


card.propTypes = {
	cardTitle: PropType.string,
	cardText: PropType.string,
	buttonUrl: PropType.string,
	buttonLabel: PropType.string,
    imageSource: PropType.string,

};

ReactDOM.render(
    <Card
      cardTitle="Welcome to react"
      cardText="React is the most popular rendering library in the world"
      buttonUrl="https://reactjs.org/"
      buttonLabel="Go to the official website"
      imageSource= "https://media.deloitte.com/is/image/deloitte/Deloitte-ES-Tecnolog%C3%ADa-React-Native-4x1:Mobile?$Responsive$&fmt=webp&fit=stretch,1&dpr=on,2.625"
    />, document.querySelector('#Card')
  );


export default Card