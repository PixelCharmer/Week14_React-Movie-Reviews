import React from 'react';
import ReviewList from './ReviewList';
import StarRating from './StarRating';

// a constructor initializing a state object with 3 objects
// review will hold the text of the given review
// reviewArray will store the submitted reviews
// starRating will store the rating given 

export default class ReviewForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            review: '',
            reviewArray: [],
            StarRating: 0
        }
    }

    // event handlers that update the super props 
    handleChange = (e) => {
        this.setState({ review: e.target.value });
    }


    handleStarsChange = (newStars) => {
        this.setState({ StarRating: newStars });
    }


    handleSubmit = (e) => {
        e.preventDefault();

        let newReview = {
            review: this.state.review,
            starRating: this.state.StarRating
        }

        this.setState({
            reviewArray: [...this.state.reviewArray, newReview],
            review: '',

        });

    }

    // Conditional rendering is used to display either a message stating "No Reviews" or the list of reviews based on the length of the reviewArray
    // followed by a div containing the review form
    render() {
        return (
            <div id="reviewing">
                {this.state.reviewArray.length === 0 ? (
                    <div>
                        <h4> No Reviews </h4>
                    </div>
                ) : (
                    <div>
                        <h4>Reviews</h4>
                        {this.state.reviewArray.map((review, index) => (
                            <ReviewList
                                review={review.review}
                                stars={review.starRating}
                                key={index}
                            />
                        ))}
                    </div>
                )}

                <div>
                    <div className='card' id="reviewing">
                        <div className='card-body'>
                            <div className='row'>
                                <h4>Leave a Review!</h4>
                                <div className='col-4'></div>
                                <div className='col-4'>
                                    <form onSubmit={this.handleSubmit}>
                                        <div className='form-group'>
                                            <textarea
                                                type='textarea'
                                                id='review'
                                                className='form-control'
                                                rows={4}
                                                placeholder='Your review!'
                                                value={this.state.review}
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                        <div className='form-group'>
                                            <StarRating
                                                StarRating={this.state.StarRating}
                                                onChange={this.handleStarsChange}
                                            />
                                        </div>
                                        <button id='submit-review' type='submit' className='btn btn-primary'>Submit Review</button>
                                    </form>
                                </div>
                                <div className='col-4'></div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}