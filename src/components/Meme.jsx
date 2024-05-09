import React, { useEffect, useState } from 'react';

// If you're importing memesData, make sure it exists and is correctly imported.
// Since memesData is not defined in the provided code, you might need to uncomment this line if it's necessary.
// import memesData from "../memesData";

export default function Meme() {
    // Initialize state for the meme and allMemesData
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomMemeImage: "http://i.imgflip.com/1bij.jpg"
    });
    const [allMemesData, setAllMemesData] = useState(null); // Set initial state to null

    useEffect(() => {
        // Fetch memes data when component mounts
        fetch('https://api.imgflip.com/get_memes')
            .then(response => response.json())
            .then(data => {
                // Set allMemesData state with fetched data
                setAllMemesData(data);
                // Set randomMemeImage in meme state with fetched image
                setMeme(prevMeme => ({
                    ...prevMeme,
                    randomMemeImage: data.image // Assuming data.image contains the image URL
                }));
            })
            .catch(error => console.error('Error fetching memes:', error));
    }, []); // Empty dependency array to run effect only once

    // Function to handle generating a random meme
    function getMeme() {
        if (allMemesData) {
            const memeArray = allMemesData.data.memes;
            const randomMeme = Math.floor(Math.random() * memeArray.length);
            const randomURL = memeArray[randomMeme].url;
            // Update meme state with random meme image URL
            setMeme(prevMeme => ({
                ...prevMeme,
                randomMemeImage: randomURL
            }));
        }
    }

    // Function to handle input change
    function handleChange(event) {
        const { name, value } = event.target;
        // Update meme state with changed input value
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }));
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
    );
}
