// src/Review.js
import React from 'react';

const Review = ({ author, content }) => {
    return (
        <div className="review">
            <h4>{author}</h4>
            <p>{content}</p>
        </div>
    );
};

export default Review;
