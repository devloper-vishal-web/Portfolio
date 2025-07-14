import Navbar from './Components/Navbar'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'
import Project from './Components/Project/Project'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <>
    <div className='bg-[#171d32] h-auto w-full overflow-hidden'></div>
    <Navbar/>
    <Home/>
    <About/>
    <Skills/>
    <Project/>
    <Footer/>
    </>
  )
}

export default App
