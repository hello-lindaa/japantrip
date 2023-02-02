const Place = (props) => {
  return (
    <div className="place-info">
      <h2>{props.title}</h2>
      <h3>{props.location}</h3>
      <p>{props.types}</p>
      <img src={props.photo} className="image" />
    </div>
  )
}

export default Place
