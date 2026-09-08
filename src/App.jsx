import './App.css'
import {Routes, Route, NavLink} from 'react-router-dom'
import Home from './pages/Home'
import Experience from './pages/Experience'
import Projects from './pages/Projects'

function App() {
  return (
    <>
      <nav>
        <NavLink to="/" end > Home</NavLink>
        <NavLink to="/experience">Work Experience</NavLink>
        <NavLink to="/projects">Projects</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
    </>

  )
}

export default App
