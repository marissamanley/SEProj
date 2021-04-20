import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import './GamesTemplate.scss'

function GamesTemplate() {
    const history = useHistory()

    const [title, setTitle] = useState('')
    const [genre, setGenre] = useState('')
    const [link, setLink] = useState('')
    const [description, setDescription] = useState('')

    const onSubmit = (e:any) => {
        e.preventDefault()

        const data = {
            title,
            genre,
            link,
            description,
            pictureURL: "google.com"
        }

        fetch('/api/games', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          })
          .then(res => res.json())
          .then(newGame => {
            console.log(newGame)
            history.push('/games')
          })
    }

    return (
        <main className="games-template">
            <form>
            <h2>Game Title</h2>
                <input className="title" type="text" onChange={(e) => setTitle(e.target.value)} />

            <h2>Genre</h2>
                <input className="genre" type="text" onChange={(e) => setGenre(e.target.value)}/>

            <h2>(Optional) Store/Purchase Link</h2>
                <input className="link" type="text" onChange={(e) => setLink(e.target.value)}/>

            <h2>Description</h2>
                <textarea className="description" onChange={(e) => setDescription(e.target.value)}/>

        <button className="submit" onClick={onSubmit}>Submit</button>
      </form>
    </main>
    )
}

export default GamesTemplate;