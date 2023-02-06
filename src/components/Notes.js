import React from 'react'
const Notes = (props) => {
  return (
    <div className="noteBar">
      {`Notes: `}
      {props.notes}
    </div>
  )
}

export default Notes
