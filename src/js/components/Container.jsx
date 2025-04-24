import React from "react";
import Jumbotron from "./Jumbotron";
import Card from "./Card";

const Container = () => {
    return (

        <div className="container-md">
            <div className="row">

                <div className="col-12">
                    <Jumbotron />
                </div>
                <div className="col-3">
                    <Card
                        cardTitle="Welcome to react"
                        cardText="React is the most popular rendering library in the world"
                        buttonUrl="https://reactjs.org/"
                        buttonLabel="Go to the official website"
                        imageSource="https://www.charlottestories.com/wp-content/uploads/2021/01/Depositphotos_101850786_s-2019.jpg"
                    />

                </div>
                <div className="col-3">
                    <Card />
                </div>
                <div className="col-3">
                    <Card />
                </div>
                <div className="col-3">
                    <Card />
                </div>
            </div>
        </div>

    )
};


export default Container