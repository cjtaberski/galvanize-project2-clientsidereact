import React, { useState, useContext } from 'react'
import { AppContext } from './App.jsx'
import { useLocation } from 'react-router-dom'
// import { SeasonContext } from "./episodes"

function Episode (props) {

    let season = props.currentSeason
    console.log(season)
    let { episodeList } = useContext(AppContext)
    // let currEpisodeName = useLocation().state.name
    // let currEpisode = (episodeList.filter(episode => currEpisodeName === episode.name))[0]
    // console.log(currEpisode)
    // let season = useContext(SeasonContext)

    if (season === "All Seasons") {
            return (
                <>
                    {episodeList.map((episode, index) => (
                        <div className="episode">
                            <h2 key={index}>{episode.name}</h2>
                        </div>
                    ))}
                </>
            )
    } else {
        let filteredEpisodes = episodeList.filter(episode => episode.episode.substring(1, 3) === season)
        return (
            <>
                {filteredEpisodes.map(filteredEpisode => (
                    <div className="episode">
                        <h2>{filteredEpisode.name}</h2>
                    </div>
                ))}
            </>
        )
        
    }
}

export default Episode