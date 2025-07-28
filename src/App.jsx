import { useState } from 'react'
import './components/Hero.jsx';
import Hero from './components/Hero.jsx';
import Ourpartner from './components/Ourpartner.jsx';
import About from './components/About.jsx';
import Service from './components/Service.jsx';
import Subscribe from './components/Subscribe.jsx';
import Reason from './components/Reason.jsx';
import OurTeam from './components/OurTeam.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero />
      <Ourpartner />
      <About />
      <Service />
      <div className="-mx-5 md:-mx-20">
        <Subscribe/>
      </div>
      <Reason />
      <OurTeam />

    </>
  )
}

export default App
