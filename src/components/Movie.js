import React from 'react';
import ReviewForm from './ReviewForm';
import Accordion from 'react-bootstrap/Accordion';



export default class Movie extends React.Component {
    render() {
        return (
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header className="accHeader">{this.props.title}</Accordion.Header>
                        <Accordion.Body className="accBody" id="imgFormatting">
                            <img src={this.props.image}
                                alt="movie image"
                                className="center"
                                id="imageSrc"
                            />
                            <p id="addSpacing"><strong>Director:</strong>{this.props.director}</p>
                            <p><strong>Genre:</strong>{this.props.genre}</p>
                            <p><strong>Movie</strong>{this.props.ageRating}</p>
                            <p><strong>Run Time:</strong>{this.props.runTime}</p>
                            <p className="synopsis">{this.props.description}</p>
                            <ReviewForm />
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                );
}
                
}
