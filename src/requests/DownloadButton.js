
export default function DownloadButton({leaderboard}) {

    const handleDownload = () => {
        const jsonData = `data:text/json;chatset=utf-8,${encodeURIComponent(localStorage.getItem('MANGA_RANKER_REACT_APP'))}`
        console.log(jsonData)
        const link = document.createElement('a')
        link.href = jsonData
        link.download = 'rankdata.mangaranker'
        link.click()
        link.remove()
    }


    return(
        <div>
            <button onClick={handleDownload}>EXPORT LIST</button>
        </div>
    )

}
