import React, { useContext } from 'react'
import { AppContext } from './App.jsx'
import { useNavigate, useParams } from 'react-router-dom'

function LocationPage() {

    let { characterList } = useContext(AppContext);
    let { locationList } = useContext(AppContext);
    let { episodeList } = useContext(AppContext);
    console.log(locationList);
    let { location } = useParams();
    let currLocation = (locationList.filter((locale) => location === locale.name.replace(/ /g, "")))[0]
    
    function getResidents(characters, residentList) {
        let population = [];
        for (var c = 0; c < characters.length; c++) {
            for (var r = 0; r < residentList.length; r++) {
                if (characters[c].url === residentList[r]) {
                    population.push(characters[c])
                }
            }
        }
        return population
    }

    let denizens = getResidents(characterList, currLocation.residents)

    const navigate = useNavigate();
    function handleClickSelector(directory, navigateName) {
        let truncLink = navigateName.replace(/ /g, "")
        navigate(`${directory}/${truncLink}`, {state: {name: truncLink}})
    }

    return currLocation ? (
        <>
            <h2 className='locationTitle'>{currLocation.name}</h2>
            <div className="locationPage">
                <div className="locationDetails">
                    <h3>Location Details</h3>
                    <p><strong>Created: </strong>{currLocation.created}</p>
                    <p><strong>Dimension: </strong>{currLocation.dimension}</p>
                    <p><strong>Type: </strong>{currLocation.type}</p>
                </div>
                <div className="residents">
                    <h3>Residents</h3>
                    <ul>
                        {denizens.map(resident => {
                            console.log(resident.name)
                            return (
                                <li className="linkItem" onClick={() => handleClickSelector('/characters', resident.name)}>{resident.name}</li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </>
    ) : (
        <div></div>
    )
}

export default LocationPage