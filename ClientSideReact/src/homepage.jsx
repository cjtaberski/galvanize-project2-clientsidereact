import React from 'react'
import { useNavigate } from 'react-router-dom'

function HomePage () {

    const navigate = useNavigate()

    function handleOptionSelect(option) {
        navigate(`/${option}`)
    }
    return (
        <div className="navigationOptions">
            <div className="navigationOption">
                <img className="navigationImage" src="https://i.redd.it/pmwrvhpak9741.jpg" alt="Characters" onClick={() => handleOptionSelect('characters')}></img>
                <h2 className="optionTitle">Characters</h2>
            </div>
            <div className="navigationOption">
                <img className="navigationImage" src="https://m.media-amazon.com/images/M/MV5BZGQyZjk2MzMtMTcyNC00NGU3LTlmNjItNDExMWM4ZDFhYmQ2XkEyXkFqcGc@._V1_.jpg" alt="Locations" onClick={() => handleOptionSelect('locations')}></img>
                <h2 className="optionTitle">Locations</h2>
            </div>
            <div className="navigationOption">
                <img className="navigationImage" src="https://preview.redd.it/sar3dbl7m8091.jpg?width=640&crop=smart&auto=webp&s=d1b0558495889093452071ad92a2cfba9674339d" alt="Episodes" onClick={() => handleOptionSelect('episodes')}></img>
                <h2 className="optionTitle">Episodes</h2>
            </div>
        </div>
    )
}

export default HomePage