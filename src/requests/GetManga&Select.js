import React, {useState, useEffect} from 'react'

export default function GetManga({args , setMangaToAdd}) {
    const baseUrl= `https://kitsu.io/api/edge/manga?page[limit]=20&filter[text]=`
    const [mangadex, setMangaDex] = useState([])

     useEffect(() => {
        fetch(`${baseUrl}${args}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/vnd.api+json',
                'Accept': 'application/vnd.api+json'
            }
        })
        .then((response) => response.json())
        .then((data) => {
            setMangaDex(data.data)
        })
        .catch((error) => console.log(error))
    }, [args, baseUrl])

    const handleSelect = (e) => {
        const manga = mangadex.find(manga => manga.id === e.target.value)
        console.log(manga)
        setMangaToAdd({
            id: manga.id,
            title: manga.attributes.canonicalTitle,
            img: manga.attributes.posterImage.original
        })
    }
    
    return <div>
        {args!=='' && 
        <select id='manga-select' onChange={handleSelect}>
        {mangadex.map((manga) => {
            return(<option value={manga.id} className='search-results'>{manga.attributes.canonicalTitle}</option>)
        })}
        </select>
}
    </div>
}