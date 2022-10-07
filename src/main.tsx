import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, Router } from './components'
import { About, Home } from './pages'

const container = document.getElementById('root') as HTMLElement

ReactDOM.createRoot(container).render(
  <React.StrictMode>
    <Router>
      <Route path='/' component={<Home />} />
      <Route path='/about' component={<About />} />
    </Router>
  </React.StrictMode>
)
