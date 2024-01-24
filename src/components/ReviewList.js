import React, { Component } from 'react';

// ReviewList: a container inside of a Movie that houses Review components.

export default class ReviewList extends Component {

    render() {
        return (
            <div className='card'>
                <div className='card-body'>
                    <p>"{this.props.review}"
                    </p>


                </div>
            </div>
        )
    }
}