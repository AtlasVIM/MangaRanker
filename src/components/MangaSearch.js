import { useState } from "react";
import GetManga from "../requests/GetManga&Select";
import AddManga from "../persistence/AddManga";
import DownloadButton from "../requests/DownloadButton";
import ImportButton from "../requests/ImportButton";

const defaultManga = {
    id:"",
    title:"",
    img:""
}

export default function MangaSearchAndAdd({leaderboard, setLeaderboard}) {

    const [search, setSearch] = useState('')
    const [mangaToAdd, setMangaToAdd] = useState(defaultManga)

    return <div>
        <div id="import-export">
        <DownloadButton leaderboard={leaderboard}/>
        <ImportButton leaderboard={leaderboard}/>
        </div>
        <input id='manga-search-input' placeholder='Search for a Manga:'></input>
        <button onClick={() => setSearch(document.getElementById('manga-search-input').value)}>SEARCH</button>
        <GetManga args={search} setMangaToAdd={setMangaToAdd}></GetManga>
        <AddManga setLeaderboard={setLeaderboard} leaderboard={leaderboard} mangaToAdd={mangaToAdd} defaultManga={defaultManga}/>
    </div>
    
}