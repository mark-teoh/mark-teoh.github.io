// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import professionalShot from './assets/professionalshot.jpg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <nav>
          <h1>My Website</h1>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#features">Experience</a></li>
            <li><a href="#features">Diving</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <section id="about" className="text-center p-6 bg-sky-50">
        <h2 className="text-2xl font-bold mb-4 text-left">About Me</h2>
        <img src={professionalShot} alt="About Me Image" className="w-48 h-48 object-cover object-top rounded-full mx-auto mb-4" />
        <p> Hi, I am Mark, a software engineer and UQ graduate with experience as an Automation Test Engineer. Passionate about problem-solving and software development. Outside of tech, I am also a dedicated diving coach, helping athletes refine their skills and reach new heights.</p>
      </section>
    </>
  )
}
export default App
