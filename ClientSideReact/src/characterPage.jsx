import React, { useContext } from 'react'
import { AppContext } from './App.jsx'
import { useNavigate, useParams } from 'react-router-dom'

function Character() {

    let { characterList } = useContext(AppContext);
    let { locationList } = useContext(AppContext);
    let { episodeList } = useContext(AppContext);

    let { character } = useParams();
    let characterMain = (characterList.filter((characterObject) => character === characterObject.name.replace(/ /g, "")))[0]

    function getCharEpisodes (episodes, character) {
        let charEpisodes = []
        for (var e = 0; e < episodes.length; e++) {
            for (var c = 0; c <character.episode.length; c++) {
                if (character.episode[c] === episodes[e].url) {
                    charEpisodes.push(episodes[e])
                }
            }
        }
        return charEpisodes
    }

    let featureEpisodes = getCharEpisodes(episodeList, characterMain)

    const navigate = useNavigate();
    function handleClickSelector(directory, navigateName) {
        let truncLink = navigateName.replace(/ /g, "")
        navigate(`${directory}/${truncLink}`, {state: {name: navigateName}})
    }
   
    return characterMain ? (
        <>
            <h2 className="characterTitle">{characterMain.name}</h2>
            <div className="characterPage">
                <div className="characterDetails">
                    <p><strong>Species: </strong>{characterMain.species}</p>
                    <p><strong>Gender: </strong>{characterMain.gender}</p>
                    {characterMain.origin.name !== "unknown" ? (
                        <p className="linkItem" onClick={() => handleClickSelector('/locations', characterMain.origin.name)}><strong>Origin: </strong>{characterMain.origin.name}</p>
                    ) : (
                        <p><strong>Origin: </strong>{characterMain.origin.name}</p>
                    )}
                    {characterMain.location.name !== "unknown" ? (
                        <p className="linkItem" onClick={() => handleClickSelector('/locations', characterMain.location.name)}><strong>Location: </strong>{characterMain.location.name}</p>
                    ) : (
                        <p><strong>Location: </strong>{characterMain.location.name}</p>
                    )}
                    <p><strong>Status: </strong>{characterMain.status}</p>
                    <p><strong>Featured Episodes:</strong></p>
                    <ul>
                        {featureEpisodes.map(episode => {
                            return (
                                <li className="linkItem" onClick={() => handleClickSelector('/episodes', episode.name)}>{episode.name}</li>
                            )
                        })}
                    </ul>
                </div>
                <div >
                    <img className="characterImage" src={characterMain.image} alt={`Image of ${characterMain.name}`}></img>
                </div>
            </div>
        </>
    ) : (<div></div>)
}

export default Character