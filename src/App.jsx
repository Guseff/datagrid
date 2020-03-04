import 'bootstrap/dist/css/bootstrap.css'

import React from 'react'
import MainTable from './components/Table'
import makeData from './utils'

const data = makeData()

const App = () => {
  return (
    <div>
      Hello World!
      <MainTable data={data} />
    </div>
  )
}

export default App
