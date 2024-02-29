import { useEffect, useState } from "react";
import { list } from "../persistence/list";






export default function Leaderboard() {

    const [leaderboard, setLeaderboard] = useState(list)

    useEffect(() => {
        setLeaderboard(list)
    }, [list])

    const handleDelete = () => {
    
    }

    return( 
    <ul id='leaderboard-container'>
        {leaderboard.length!=0 && leaderboard.map((entry) =>  {
            return(
            <li key={entry.id} className="leaderboard-entry">
                <h1><strong>#{entry.rank}</strong></h1>
                <p><strong>{entry.title}</strong></p>
                <img alt={entry.title + 'cover'} src={entry.img}/>
                <button><img alt='delete' width={20} src="delete-svg.svg"/></button>
            </li>
        )})}
    </ul>
)}