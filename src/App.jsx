import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Project'
import Contact from './components/Contact'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Header/>
        <About/>
        <Projects/>
        <Contact />
    </>
  )
}

export default App
