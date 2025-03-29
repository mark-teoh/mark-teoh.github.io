import professionalShot from '../assets/professionalshot.jpg'
import '../App.css'
import Nav from '../component/nav/Nav'

const HomePage = () => {
  return (
    <>
    <header>
      <Nav />
    </header>
    <section id="about" className="text-center p-6 bg-sky-50">
      <h2 className="text-2xl font-bold mb-4 text-left">About Me</h2>
      <img src={professionalShot} alt="About Me Image" className="w-48 h-48 object-cover object-top rounded-full mx-auto mb-4" />
      <p> Hi, I am Mark, a software engineer and UQ graduate with experience as an Automation Test Engineer. Passionate about problem-solving and software development. Outside of tech, I am also a dedicated diving coach, helping athletes refine their skills and reach new heights.</p>
    </section>
  </>
  )
}

export default HomePage