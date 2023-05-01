import React, { useEffect, useState } from 'react';
import { postComments, getComments } from '../../../utils/backend';
import { useParams } from 'react-router-dom';

function CommentSection() {
    const { playerId } = useParams();

    const [comment, setComment] = useState('');

    const [comments, setComments ] = useState([])

    const [showCreateForm, setShowCreateForm ] = useState(false)

    useEffect(() => {
        getComments(playerId)
            .then(comments => setComments(comments))
    }, [])

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };

    function refreshComments() {
        getComments(playerId)
            .then(newCommentData => setComments(newCommentData))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setShowCreateForm(false)
        postComments({ comment: comment, playerId: playerId })
            .then(() => refreshComments())
    };

    let commentElements = [<p key='0'>No Comments Yet.</p>]
    if (comments.length > 0) {
        commentElements = comments.map(comment => {
            return <Comment
                key={comment._id}
                data={comment}
                refreshComments={refreshComments}
            />
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor={`comment-${playerId}`}>Add a comment:</label>
            <input
                type='text'
                id={`comment-${playerId}`}
                value={comment}
                onChange={handleCommentChange}
            />
            <button type='submit'>Submit</button>
        </form>
    );
}

export default CommentSection;
