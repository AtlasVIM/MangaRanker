import React, {useState, useEffect} from 'react'




export default function GetManga({args}) {
    dconst baseUrl= `https://kitsu.io/api/edge/manga?filter[text]=`
    const [mangadex, setMangaDex] = useState(false)
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
    }, [])


    return <div>
        {mangadex && mangadex.map((manga) => console.log(manga.attributes.posterImage))}       
        {mangadex && <div>{mangadex.map((manga) => <img src={manga.attributes.posterImage.original}/>)}</div>}
    </div>
}