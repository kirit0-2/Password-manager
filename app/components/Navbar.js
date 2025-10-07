import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-gradient-to-r from-blue-800 to-purple-600 text-white shadow-lg'>
      <div className='mycontainer flex justify-between items-center px-4 h-16 py-5'>
        <div className='font-bold text-2xl'>
          <span>Pass</span>
          <span className='text-purple-200'>/SEC</span>
        </div>

        <button className='text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 my-2 mx-2 rounded-full flex justify-center items-center transition-all duration-300 transform hover:scale-105 shadow-md px-4 py-2'>
          <img className='invert w-6 h-6 mr-2' src="./icons/github.svg" alt="github logo" />
          <span className='font-semibold'><a href="https://github.com/kirit0-2" target='_blank'></a></span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
