import axios from "axios";

export async function getComments(playerId) {
    const { data } = await axios.get(`/api/comments/${playerId}`)
    return data
}

export async function postComments(comment) {
    const { data } = await axios.post('/api/comments', comment)
    return data
}

export async function putComments(comment) {
    const { data } = await axios.put(`/api/comments`, comment)
    return data
}

export async function deleteComments(commentId) {
    const { data } = await axios.delete(`/api/comments/${commentId}`)
    return data
}