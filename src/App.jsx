
import './App.css'
import About from './components/About/About'
import Banner from './components/Banner/Banner'
import Blogs from './components/Blogs/Blogs'
import Contact from './components/Contact/Contact'
import Education from './components/Education/Education'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Protfolio from './components/Protfolio/Protfolio'
import SkillPart from './components/SkillPart/SkillPart'


function App() {


  return (
    <>
    <div>
    <Navbar />
    <Banner />
    <About />
    <Education />
    <Protfolio />
    <Blogs />
    <SkillPart />
    <Contact />
    <Footer />
    </div>
    </>
  )
}

export default App
