import React, { useState } from 'react';

function CommentSection({player}) {
    const [comment, setComment] = useState('');

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setComment('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor={`comment-${player.id}`}>Add a comment:</label>
            <input
                type='text'
                id={`comment-${player.id}`}
                value={comment}
                onChange={handleCommentChange}
            />
            <button type='submit'>Submit</button>
        </form>
    );
}

export default CommentSection;
