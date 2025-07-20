import './Memdive.css'
import { useState, useEffect } from 'react';
import { useDives, Dives }  from './DiveListData';  


const Memdive = () => {
    const { dives, loading, error } = useDives();
    const [selectedDive, setSelectedDive] = useState<Dives | null>(null);
    const [input, setInput] = useState("");
    const [isCorrect, setIsCorrect] = useState(false);
    const [message, setMessage] = useState("");


    const generateRandomDive = (count: number) => {
      const shuffled = [...dives].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, count);
    }; 

    const checkDiveNumber = (e: React.FormEvent) => {
      e.preventDefault();
      if (!selectedDive) return;
      if (input.trim() === selectedDive.diveNumber.toString()) {
        setIsCorrect(true);
        setMessage("Correct!");
      } else {
        setIsCorrect(false);
        setMessage("Try again.");
      }
    }     

    const handleNewDive = () => {
      const dive = generateRandomDive(1)[0];
      setSelectedDive(dive);
      setInput("");
      setIsCorrect(false);
      setMessage("");
    };

    useEffect(() => {
      if (dives.length > 0 && !selectedDive) {
        handleNewDive();
      }
    }, [dives, selectedDive]);

    if (loading) return <div>Loading dives...</div>;
    if (error) return <div>Error: {error}</div>;
    if (dives.length === 0) return <div>No dives available</div>;

    return (
    <>
    <header> 
        <title> Mem Dive </title>    
    </header>
    <h1 className="flex justify-center mt-4 text-4xl font-bold" >Mem Dive</h1>
    {/* <p>{selectedDive?.diveName}: {selectedDive?.diveNumber}</p> */}
    <form onSubmit={checkDiveNumber}>
      <label>{selectedDive?.diveName}: </label>
      <input 
        className= {`outline-solid p-2 rounded border ${
        isCorrect
          ? "border-green-600 focus:border-green-600 focus:ring-green-600"
          : "border-gray-300 focus:border-blue-500 focus:ring-blue-500"
        }`} 
        type="text" 
        placeholder="Enter dive number" 
        value={input} 
        onChange={e => setInput(e.target.value)}/> 
      <br></br>
      <input className= "outline-solid" type="submit" value="enter" />
    </form>
      
    {message && <p className={`mt-4 ${isCorrect ? "text-green-600" : "text-red-600"}`}>{message}</p>}
    
    {isCorrect && (<div className="mt-4">
      <button
        onClick={handleNewDive}
        className="px-4 py-2 outline-solid rounded hover:bg-gray-600 transition">
        New Dive
      </button>
      </div>
    )}

    </>
  )
}
export default Memdive