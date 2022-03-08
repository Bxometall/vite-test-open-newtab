// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import Redirect from '../components/Redirect'
import About from '../pages/About'
import Counter from '../pages/Counter'

const AppRoutes = _ => {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/counter" element={<Counter />} />
      <Route
        path="/google"
        element={<Redirect text="here is my example text" />}
      />
    </Routes>
  )
}

export default AppRoutes
