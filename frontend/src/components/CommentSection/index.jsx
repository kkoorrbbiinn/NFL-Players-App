import { useState, useEffect } from "react"
import { postComment, getComments } from "../../../utils/backend"
import Comment from "../Comment"

export default function commentSection({ teamId }) {
    const [comments, setComments] = useState([])
    const [showCreateForm, setShowCreateForm] = useState(false)
    const [createFormData, setCreateFormData] = useState({
        name: '',
        content: ''
    })

    useEffect(() => {
        getComments(teamId)
            .then(comments => setComments(comments))
    }, [])



    function handleInputChange(event) {
        setCreateFormData({
            ...createFormData,
            [event.target.name]: event.target.value
        })
    }

    function toggleCreateForm() {
        setShowCreateForm(!showCreateForm)
    }


    function refreshComments() {
        getComments(teamId)
            .then(newCommentData => setComments(newCommentData))
    }


    function handleSubmit(event) {

        event.preventDefault()

        setCreateFormData({
            name: '',
            content: ''
        })

        setShowCreateForm(false)
        postComment({ ...createFormData, teamId: teamId })
            .then(() => refreshComments())
    }

    let commentElements = [<p key='0'>No comments yet.</p>]
    if (comments.length > 0) {
        commentElements = comments.map(comment => {
            return <Comment
                key={comment._id}
                data={comment}
                refreshComments={refreshComments}
            />
        })
    }

    let btnText = 'Create'
    if (showCreateForm) {
        btnText = 'Close'
    }

    return (
        <div>
            <h1>Team Review</h1>
            <button
                onClick={toggleCreateForm}>
                {btnText}
            </button>
            {
                showCreateForm && <form
                    onSubmit={handleSubmit}>
                    <input
                        name="name"
                        placeholder="Your name"
                        value={createFormData.name}
                        onChange={handleInputChange}
                    />
                    <br />
                    <textarea
                        name="content"
                        placeholder="Share your thoughts on this team!"
                        value={createFormData.content}
                        onChange={handleInputChange}
                    />
                    <button
                        type="submit">
                        Post
                    </button>
                </form>
            }
            {commentElements}
        </div>
    )
}