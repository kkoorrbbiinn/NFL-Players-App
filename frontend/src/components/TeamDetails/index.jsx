import axios from 'axios';
import { useEffect, useState } from 'react';
import './styles.css';

export default function TeamDetails({teamData}) {
    const [players, setPlayers] = useState([])

    const getPlayers = ( async(teamId) => {
        const options = {
            method: 'GET',
            url: 'https://api-american-football.p.rapidapi.com/players',
            params: {team:teamId, season: '2022'},
            headers: {
            'content-type': 'application/octet-stream',
            'X-RapidAPI-Key': 'ea05c29397msha8e4d715a7b5225p1fbaccjsne88bb3b42c32',
            'X-RapidAPI-Host': 'api-american-football.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            setPlayers(response.data.response)
        } catch (error) {
            console.error(error);
        }
    })

    useEffect(() => {
        getPlayers(teamData.id)
    }, [])

    return (
        <>
            <h1 className={teamData.name}>{teamData.name}</h1>
            <div className='playerCard'>
                {players.map((player) => { return (
                    <div className={'playerCardDetails'}>
                        <img src={player.image} />
                        <p>Name: {player.name}</p>
                        <p>Age: {player.age}</p>
                        <p>Height: {player.height}</p>
                        <p>Weight: {player.weight}</p>
                        <p>Position: {player.position}</p>
                        <p>Experience: {player.experience} years</p>
                        <p>Click Player Card to Comment</p>
                    </div>
                    )
                })}
            </div>
        </>
    )
}
