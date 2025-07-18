import './Memdive.css'
import { useDives } from './DiveListData';  // Adjust the path as needed


const Memdive = () => {
    const { dives, loading, error } = useDives();

    if (loading) return <div>Loading dives...</div>;
    if (error) return <div>Error: {error}</div>;
    if (dives.length === 0) return <div>No dives available</div>;

    // Pick a random dive
    const randomIndex = Math.floor(Math.random() * dives.length);
    const randomDive = dives[randomIndex];

    return (
    <>
    <header> 
        <title> Mem Dive </title>    
    </header>
    <h1 className="flex justify-center mt-4 text-4xl font-bold" >Mem Dive</h1>
    <p>{randomDive.diveName}: {randomDive.diveNumber}</p>
    </>
  )
}
export default Memdive