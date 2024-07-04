
import './App.css'
import Banner from './components/Banner/Banner'
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
    <Education />
    <Protfolio />
    <SkillPart />
    <Contact />
    <Footer />
    </div>
    </>
  )
}

export default App
