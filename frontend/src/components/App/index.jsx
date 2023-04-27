import { Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getTeams } from "../../../utils/api";
import './styles.css'

const nfcTeams = [
    {image: 'https://static.www.nfl.com/image/private/f_auto/league/u9fltoslqdsyao8cpm0k', name: 'Arizona Cardinals'},
    {image: 'https://static.www.nfl.com/image/private/f_auto/league/d8m7hzpsbrl6pnqht8op', name: 'Atlanta Falcons'},
    {image: 'https://static.www.nfl.com/image/private/f_auto/league/ervfzgrqdpnc7lh5gqwq', name: 'Carolina Panthers'},
    {image: 'https://static.www.nfl.com/image/private/f_auto/league/wb3ehpt7xhkstyaxwjl1', name: 'Chicago Bears'},
    {image: 'https://static.www.nfl.com/image/private/f_auto/league/ieid8hoygzdlmzo0tnf6', name: 'Dallas Cowboys'},
    {image: 'https://res.cloudinary.com/nflleague/image/private/f_auto/league/ocvxwnapdvwevupe4tpr', name: 'Detroit Lions'},
    {image: 'https://res.cloudinary.com/nflleague/image/private/f_auto/league/gppfvr7n8gljgjaqux2x', name: 'Green Bay Packers'},
    {image: 'https://static.www.nfl.com/image/private/f_auto/league/ayvwcmluj2ohkdlbiegi', name: 'Los Angeles Rams'},
    {image: 'https://res.cloudinary.com/nflleague/image/private/f_auto/league/teguylrnqqmfcwxvcmmz', name: 'Minnesota Vikings'},
    {image: 'https://static.www.nfl.com/image/private/f_auto/league/grhjkahghjkk17v43hdx', name: 'New Orleans Saints'},
    {image: 'https://res.cloudinary.com/nflleague/image/private/f_auto/league/t6mhdmgizi6qhndh8b9p', name: 'New York Giants'},
    {image: 'https://res.cloudinary.com/nflleague/image/private/f_auto/league/puhrqgj71gobgdkdo6uq', name: 'Philadelphia Eagles'},
    {image: 'https://res.cloudinary.com/nflleague/image/private/f_auto/league/dxibuyxbk0b9ua5ih9hn', name: 'San Fransisco 49ers'},
    {image: 'https://res.cloudinary.com/nflleague/image/private/f_auto/league/gcytzwpjdzbpwnwxincg', name: 'Seattle Seahawks'},
    {image: 'https://static.www.nfl.com/image/private/f_auto/league/v8uqiualryypwqgvwcih', name: 'Tampa Bay Buccaneeers'},
    {image: 'https://static.www.nfl.com/image/private/f_auto/league/xymxwrxtyj9fhaemhdyd', name: 'Washington Commanders'},
];

const afcTeams = [
    {image: 'https://res.cloudinary.com/nflleague/image/private/f_auto/league/ucsdijmddsqcj1i9tddd', name: 'Baltimore Ravens'},
    {image: 'https://res.cloudinary.com/nflleague/image/private/f_auto/league/giphcy6ie9mxbnldntsf', name: 'Buffalo Bills'},
    {image: 'https://res.cloudinary.com/nflleague/image/private/f_auto/league/okxpteoliyayufypqalq', name: 'Cincinnati Bengals'},
    {image: 'https://static.www.nfl.com/image/private/f_auto/league/fgbn8acp4opvyxk13dcy', name: 'Cleveland Browns'},
    {image: 'https://res.cloudinary.com/nflleague/image/private/f_auto/league/t0p7m5cjdjy18rnzzqbx', name: 'Denver Broncos'},
    {image: 'https://static.www.nfl.com/image/private/f_auto/league/bpx88i8nw4nnabuq0oob', name: 'Houston Texans'},
    {image: 'https://static.www.nfl.com/image/private/f_auto/league/ketwqeuschqzjsllbid5', name: 'Indianapolis Colts'},
    {image: 'https://res.cloudinary.com/nflleague/image/private/f_auto/league/qycbib6ivrm9dqaexryk', name: 'Jacksonville Jaguars'},
    {image: 'https://res.cloudinary.com/nflleague/image/private/f_auto/league/ujshjqvmnxce8m4obmvs', name: 'Kansas City Chiefs'},
    {image: 'https://static.www.nfl.com/image/private/f_auto/league/gzcojbzcyjgubgyb6xf2', name: 'Oakland Raiders'},
    {image: 'https://static.www.nfl.com/image/private/f_auto/league/dhfidtn8jrumakbogeu4', name: 'Los Angeles Chargers'},
    {image: 'https://res.cloudinary.com/nflleague/image/private/f_auto/league/lits6p8ycthy9to70bnt', name: 'Miami Dolphins'},
    {image: 'https://res.cloudinary.com/nflleague/image/private/f_auto/league/moyfxx3dq5pio4aiftnc', name: 'New England Patriots'},
    {image: 'https://static.www.nfl.com/image/private/f_auto/league/ekijosiae96gektbo4iw', name: 'New York Jets'},
    {image: 'https://res.cloudinary.com/nflleague/image/private/f_auto/league/xujg9t3t4u5nmjgr54wx', name: 'Pittsburgh Steelers'},
    {image: 'https://static.www.nfl.com/image/private/f_auto/league/pln44vuzugjgipyidsre', name: 'Tennessee Titans'},
];

function App() {
    // const [ teams, setTeams ] = useState([])

    // useEffect(() => {
    //     getTeams('https://api-american-football.p.rapidapi.com/teams')
    //         .then(res => {
    //             setTeams(res.data)
    //         })
    // }, [])

    return (
        <div className='Container'>
            <h1>Home Page</h1>
            <div className='nfcContainer'>
                <h1>NFC Teams</h1>
                {nfcTeams.map((team) => { return (
                    <div className={team.name}>
                        <img className='cardImg' src={team.image} alt={team.name} />
                        <div className='teamName'>
                            <p>{team.name}</p>
                        </div>
                    </div>
                    )
                })}
            </div>
            <div className='afcContainer'>
                <h1>AFC Teams</h1>
                {afcTeams.map((team) => { return (
                    <div className={team.name}>
                        <img className='cardImg' src={team.image} alt={team.name} />
                        <p>{team.name}</p>
                    </div>
                    ) 
                })}
            </div>
        </div>
    )
}

export default App;