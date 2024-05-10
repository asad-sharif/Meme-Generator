import image from '../trollFace.png'

export default function Header() {

    return (
        <header className='header'>
            <img src={image} alt="" />
            <h1>Meme Generator</h1>
        </header>
    )
}