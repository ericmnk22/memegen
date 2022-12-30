import react from 'react';
import memeData from '../memeData';

export default function Meme(){
    
    const [allMeme, setAllMeme] = react.useState([]);

    react.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMeme(data.data.memes))
    }, [])

    const [meme, setMeme] = react.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    
    function handleChange(e){
        const {name, value} = e.target
        e.preventDefault();
        setMeme((prevState) => {
            return{
                ...prevState,
                [name] : [value]
            }
        })
    }
    function getImageMeme(e) {
        e.preventDefault();
        const randNum = Math.floor(Math.random() * allMeme.length);
        setMeme((prevState) => {
            return{
                ...prevState,
                randomImage: meme.randomImage= allMeme[randNum].url
            }
        });
        console.log(meme.randomImage)
    }
    return(
        <main>
            <form className="form">
                <input 
                    type="text" 
                    placeholder="Top Text" 
                    className="form--inputs"
                    name="topText" 
                    value={meme.topText}
                    onChange={handleChange}
                
                />
                <input 
                    type="text" 
                    placeholder="Bottom Text" 
                    className="form--inputs"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                
                />
                <button className="form-button" onClick={getImageMeme}>Get a new meme image 🖼</button>
            </form>
            <div className='imageDiv'>
                <img src={meme.randomImage} className="meme-img" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
            
        </main>

    )
}