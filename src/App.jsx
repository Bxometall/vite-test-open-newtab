import './App.css'
import AppRoutes from './router/AppRoutes'
import { Link } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import CustomLink from './components/CustomLink'
import { useCallback, useEffect } from 'react'
import data from './components/data'

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('My+Custom+Query')
  }, 1000)
})

function App() {
  const customLink =
    'https://www.google.com/search?q=My+Custom+Search+On+Google'

  const handleClick = useCallback((evt, entityID) => {
    evt.preventDefault()
    evt.stopPropagation()

    // this works bc user clicked on a button before to execute the action
    myPromise.then(res => {
      console.log('resss', res)
      window.open(
        `https://www.google.com/search?q=${res}+${entityID}`,
        '_blank'
      )
    })
  }, [])

  useEffect(() => {
    setTimeout(() => {
      // this will not work b/c user didn't trigger any action before!
      window.open(`https://www.google.com/search?q=Som+Random`, '_blank')
    }, 3000)
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/counter">Counter</Link>
              </li>
              <li>
                <Link to="/google" target="_blank" rel="noopener noreferrer">
                  Google
                </Link>
              </li>
              <li>
                <CustomLink url={customLink} linkTo="Google Custom" />
              </li>
            </ul>
          </nav>
          <AppRoutes />
        </Router>

        <div>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.data.map(entity => (
                <tr key={entity.id}>
                  <td>{entity.id}</td>
                  <td>{entity.name}</td>
                  <td>
                    <button onClick={e => handleClick(e, entity.id)}>
                      Generate a link
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </header>
    </div>
  )
}

export default App
