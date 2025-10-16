import React from 'react'
import SiderBar from './siderbar'
import { Link } from "react-router-dom";
import { IoMdArrowDropdown } from 'react-icons/io'

export default function SimpleNav(props) {
    return (
        <div className='max-w-7xl mx-auto my-12 flex'>
            <section className=''>
                <div className='z-0'>
                {props.children}
                </div>
            </section>
        </div>
    )
}
