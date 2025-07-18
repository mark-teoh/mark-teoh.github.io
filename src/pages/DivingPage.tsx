import Nav from '../component/nav/Nav'
import { Link } from 'react-router'

const DivingPage = () => {
  return (
    <>
    <header>
      <Nav />
    </header>
    <div className='className=" flex justify-center'>DivingPage</div>
    <Link to="/memdive" className="hover:text-blue-400 transition block">Memdive</Link>
    </>
  )
}

export default DivingPage