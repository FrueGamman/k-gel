// Modal.jsx
import React, { useState } from 'react';
import {Link} from "react-router-dom";

const Modal = ({ closeModal }) => {
    const [activeTab, setActiveTab] = useState('signIn');

    const switchToSignIn = () => {
        setActiveTab('signIn');
    };

    const switchToSignUp = () => {
        setActiveTab('signUp');
    };

    const handleLogin = () => {
        // Perform your login logic here

        // Close the modal
        closeModal();
        window.location.href="/user_dashboard";
    };

    return (
        <div className="modal-overlay fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
            <div className="modal bg-white rounded-lg p-6 w-96">
                <div className="modal-header flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold text-blue-400">Create account for procced checkout</h2>
                    <button className="text-2xl" onClick={closeModal}>&times;</button>
                </div>
                <div className="modal-tabs flex mb-4">
                    <button
                        className={`tab-button ${activeTab === 'signIn' ? 'border-b-2 border-blue-500' : ''}`}
                        onClick={switchToSignIn}
                    >
                        Sign In
                    </button> &nbsp;&nbsp;&nbsp;&nbsp;
                    <button
                        className={`tab-button ${activeTab === 'signUp' ? 'border-b-2 border-blue-500' : ''}`}
                        onClick={switchToSignUp}
                    >
                        Sign Up
                    </button>
                </div>
                <div className="modal-content">
                    {activeTab === 'signIn' && (
                        <div>
                            <label className="block mb-2">Email</label>
                            <input
                                type="email"
                                className="w-full px-3 py-2 border rounded-md mb-4"
                                placeholder="Enter your email"
                            />
                            <label className="block mb-2">Password</label>
                            <input
                                type="password"
                                className="w-full px-3 py-2 border rounded-md mb-4"
                                placeholder="Enter your password"
                            />

                            <button
                                type="button"
                                className="bg-black w-full text-white px-6 py-2 rounded-md"
                                onClick={handleLogin}
                            >
                                Log In
                            </button>
                        </div>
                    )}
                    {activeTab === 'signUp' && (
                        <div>
                            <label className="block mb-2">Name</label>
                            <input
                                type="text"
                                className="w-full px-3 py-2 border rounded-md mb-2"
                                placeholder="Enter your name"
                            />
                            <label className="block mb-2">Email</label>
                            <input
                                type="email"
                                className="w-full px-3 py-2 border rounded-md mb-2"
                                placeholder="Enter your email"
                            />
                            <label className="block mb-2">Phone</label>
                            <input
                                type="tel"
                                className="w-full px-3 py-2 border rounded-md mb-2"
                                placeholder="Enter your phone number"
                            />
                            <label className="block mb-2">Password</label>
                            <input
                                type="password"
                                className="w-full px-3 py-2 border rounded-md mb-2"
                                placeholder="Enter your password"
                            />
                            <button className="bg-black w-full text-white px-6 py-2 rounded-md">Create Account</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Modal;
