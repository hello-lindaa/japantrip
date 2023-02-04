const Place = (props) => {
  return (
    <div className="place-info">
      <h2>{props.title}</h2>
      <h3>{props.location}</h3>
      <p>{props.types}</p>
      <img src={props.photo} className="image" />
      <h5>{props.notes}</h5>
    </div>
  )
}

export default Place
