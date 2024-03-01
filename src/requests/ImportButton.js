import { useState } from "react"

export default function ImportButton({leaderboard}) {

    const [selectedFile, setSelectedFile] = useState(null)

    const handleFileChange = (event) =>{
        const file = event.target.files[0]
        const validation = file.name.split('.').find((fileType) => fileType === 'mangaranker')
        console.log(file)
        console.log(validation)
        if(validation){
            setSelectedFile(file)
        } else {
            alert('Incorrect File Type. Please try again')
        }
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
