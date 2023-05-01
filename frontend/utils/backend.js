import axios from "axios";

export async function getComments(teamId) {
    const { data } = await axios.get(`/api/comments/team/${teamId}`)
    return data
}

export async function postComments(comment) {
    const { data } = await axios.post('http://localhost:3000/api/comments', comment)
    return data
}

export async function putComments(comment, id) {
    const { data } = await axios.put(`/api/comments/${id}`, comment)
    return data
}

export async function deleteComments(teamId) {
    const { data } = await axios.delete(`/api/comments/${id}`)
    return data
}