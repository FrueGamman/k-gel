import React from 'react'
import { Link } from "react-router-dom";
import { IoMdArrowDropdown } from 'react-icons/io'
import ProductCard from './ProductCard';
import { bestData } from './clothData';
import { featuredHighlight } from '../home/data';
export default function Clothing() {
  return (
    <div className=' ml-4'>

      <div className='overflow-hidden grid lg:grid-cols-3 gap-3 justify-center z-20'>
        { featuredHighlight.map((item, index) => {
          return (
            <ProductCard src={`${item.image}`} />
          )
        })}
      </div>
    </div >
  )
}
