
import React from 'react';

// creating the review content within the div

const Review = ({ author, content }) => {
    return (
        <div className="review">
            <h4>{author}</h4>
            <p>{content}</p>
        </div>
    );
};

export default Review;
