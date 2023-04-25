import { Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getTeams } from "../../../utils/api";
import './styles.css'

function App() {
    const [ teams, setTeams ] = useState([])

    useEffect(() => {
        getTeams('https://api-american-football.p.rapidapi.com/teams')
            .then(res => {
                setTeams(res.data)
            })
    }, [])

    return (
        <h1>Home Page</h1>
    )
}

export default App;