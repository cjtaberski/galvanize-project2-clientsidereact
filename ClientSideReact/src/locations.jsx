import { useContext } from 'react'
import { AppContext } from './App.jsx'
import { useNavigate } from 'react-router-dom'

function Locations() {

    let { locationList } = useContext(AppContext)
    const navigate = useNavigate();

    function handleLocationSelect(locationName) {
        let truncLocationName = locationName.replace(/ /g, "")
        navigate(`/locations/${truncLocationName}`, {state: {name: truncLocationName}})
    }

    return (
        <div className="locationList">
            { locationList.map(location => (
                <div className="location" onClick={() => handleLocationSelect(location.name)}>
                    <h2 className="locationName" >{location.name.length <= 20 ? location.name : `${location.name.slice(0, 19)}...`}</h2>
                </div>
            ))}
        </div>
    )
}

export default Locations