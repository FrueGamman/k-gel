import React from 'react'

export default function NewArrival() {
  return (
    <div className='my-12 mx-7'>
      <h1 className='text-2xl font-semibold my-6'>New & Trending</h1>
      <div className='md:flex gap-1 overflow-auto'>
        <button className='mx-1 my-1 border border-gray-300 px-4 py-2 rounded-2xl text-xs hover:bg-gray-100'>All</button>
        <button className='mx-1 my-1 border px-4 py-2 rounded-2xl text-xs hover:bg-gray-100'>Pants & Jeans</button>
        <button className='mx-1 my-1 border px-4 py-2 rounded-2xl text-xs hover:bg-gray-100'>Shirts</button>
        <button className='mx-1 my-1 border px-4 py-2 rounded-2xl text-xs hover:bg-gray-100'>T-shirts,Polo & Henleys</button>
        <button className='mx-1 my-1 border px-4 py-2 rounded-2xl text-xs hover:bg-gray-100'>Suits & Blazers</button>
        <button className='mx-1 my-1 border px-4 py-2 rounded-2xl text-xs hover:bg-gray-100'>Short & Swim</button>
        <button className='mx-1 my-1 border px-4 py-2 rounded-2xl text-xs hover:bg-gray-100'>Golf</button>
        <button className='mx-1 my-1 border px-4 py-2 rounded-2xl text-xs hover:bg-gray-100'>Sweaters & Sweatshirts</button>
        <button className='mx-1 my-1 border px-4 py-2 rounded-2xl text-xs hover:bg-gray-100'>Outerwear</button>
        <button className='mx-1 my-1 border px-4 py-2 rounded-2xl text-xs hover:bg-gray-100'>Accessories</button>
      </div>
    </div>
  )
}
