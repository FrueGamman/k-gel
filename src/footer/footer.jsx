import React from 'react'
import {FaInstagram,FaFacebookF,FaYoutube,FaTwitter} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { empireToken } from '../utils/enum'

export default function footer() {
    return (
        <div className='bg-gray-50 py-2 text-black'>
            <div>
                <footer className="pt-8 pb-6">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap text-left lg:text-left">
                            <div className="w-full lg:w-6/12 px-4 leading-loose">
                                <h5 className="text-xl mt-0 mb-5 text-blueGray-600">
                                    Want exclusive offers and first access to products? Sign up for email alerts..
                                </h5>
                                <div className=" z-10 items-center mx-auto mb-8 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                                    <div className="w-full z-10">
                                        <label for="email" className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
                                        <input value={`${localStorage.getItem(empireToken.EMAIL)?? ""}`} className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-black sm:rounded-none sm:rounded-l-lg focus:bg-gray-200 focus:border-gray-200 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-black dark:text-gray-600 dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter your email" type="email" id="email" required="" />
                                    </div>
                                    <div>
                                        <button type="submit" className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border border-black cursor-pointer bg-black border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-gray-700 dark:focus:ring-gray-200">Subscribe</button>
                                    </div>
                                </div>
                                <div className="mt-6 lg:mb-0 mb-6 flex space-x-8">
                                    <a href={'https://instagram.com/empiremenswear7?igshid=MzRlODBiNWFlZA=='} target='_blank'>
                                        <FaInstagram  size={24} color='pink' className=' text-gray-400 cursor-pointer' />
                                    </a>
                                   <a href='https://m.youtube.com/@thetrainerofficial' target='_blank'>
                                   <FaYoutube size={24} color='red' className='text-gray-400  cursor-pointer'/>
                                   </a>
                                </div>
                            </div>
                            <div className="w-full lg:w-6/12 px-4">
                                <div className="flex flex-wrap items-top mb-6">
                                    <div className="w-full lg:w-5/12 px-4 ml-auto">
                                        <ul className="list-unstyled">
                                            <li>
                                                <a className="text-blueGray-600 hover:text-blue-800  block pb-2 text-sm" href="">About Us</a>
                                            </li>
                                            <li>
                                                <Link to={'/contactus'}>
                                                <a className="text-blueGray-600 hover:text-blue-800  block pb-2 text-sm" href="">Any concern contact us</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <a className="text-blueGray-600 hover:text-blue-800  block pb-2 text-sm" href="">Return</a>
                                            </li>
                                            <li>
                                                <a className="text-blueGray-600 hover:text-blue-800  block pb-2 text-sm" href="https://www.google.com/maps/@-1.9733642,30.0534132,13z?entry=ttu" target="_blank">Guideshop Location</a>
                                            </li>
                                            
                                            <li>
                                                <a className="text-blueGray-600 hover:text-blue-800  block pb-2 text-sm" href="">Empiremenswear App</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="w-full lg:w-5/12 px-4">
                                        <ul className="list-unstyled">
                                            <li>
                                                <a className="text-blueGray-600 hover:text-blue-800  block pb-2 text-sm" href="">First Responeders</a>
                                            </li>
                                            <li>
                                                <a className="text-blueGray-600 hover:text-blue-800  block pb-2 text-sm" href="">About our Ads</a>
                                            </li>                                            
                                            <li>
                                                <a className="text-blueGray-600 hover:text-blue-800  block pb-2 text-sm" href="">Accessibility</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </footer>
            </div>
        </div>
    )
}
