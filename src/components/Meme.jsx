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


    return (
        <div className="meme-wrapper">
            <div className="meme-form">
                <label htmlFor="top-text">Top Text
                    <input type="text" id="top-text" placeholder="Shut up" />
                </label>

                <label htmlFor="bottom-text">Bottom Text
                    <input type="text" id="bottom-text" placeholder="and take the money" />
                </label>

                <button onClick={getMeme}>Generate Meme</button>
            </div>
            <img src={meme.randomMemeImage} alt="" className="meme-img" />
        </div>
    )
}