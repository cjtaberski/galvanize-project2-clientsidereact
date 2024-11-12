import { useContext } from 'react'
import { AppContext } from './App.jsx'
import { useNavigate } from 'react-router-dom'

function Characters() {
    
    let { characterList } = useContext(AppContext)
    const navigate = useNavigate();

    function handleCharacterSelect(characterName) {
        let truncCharacter = characterName.replace(/ /g, "")
        navigate(`/characters/${truncCharacter}`, {state: {name: truncCharacter}})
    }

    return (
        <div className="characterList">
            { characterList.map(character => (
                <div className="character" onClick={() => handleCharacterSelect(character.name)}>
                    <h2 className="characterName">{character.name.length <= 16 ? character.name : `${character.name.slice(0, 15)}...`}</h2>
                    <img className="characterImage" src={character.image} alt={`Image of ${character.name}`}></img>
                </div>
            ))}
        </div>
    )
}

export default Characters