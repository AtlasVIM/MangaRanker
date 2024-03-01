import { useEffect, useRef, useState } from "react";
import MangaSearchAndAdd from "./MangaSearch";
import DeleteManga from "../persistence/DeleteManga";





export default function Leaderboard() {

    const [leaderboard, setLeaderboard] = useState(() => {
            return JSON.parse(localStorage.getItem('MANGA_RANKER_REACT_APP')) || []
    })

    
    useEffect(() => {
        localStorage.setItem('MANGA_RANKER_REACT_APP', JSON.stringify(leaderboard))
    }, [leaderboard])
    

    const handleSort = () => {
        let _leaderboard = [...leaderboard]

        const draggedItemContent=_leaderboard.splice(dragItem.current,1)[0]
        console.log(draggedItemContent.rank)
        _leaderboard.splice(dragOverItem.current,0,draggedItemContent)

        dragItem.current=null
        dragOverItem.current =null

        setLeaderboard(_leaderboard)
    }


    const dragItem = useRef(null)
    const dragOverItem = useRef(null)

    return( 
    <div>
    <MangaSearchAndAdd leaderboard={leaderboard} setLeaderboard={setLeaderboard}/>
    <div id='leaderboard-container'>
        {leaderboard.length!==0 && leaderboard.map((entry, index) =>  {
            return(
                <div key={index} className="leaderboard-entry" draggable="true" 
                onDragStart={(e) => {
                    dragItem.current=index}}
                onDragEnter={(e) => {
                    dragOverItem.current=index}}
                onDragEnd={handleSort}
                onDragOver={(e) => e.preventDefault}
                >
                <h1><strong>#{index+1}</strong></h1>
                <p className="manga-title"><strong>{entry.title}</strong></p>
                <img alt={entry.title + 'cover'} src={entry.img}/>
                <DeleteManga leaderboard={leaderboard} setLeaderboard={setLeaderboard}/>
            </div>
        )})}
    </div>
    </div>
)}