import { Link } from 'react-router-dom';

const nfcTeams = [
    {id: '11', image: 'https://static.www.nfl.com/image/private/f_auto/league/u9fltoslqdsyao8cpm0k', name: 'Arizona Cardinals'},
    {id: '8', image: 'https://static.www.nfl.com/image/private/f_auto/league/d8m7hzpsbrl6pnqht8op', name: 'Atlanta Falcons'},
    {id: '19', image: 'https://static.www.nfl.com/image/private/f_auto/league/ervfzgrqdpnc7lh5gqwq', name: 'Carolina Panthers'},
    {id: '16', image: 'https://static.www.nfl.com/image/private/f_auto/league/wb3ehpt7xhkstyaxwjl1', name: 'Chicago Bears'},
    {id: '29', image: 'https://static.www.nfl.com/image/private/f_auto/league/ieid8hoygzdlmzo0tnf6', name: 'Dallas Cowboys'},
    {id: '7', image: 'https://res.cloudinary.com/nflleague/image/private/f_auto/league/ocvxwnapdvwevupe4tpr', name: 'Detroit Lions'},
    {id: '15', image: 'https://res.cloudinary.com/nflleague/image/private/f_auto/league/gppfvr7n8gljgjaqux2x', name: 'Green Bay Packers'},
    {id: '31', image: 'https://static.www.nfl.com/image/private/f_auto/league/ayvwcmluj2ohkdlbiegi', name: 'Los Angeles Rams'},
    {id: '32', image: 'https://res.cloudinary.com/nflleague/image/private/f_auto/league/teguylrnqqmfcwxvcmmz', name: 'Minnesota Vikings'},
    {id: '27', image: 'https://static.www.nfl.com/image/private/f_auto/league/grhjkahghjkk17v43hdx', name: 'New Orleans Saints'},
    {id: '4', image: 'https://res.cloudinary.com/nflleague/image/private/f_auto/league/t6mhdmgizi6qhndh8b9p', name: 'New York Giants'},
    {id: '12', image: 'https://res.cloudinary.com/nflleague/image/private/f_auto/league/puhrqgj71gobgdkdo6uq', name: 'Philadelphia Eagles'},
    {id: '14', image: 'https://res.cloudinary.com/nflleague/image/private/f_auto/league/dxibuyxbk0b9ua5ih9hn', name: 'San Fransisco 49ers'},
    {id: '23', image: 'https://res.cloudinary.com/nflleague/image/private/f_auto/league/gcytzwpjdzbpwnwxincg', name: 'Seattle Seahawks'},
    {id: '24', image: 'https://static.www.nfl.com/image/private/f_auto/league/v8uqiualryypwqgvwcih', name: 'Tampa Bay Buccaneeers'},
    {id: '18', image: 'https://static.www.nfl.com/image/private/f_auto/league/xymxwrxtyj9fhaemhdyd', name: 'Washington Commanders'},
];

const afcTeams = [
    {id: '5', image: 'https://res.cloudinary.com/nflleague/image/private/f_auto/league/ucsdijmddsqcj1i9tddd', name: 'Baltimore Ravens'},
    {id: '20', image: 'https://res.cloudinary.com/nflleague/image/private/f_auto/league/giphcy6ie9mxbnldntsf', name: 'Buffalo Bills'},
    {id: '10', image: 'https://res.cloudinary.com/nflleague/image/private/f_auto/league/okxpteoliyayufypqalq', name: 'Cincinnati Bengals'},
    {id: '9', image: 'https://static.www.nfl.com/image/private/f_auto/league/fgbn8acp4opvyxk13dcy', name: 'Cleveland Browns'},
    {id: '28', image: 'https://res.cloudinary.com/nflleague/image/private/f_auto/league/t0p7m5cjdjy18rnzzqbx', name: 'Denver Broncos'},
    {id: '26', image: 'https://static.www.nfl.com/image/private/f_auto/league/bpx88i8nw4nnabuq0oob', name: 'Houston Texans'},
    {id: '21', image: 'https://static.www.nfl.com/image/private/f_auto/league/ketwqeuschqzjsllbid5', name: 'Indianapolis Colts'},
    {id: '2', image: 'https://res.cloudinary.com/nflleague/image/private/f_auto/league/qycbib6ivrm9dqaexryk', name: 'Jacksonville Jaguars'},
    {id: '17', image: 'https://res.cloudinary.com/nflleague/image/private/f_auto/league/ujshjqvmnxce8m4obmvs', name: 'Kansas City Chiefs'},
    {id: '1', image: 'https://static.www.nfl.com/image/private/f_auto/league/gzcojbzcyjgubgyb6xf2', name: 'Las Vegas Raiders'},
    {id: '30', image: 'https://static.www.nfl.com/image/private/f_auto/league/dhfidtn8jrumakbogeu4', name: 'Los Angeles Chargers'},
    {id: '25', image: 'https://res.cloudinary.com/nflleague/image/private/f_auto/league/lits6p8ycthy9to70bnt', name: 'Miami Dolphins'},
    {id: '3', image: 'https://res.cloudinary.com/nflleague/image/private/f_auto/league/moyfxx3dq5pio4aiftnc', name: 'New England Patriots'},
    {id: '13', image: 'https://static.www.nfl.com/image/private/f_auto/league/ekijosiae96gektbo4iw', name: 'New York Jets'},
    {id: '22', image: 'https://res.cloudinary.com/nflleague/image/private/f_auto/league/xujg9t3t4u5nmjgr54wx', name: 'Pittsburgh Steelers'},
    {id: '6', image: 'https://static.www.nfl.com/image/private/f_auto/league/pln44vuzugjgipyidsre', name: 'Tennessee Titans'},
];

function HomePage({setTeamData}) {
    return (
        <>
            <div className='Container'>
                <div className='columnContainer'>
                    <div className='column'>
                        <h1 className='divisionTitle'>NFC Teams</h1>
                        {nfcTeams.map((team) => { return (
                            <Link key={team.id} to={`/TeamDetails/${team.name}`} 
                            onClick={() => {setTeamData(team)}}>
                                <div className={team.name}>
                                    <img className='cardImg' src={team.image} alt={team.name} />
                                    <div className='teamName'>
                                        <h3>{team.name}</h3>
                                        <p>View Players</p>
                                    </div>
                                </div>
                            </Link>
                            )
                        })}
                    </div>
                    <div className='column'>
                        <h1 className='divisionTitle'>AFC Teams</h1>
                        {afcTeams.map((team) => { return (
                            <Link key={team.id} to={`/TeamDetails/${team.name}`} 
                            onClick={() => {setTeamData(team)}}>
                                <div className={team.name}>
                                    <img className='cardImg' src={team.image} alt={team.name} />
                                    <div className='teamName'>
                                        <h3>{team.name}</h3>
                                        <p>View Players</p>
                                    </div>
                                </div>
                            </Link>
                            ) 
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}
export default HomePage;