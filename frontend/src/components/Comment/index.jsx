import React, { useState } from 'react';

function Comment({ playerName }) {
  const [comment, setComment] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Submitted comment: "${comment}" for player: ${playerName}`);
    setComment('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="comment">Comment:</label>
      <input
        type="text"
        id="comment"
        value={comment}
        onChange={(event) => setComment(event.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Comment;
