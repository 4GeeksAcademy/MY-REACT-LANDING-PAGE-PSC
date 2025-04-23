import React from "react";
import Jumbotron from "./Jumbotron";
import Card from "./Card";

const Container = () => {
    return (

        <div className="container-md">
            <div className="col-12">
                <Jumbotron />
            </div>
            <div className="col-3">
                <Card />
            </div>
        </div>

    )
};

export default Container