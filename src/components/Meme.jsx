import memesData from "../memesData"
import React, { useState } from 'react'


export default function Meme() {
    // const [memeImage, setMemeImage] = React.useState('')
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomMemeImage: "http://i.imgflip.com/1bij.jpg"
    })
    const [allMemesData, setAllMemesData] = useState(memesData)

    function getMeme() {
        const memeArray = allMemesData.data.memes
        const randomMeme = Math.floor(Math.random() * memeArray.length)
        const randomURL = memeArray[randomMeme].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomMemeImage: randomURL
        }))
        // setMemeImage(memeArray[randomMeme].url)
    }

    function handleChange(event) {
        const { name, value } = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }


    return (
        <div className="meme-wrapper">
            <div className="meme-form">
                <label htmlFor="top-text">Top Text
                    <input type="text"
                        id="top-text"
                        placeholder="Shut up"
                        onChange={handleChange}
                        name="topText"
                        value={meme.topText} />
                </label>

                <label htmlFor="bottom-text">Bottom Text
                    <input type="text"
                        id="bottom-text"
                        placeholder="and take the money"
                        onChange={handleChange}
                        name="bottomText"
                        value={meme.bottomText} />
                </label>

                <button onClick={getMeme}>Generate Meme</button>
            </div>

            <div className="meme">
                <img src={meme.randomMemeImage} alt="" className="meme-img" />
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>

        </div>
    )
}