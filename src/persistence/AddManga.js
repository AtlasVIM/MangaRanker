import { list } from "./list"

export default function AddManga({mangaToAdd}) {

    const handleAddManga = () => {
        

        console.log(mangaToAdd)
        const newManga = mangaToAdd
        document.getElementById('manga-search-input').value = ''

        list.push(newManga)
        console.log(list)
       // setList([...list, newManga])
    }

    return(
        <div>
            <button onClick={handleAddManga}>ADD</button>
        </div>
    )
}