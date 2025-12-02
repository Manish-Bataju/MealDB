import logo from '@/Assets/logo.svg'
import { useState } from 'react'
import { Link } from 'react-router'


export default function Header() {
  const [open, setOpen] = useState(false);
  
  return (
    <div className="flex items-center justify-between prose sm:prose-lg lg:prose-xl mt-7">
       {/* Logo */}
      <img src={logo} alt=""  className="w-[175px] sm:w-[200px] md:w-[225px] lg:w-[250px] transition-all duration-500 ease-in-out "/>

      {/* Hamburger Button */}
      <button 
        onClick={() => setOpen(!open)} 
        className="sm:hidden flex flex-col space-y-1.25 cursor-pointer"
      >
        <span className="block w-6 h-0.75 bg-white"></span>
        <span className="block w-6 h-0.75 bg-white"></span>
        <span className="block w-6 h-0.75 bg-white"></span>
      </button>
      
      <div className={`sm:flex ${open ? "block": "hidden"} absolute sm:static top-7 right-12 w-[150px] sm:w-auto sm:bg-black sm:text-white bg-green-200 rounded-md `}>
        <ul className="flex flex-col gap-2 items-start justify-center sm:flex-row sm:space-x-3 p-2 sm:p-0">
        <li>
         <Link to="/" className=" px-3 py-2 hover:bg-red-600 rounded">  Home</Link>
         </li>
        <li>
        <Link to="/API" className=" px-3 py-2 hover:bg-red-600 rounded"> API</Link>
        </li>

       <div className='bg-white rounded py-1 px-1 w-full sm:w-40'>
      <input type="text" className="sm:text-black w-full " placeholder='Search'/>
      </div>
      </ul>
     
      
      </div>
      
      
    </div>
  )
}
