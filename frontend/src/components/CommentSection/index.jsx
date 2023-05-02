import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { postComments, getComments } from '../../../utils/backend';
import { useParams } from 'react-router-dom';
import {Comment as CommentCard} from '../Comment';

function CommentSection() {
    const { playerId } = useParams();

    const [comment, setComment] = useState('');

    const [commentsList, setCommentsList ] = useState([])

    const [showCreateForm, setShowCreateForm ] = useState(false)

    const [player, setPlayer] = useState({});

    useEffect(() => {
        loadPlayer(playerId);
    }, [])

    useEffect(() => {
        if(player){
            loadComments(player.id)
        }
    }, [player])

    const loadPlayer = async (id) => {        
        const options = {
            method: 'GET',
            url: 'https://api-american-football.p.rapidapi.com/players',
            params: {id: id},
            headers: {
            'content-type': 'application/octet-stream',
            'X-RapidAPI-Key': 'ea05c29397msha8e4d715a7b5225p1fbaccjsne88bb3b42c32',
            'X-RapidAPI-Host': 'api-american-football.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            setPlayer(response.data.response[0])
        } catch (error) {
            console.error(error);
        }
    }

    const loadComments = (id) => {
        getComments(id)
            .then(comments => setCommentsList(comments.filter(comment => comment.playerId === playerId)))
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setShowCreateForm(false)
        postComments({ text: comment, playerId: playerId })
            .then(() => loadComments(playerId))
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor={`comment-${playerId}`}>Add a comment:</label>
                <input
                    type='text'
                    id={`comment-${playerId}`}
                    value={comment}
                    onChange={(event) => setComment(event.target.value)}
                />
                <button type='submit'>Submit</button>
            </form>
            {
                commentsList.length <= 0 
                ? 
                <p key='0'>No Comments Yet.</p> 
                :
                commentsList.map(comment => {
                    return <CommentCard
                        key={comment._id}
                        playerId={playerId}
                        commentId={comment._id}
                        commentText={comment.text}
                        refreshComments={() => loadComments(playerId)}
                    />
                })
            }         
        </div>
    );
}

export default CommentSection;