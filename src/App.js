import './App.css'
import Place from './components/Place'
import Type from './components/Type'
import data from './places.json'
import Notes from './components/Notes'
import Locations from './components/Locations'

const App = () => {
  return (
    <div>
      <h1>Spring 2023 Japan Trip Itinerary</h1>
      <div className="main">
        {data.places.map((place) => (
          <div className="card">
            <Place title={place.name} photo={place.image} />
            <Locations location={place.location} />

            <div className="typesBar">
              {place.types.map((types) => (
                <Type type={types} />
              ))}
            </div>
            <div className="notesBar">
              <Notes notes={place.notes} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
