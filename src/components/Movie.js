import React from 'react';
import ReviewForm from './ReviewForm';
import Accordion from 'react-bootstrap/Accordion';



export default class Movie extends React.Component {
    render() {
        return (
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header className="accHeader">{this.props.title}</Accordion.Header>
                        <Accordion.Body className="accBody">
                            <img src={this.props.image}
                                alt="movie image"
                                className="center"
                                id="imageSrc"
                            />
                            <p>{this.props.director}</p>
                            <p>{this.props.genre}</p>
                            <p>{this.props.ageRating}</p>
                            <p>{this.props.runTime}</p>
                            <p className="synopsis">{this.props.description}</p>
                            <ReviewForm />
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                );
}
                
}
