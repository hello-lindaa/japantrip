import './App.css'
import Place from './components/Place'
import Type from './components/Type'
import data from './places.json'

const App = () => {
  return (
    <div>
      <h1>Spring 2023 Japan Trip Itinerary</h1>
      <div className="main">
        {data.places.map((place) => (
          <div className="card">
            <Place
              title={place.name}
              location={place.location}
              photo={place.image}
            />

            <div className="typesBar">
              {place.types.map((types) => (
                <Type type={types} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
