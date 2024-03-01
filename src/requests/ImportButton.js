import { useState } from "react"

export default function ImportButton({leaderboard}) {

    const [selectedFile, setSelectedFile] = useState(null)

    const handleFileChange = (event) =>{
        const file = event.target.files[0]
        setSelectedFile(file)
    }

    const handleImport = () => {
        if(selectedFile) {
            const reader = new FileReader();
            reader.onloadend = () => {
                try {
                    console.log(reader.result)
                    const base64Content = reader.result.split(',')[1]
                    const cleanContent = atob(base64Content)
                const fileData = JSON.parse(cleanContent);
                localStorage.setItem('MANGA_RANKER_REACT_APP', JSON.stringify(fileData))
                alert('List uploaded and saved. Refresh to show results!')
            } catch (error) {
                console.error('Error during upload:', error)
            }
            }
            reader.readAsDataURL(selectedFile)
        }
    }

    

    return(
        <div>
            <button onClick={handleImport}>IMPORT LIST</button>
            <input id='file-input' type="file" onChange={handleFileChange} />
        </div>
    )

}
