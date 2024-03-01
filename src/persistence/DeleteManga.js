

export default function DeleteManga({leaderboard, setLeaderboard}) {

    const handleDelete = (index) => {
        const _leaderboard = [...leaderboard]
        console.log(index)
        _leaderboard.splice(index,1)
        setLeaderboard(_leaderboard)
    }


    return(
        <div>
            <button onClick={handleDelete}><img alt="delete" src="delete-svg.svg" width={20}/></button>
        </div>
    )
}