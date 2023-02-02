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
      colorVariable = 'pink'
      break

    default:
      colorVariable = 'orange'
  }
  return (
    <div
      className="type-code"
      style={{ backgroundColor: colorVariable, color: '#000000' }}
    >
      {props.type}
    </div>
  )
}

export default Type
