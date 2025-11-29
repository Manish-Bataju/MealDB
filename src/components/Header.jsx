import logo from '@/Assets/logo.svg'
import { Link } from 'react-router'
import { Input } from './ui/input'

export default function Header() {
  
  return (
    <div className="header flex items-center justify-between">
      <img src={logo} alt="" width="250px"/>
      <div>
    <ul className='flex items-center gap-3'>
        <li>
         <Link to="/" className=" px-3 py-2 text-2xl text-white hover:bg-red-600 rounded">  Home </Link>
         </li>
        <li>
        <Link to="/API" className=" px-3 py-2 text-white text-2xl hover:bg-red-600 rounded"> API</Link>
        </li>

       <div className='bg-white rounded py-2 px-1'>
      <input type="text" className="text-xl w-35" placeholder='Search'/>
      </div>
      </ul>
     
      
      </div>
      
      
    </div>
  )
}
