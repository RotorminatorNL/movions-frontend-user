import React, {Component} from "react";
import "../assets/css/Card.css";
import MovieImage from "../assets/images/the_expendables.jpg";

export default class Movie extends Component {
    render() {
        return (
            <div className="card-element" id={this.props.id}>
                <div className="card-content">
                    <h1>{this.props.data.name}</h1>
                    <div className="image-container">
                        <img src={MovieImage} alt="movie icon"/>
                    </div>
                    <p>{this.props.data.description}</p>
                </div>
            </div>
        );
    }
}
