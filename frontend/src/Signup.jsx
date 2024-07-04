import React, { useState } from 'react';
import axios from 'axios';
import {  FaEye, FaUser } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaLock } from 'react-icons/fa';

const Signup = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    const newUser = { fullName, email, password };
    await axios.post('http://localhost:5000/signup', newUser);
    alert('User registered successfully');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden">
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="bg-yellow-500 w-40 h-40 absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 transform rotate-45"></div>
        <div className="bg-yellow-500 w-40 h-40 absolute top-1/4 right-0 translate-x-1/2 -translate-y-1/2 transform rotate-12"></div>
        <div className="bg-green-500 w-40 h-40 absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 transform rotate-6"></div>
        <div className="bg-green-500 w-40 h-40 absolute bottom-1/4 right-0 translate-x-1/2 translate-y-1/2 transform rotate-45"></div>
        <div className="bg-yellow-500 w-20 h-20 absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 transform rotate-45"></div>
        <div className="bg-green-500 w-20 h-20 absolute bottom-1/3 right-1/3 translate-x-1/2 translate-y-1/2 transform rotate-12"></div>
      </div>
      <div className="relative p-8 bg-gray-100 rounded-lg shadow-lg max-w-md w-full z-10">
        <h2 className="text-3xl font-bold mb-8 text-center">Signup</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative flex "> 
      
            <FaUser className='mt-3  absolute ml-3' />
           <input
            type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              className="w-full p-3 pl-10 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-400">
              
            </span>
          </div>
          <div className="relative flex">
           
            <FaEnvelope className='mt-3 absolute ml-3' />
           <input
              type="email"
              placeholder="Email ID"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 pl-10 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
           
            
          </div>
          <div className="relative flex">
            
              <FaLock className='mt-3 absolute ml-3' />
            <input
            
              type="password"
              placeholder="Create a Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 pl-10 border border-gray-300  rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
           
            
          </div>
          <div className="relative flex">
            <FaEye className='flex justify-end absolute ml-80 mt-3 h-5 w-7'/>
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full p-3 pl-10 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
           
          </div>
          <div className='flex justify-center'> 
          <button
            type="submit"
            className="pl-20 pr-20 py-3 bg-blue-500 text-white rounded-3xl hover:bg-blue-600 transition duration-200"
          >
            Signup
          </button>
          </div>
        </form>
        <p className="mt-4 text-center">
          Already have an account? <a href="/login" className="text-red-500">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
