import { useEffect, useState } from "react";
import GetManga from "../requests/GetManga";
import { list } from "../persistence/list";
import AddManga from "../persistence/AddManga";

export default function MangaSearchAndAdd() {

    const [leaderboard, setLeaderboard] = useState(list)
    const [search, setSearch] = useState('')
    const [mangaToAdd, setMangaToAdd] = useState({
        id:'',
        rank:'',
        title: '',
        img: ''
    })

    useEffect(() => {
        console.log(leaderboard)

    }, [leaderboard])

    return <div>
        <input id='manga-search-input' placeholder='Search for a Manga:' onChange={(e) => setSearch(e.target.value)}></input>
        <GetManga args={search} setMangaToAdd={setMangaToAdd}></GetManga>
        <AddManga mangaToAdd={mangaToAdd}/>
    </div>
    
}