import React from 'react'
import ShowModalMenu from './ShowModal'
export default function BestSeller({src,name,type,price ,id}) {

    return (
        <div>
            <section className="mx-auto w-fit p-2">
                <div className="w-72 h-fit group">
                    <div className="overflow-hidden">
                        <img className=" h-96 w-full object-cover" src={`${src}`} alt="" />
                        <div className="relative h-full w-full bg-black/20 flex items-center justify-center bottom-0 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <ShowModalMenu itemdata={id} />
                        </div>
                    </div>
                    <div className='flex justify-between my-3'>
                        <h2 className="mt-0 text-lg capitalize font-semibold text-white">{name}</h2>
                        <p className="mt-0 ml-1 text-base inline-block -mb-4 text-white">{price}</p>
                    </div>
                    <p className="text-lg inline-block text-white">{type}</p>
                </div>
            </section>
        
        </div>
    )
}
