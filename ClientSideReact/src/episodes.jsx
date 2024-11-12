import { useState, useContext, createContext } from 'react'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import { AppContext } from './App.jsx'
import Episode from './episode'

// export let SeasonContext = createContext();

function Episodes() {

    const [season, setSeason] = useState('All Seasons')
    const handleSeasonSelect = (event) => {
        setSeason(event.target.value);
    }

    let {  episodeList }  = useContext(AppContext)

    return (
        <div>
            <div className="episodeSelect">
                <select value={season} onChange={handleSeasonSelect}>
                    <option value="All">All Seasons</option>
                    <option value="01">Season One</option>
                    <option value="02">Season Two</option>
                    <option value="03">Season Three</option>
                    <option value="04">Season Four</option>
                    <option value="05">Season Five</option>
                    <option value="06">Season Six</option>
                </select>
            </div>
            <div>
                {/* <SeasonContext.Provider value={season}> */}
                    <Episode currentSeason={season} />
                {/* </SeasonContext.Provider> */}
            </div>
        </div>
    )
}

export default Episodes