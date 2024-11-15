import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='flex flex-col items-center mx-56 gap-9'>
        <h1 className='font-extrabold text-[60px] text-center mt-28 ' > <span className='text-[#f49d0c]'>Discover Your Next Adventure:</span> Let AI Craft the Ultimate Travel Plan Just for You</h1>
        <p className='text-xl text-gray-500 text-center'>Build, personalize, and optimize your itineraries with our free AI trip planner. Designed for vacations, workations, and everyday adventures.</p>
        <Link to='/create-trip'>
            <Button>Get Started, It's Free</Button>
        </Link>
    </div>
  )
}

export default Hero