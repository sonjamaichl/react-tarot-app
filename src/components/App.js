import React from 'react'
import Searchbar from './Searchbar'
import GridContainer from './GridContainer'

function App() {
  return (
    <>
    <Searchbar />
    <GridContainer />   {/* should there be a Main Component and GridContainer inside?? or just one component for gridcontainer & items/cards??*/}
    </> 
  )
}

export default App