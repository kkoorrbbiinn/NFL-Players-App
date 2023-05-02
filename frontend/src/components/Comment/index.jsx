// import { useState } from "react"
// import { updateComment, deleteComment } from "../../../utils/backend"

export function Comment({playerId, commentId, commentText, refreshComments}) { 
    // const [showEditForm, setShowEditForm] = useState(false)
    // const [editFormData, setEditFormData] = useState({
    //     name: data.name,
    //     content: data.content
    // })

    // function handleInputChange(event) {
    //     setEditFormData({
    //         ...editFormData,
    //         [event.target.name]: event.target.value
    //     })
    // }

    // function handleSubmit(event) {
    //     event.preventDefault()
    //     setShowEditForm(false)
    //     updateComment(editFormData, data._id)
    //         .then(() => refreshComments())
    // }

    // function handleDelete() {
    //     deleteComment(data._id)
    //         .then(() => refreshComments())
    // }

    // let commentElement = <div>
    //     <p>{data.name}</p>
    //     <p>{data.content}</p>
    //     <div>
    //         <button onClick={() => { setShowEditForm(true) }}>
    //             Edit
    //         </button>
    //         <button onClick={handleDelete}>
    //             Delete
    //         </button>
    //     </div>
    // </div>

    // if (showEditForm) {
    //     commentElement = <form onSubmit={handleSubmit}>
    //         <input
    //             name="name"
    //             placeholder="Your name"
    //             value={editFormData.name}
    //             onChange={handleInputChange}
    //         />
    //         <br />
    //         <textarea
    //             name="content"
    //             placeholder="Share your thoughts!"
    //             value={editFormData.content}
    //             onChange={handleInputChange}
    //         />
    //         <div>
    //             <button onClick={() => { setShowEditForm(false) }}>
    //                 Close
    //             </button>
    //             <button type="submit">
    //                 Post
    //             </button>
    //         </div>
    //     </form>
    // }

    // return commentElement
    return (
        <div>
            <h1>{commentText}</h1>
            <h2>{commentId}</h2>
        </div>
    );
}