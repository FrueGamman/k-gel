import React from 'react'
import BestSeller from '../components/modal/bestSeller'
import { featuredHighlight } from '../home/data'
import { apiUrl } from '../utils/env'
import { Link } from 'react-router-dom'
export default function ProductCard({src,name}) {
    return (
        <div>
           <Link to={'/detail'}>
            <div className="relative mt-2 flex w-full max-w-xs flex-col overflow-hidden border border-gray-100 bg-white shadow-md">
                <a className="relative  flex  overflow-hidden " href="#">
                    <img className="object-cover h-96 w-fit" src={`${apiUrl}${src}`} />
                    <span className="absolute bottom-0 left-0 m-2  px-2 text-center text-sm font-bold text-slate-700">5 Fit</span>
                    <span className="absolute bottom-0 right-0 m-2  px-2 text-center bg-white text-xs font-bold text-slate-700  py-1">Icon Status</span>
                   
                </a>
                <div className="mt-4 px-2 pb-5">
                    <a href="#" className='flex justify-between' >
                        <h5 className="text-sm tracking-tight text-slate-900">{name}</h5>
                        <h5 className="text-xs tracking-tight text-slate-900">$99</h5>
                    </a>
                    <a href="#" className='flex justify-between' >
                        <h5 className="text-xs tracking-tight text-slate-900">Gray</h5>
                    </a>
                    <a href="#" className='flex my-1' >
                        <h5 className="text-xs tracking-tight text-gray-500">Our best chino, updated with non-iron, 4-way stretch cotton & a secure zip pocket.</h5>
                    </a>
                    <div className="mt-2 mb-2 flex items-center justify-between">
                        <div className="flex items-center gap-4 my-3">
                            <div className='cursor-pointer bg-blue-400 rounded-full w-5 h-5  p-1 '></div>
                            <div className='cursor-pointer bg-gray-400 rounded-full w-5 h-5  p-1 '></div>
                            <div className='cursor-pointer bg-red-400 rounded-full w-5 h-5  p-1 '></div>
                            <div className='cursor-pointer bg-orange-400 rounded-full w-5 h-5  p-1 '></div>

                        </div>
                    </div>

                </div>
            </div>
            </Link>
        </div>
    )
}
