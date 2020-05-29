import React, { useState } from 'react'

const PipeContext = React.createContext([{}, () => { }])

const PipeContextProvider = props => {
  const [filter, setFilter] = useState([]);
  return (
    <PipeContext.Provider value={[filter, setFilter]}>{props.children}</PipeContext.Provider>
  )
}

export { PipeContext, PipeContextProvider }