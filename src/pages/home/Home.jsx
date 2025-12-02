import React from 'react'
import MealCategories from '../meals/MealCategories'
import { ArrowRightLeft } from 'lucide-react'
import MealList from '../meals/MealList'
import { design } from '@/lib/design'

export default function Home() {
  return (
    <div>



<div className="flex items-center justify-center">
         
        <div className='flex flex-col space-y-3 items-center gap-3.5'>
          <h1 className="font-medium text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center text-white">Welcome to TheMealDB</h1>
          <p className="text-white text-center w-[90vw] sm:w-[80vw] md:w-[70vw] text-sm sm:text-base md:text-lg leading-relaxed break-words">Welcome to TheMealDB: An open, crowd-sourced database of recipes from  around the world.     We offer a <span className='text-orange-500' >free recipe API</span> for anyone wanting to use it, with additional premium features if required.</p>

        <div className='flex gap-6'>
        <button className="px-4 py-2 rounded-md bg-green-500 text-white cursor-pointer"> Free Api </button>
        <button className='px-4 py-2 rounded-md bg-yellow-500 text-white cursor-pointer'> Go Premium </button>
        </div>
       
       <div>
        <p className='text-white text-xl'> Click above to upgrade the free Recipe API to premium for
          <a href='https://www.paypal.com/ncp/payment/V4F62XVUMPPYW' className='text-orange-500'> $10 lifetime one-off</a> 293 premium supporters.</p>
       </div>
        </div>

        <div className='flex w-full items-center justify-between absolute'>
        <img src="https://www.themealdb.com/images/meal-icon.png" alt="" className="w-20 sm:w-28 md:w-32 lg:w-40 xl:w-48" />
        <img src="https://www.themealdb.com/images/meal-icon.png" alt="" className="w-20 sm:w-28 md:w-32 lg:w-40 xl:w-48" />
        </div>

      
      </div>

      <hr className='mt-5 border-2 border-amber-400'/>
      < MealCategories/>
      <MealList/>
    </div>
  )
}
