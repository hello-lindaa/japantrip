const Type = (props) => {
  let colorVariable = ''

  switch (props.type) {
    case 'Dining':
      colorVariable = 'blue'
      break
    case 'Snack':
      colorVariable = 'green'
      break
    case 'Attraction':
      colorVariable = 'purple'
      break
    case 'Shopping':
      colorVariable = 'salmon'
      break

    default:
      colorVariable = 'orange'
  }
  return (
    <div
      className="type-code"
      style={{ backgroundColor: colorVariable, color: 'white' }}
    >
      {props.type}
    </div>
  )
}

export default Type
