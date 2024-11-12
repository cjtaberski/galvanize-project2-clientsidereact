import { useEffect, useState, createContext } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import './App.css'
import HomePage from './homepage.jsx'
import Locations from './locations.jsx'
import Characters from './characters.jsx'
import Episodes from './episodes'
import CharacterPage from './characterPage.jsx'
import LocationPage from './locationPage'


export let AppContext = createContext({characters: [], locations: [], episodes: []})

function App() {

  const [characterList, setCharacterList] = useState([]);
  const [locationList, setLocationList] = useState([]);
  const [episodeList, setEpisodeList] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
    .then(res => res.json())
    .then(data => {
      //console.log(data);
      setCharacterList(data.results)
    })
  }, [])

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/location')
    .then(res => res.json())
    .then(data => setLocationList(data.results))
  }, [])

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/episode')
    .then(res => res.json())
    .then(data => setEpisodeList(data.results))
  }, [])

  const navigate = useNavigate()

  function navigationMenu(location) {
    navigate(location)
  }

  if (!locationList && !episodeList && !characterList) {
    return <h2>Loading....</h2>
  } else {
    return (
      <>
        <header className="titleBar">
          <h1 className="pageTitle" onClick={() => navigationMenu('/')}>Rick and Morty Explorer</h1>
        </header>
        <nav className="navigationBar">
        <button className="navButton" onClick={() => navigationMenu(-1)}>{'<<Go Back'}</button>
          <button className="navButton" onClick={() => navigationMenu(+1)}>{'Go Forward>>'}</button>
          <button className="navButton" onClick={() => navigationMenu('/characters')}>Characters</button>
          <button className="navButton" onClick={() => navigationMenu('/locations')}>Locations</button>
          <button className="navButton" onClick={() => navigationMenu('/episodes')}>Episodes</button>
          <input className="siteSearch" type="textbox" placeholder="Search Site"></input>
        </nav>
        <AppContext.Provider value={{characterList, locationList, episodeList}}>
          <Routes>
            <Route path='/' element={<HomePage />}></Route>
            <Route path='/characters' element={<Characters />}></Route>
            <Route path='/locations' element={<Locations />}></Route>
            <Route path='/episodes' element={<Episodes />}></Route>
            <Route path='/characters/:character' element={<CharacterPage />}></Route>
            <Route path='/locations/:location' element={<LocationPage />}></Route>
          </Routes>
        </AppContext.Provider>
      </>
    )
  }
}

export default App