import { useEffect, useState } from 'react'
import './App.css'
import { getRandomDimension } from './helpers/random'
import axios from 'axios'
import Location from './components/Location'
import ResidentList from './components/ResidentList'

function App() {

  const [location, setLocation] = useState() 

  const handleSubmit = (e) => {
    e.preventDefault()
    const newLocation = e.target.locationId.value

    const URL = `https://rickandmortyapi.com/api/location/${newLocation}`
    
    axios.get(URL)
     .then((res) => setLocation(res.data))
     .catch((err) => console.log(err))

  }

 
  useEffect(() => {
    const URL = `https://rickandmortyapi.com/api/location/${getRandomDimension()}`

    axios.get(URL)
    .then((res) => setLocation(res.data))
    .catch((err) => console.log(err))
  },[])

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>

        <div>
        <h2 className='text-container'>Welcome to the crazy universe!</h2>
        <div className='flex  justify-center'>
         <input id='locationId' placeholder='Type a location Id...' className='border-2 border-black button_search  text-black' type="text" />
         <button className='button_search'>Search <i className='bx bx-search'></i></button>
         </div>

         
        </div>

        
      </form>
      <Location location={location}/>
      <ResidentList location={location} /> 
    </div>
  )
}

export default App
