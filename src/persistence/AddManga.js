
export default function AddManga({mangaToAdd, leaderboard, setLeaderboard, defaultManga}) {

    const handleAddManga = () => {

        if (mangaToAdd === defaultManga) {
            console.log('Additon Failed: Empty Object')
            return;
        }
        
        const _leaderboard = [...leaderboard]

        const newManga = mangaToAdd
        document.getElementById('manga-search-input').value = ''

        _leaderboard.push(newManga)

        setLeaderboard(_leaderboard)
    }

    return(
        <div>
            <button id='add-button' onClick={handleAddManga}><strong>ADD</strong></button>
        </div>
    )
}