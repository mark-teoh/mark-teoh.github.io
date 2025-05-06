import '../App.css'
import Nav from '../component/nav/Nav'

const HomePage = () => {
  return (
    <>
    <div className="bg-gray-100 min-h-screen">
      <header>
        <Nav />
      </header>
      <div className="flex justify-center mt-10">
      <section id="about" className="bg-sky-50 px-16 py-16 rounded-xl shadow-md flex items-center gap-6 max-w-screen-xl w-full">
          <div className="flex-1 text-left text-lg space-y-4">
            <h2 className="text-6xl font-bold mb-8 font-montserrat">About Me</h2>
            <p className='max-w-5xl mx-auto text-xl font-inter'> Hi, I am Mark, a software engineer and UQ graduate with experience as an Automation Test Engineer. Passionate about problem-solving and software development. Outside of tech, I am also a dedicated diving coach, helping athletes refine their skills and reach new heights.</p>
            <p className='max-w-5xl mx-auto text-xl font-inter'> My full CV is{" "}
              <a href="/resume.pdf"  target="_blank" rel="noopener noreferrer" className="underline text-blue-500 hover:text-blue-700">
                here
              </a>
            </p>
          </div>
          <img src="/professionalshot.jpg" alt="About Me Image" className="w-80 h-80 object-cover object-top rounded-full mx-auto mb-4" />
        </section>
      </div>
    </div>
  </>
  )
}

export default HomePage