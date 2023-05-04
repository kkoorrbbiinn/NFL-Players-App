import { useState } from 'react';
import axios from 'axios';

import { putComments, deleteComments } from '../../../utils/backend';

export function Comment({ playerId, commentId, commentText, refreshComments }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedCommentText, setEditedCommentText] = useState(commentText);

  const handleDelete = () => {
    console.log(`Deleting comment ${commentId} for player ${playerId}...`);
    deleteComments(commentId)
      .then(() => refreshComments())
      .catch(err => console.error(err));
  };
  
  const handleEditSave = () => {
    console.log(`Saving edited comment ${commentId} for player ${playerId}...`);
    setIsEditing(false);
    putComments({commentId: commentId, text: editedCommentText, playerId: playerId})
      .then(() => refreshComments())
      .catch(err => console.error(err));
  };

  const handleCancel = () => {
    setEditedCommentText(commentText);
    setIsEditing(false);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  return (
    <div>
      {isEditing ? (
        <>
          <textarea value={editedCommentText} onChange={(e) => setEditedCommentText(e.target.value)} />
          <button onClick={handleEditSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </>
      ) : (
        <>
          <h1>{commentText}</h1>
          <h2>{commentId}</h2>
          <button onClick={handleEditClick}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </>
      )}
    </div>
  );
}
