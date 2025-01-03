import React from 'react'
import Router from './router/Router'
import ReactQueryProvider from './provider/ReactQueryProvider'

function App() {
  return (
    <ReactQueryProvider>
        <Router/>
    </ReactQueryProvider>
  )
}

export default App