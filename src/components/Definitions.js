import React from 'react'

const Definitions = ({ definitions, index }) => {
  return (
    <ul>
        {
            definitions.map(f => (
                <li>{index + 1}.{f}</li>
            ))
        }

    </ul>
  )
}

export default Definitions