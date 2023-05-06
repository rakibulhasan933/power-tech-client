"use client"
import React from 'react';
import { BiCurrentLocation } from 'react-icons/bi';
import { BiPhoneCall } from 'react-icons/bi';
import { FaSearch } from 'react-icons/fa';
import logo from '../assets/logo.png';
import Image from 'next/image';

function Navbar() {
	return (
		<nav className='bg-gray-50'>
			<div className="py-1">
				<div className="flex flex-col justify-center text-center md:justify-around md:flex-row ">
					<div className="flex flex-row justify-center ">
						<div className="flex flex-row items-center gap-1 mr-8">
							<BiCurrentLocation className='text-xl ' />
							Bangladesh
						</div>
						<div className="flex flex-row items-center gap-1">
							<BiPhoneCall className='text-xl ' />
							02789838,01915-106-105</div>
					</div>
					<div className="flex flex-col items-center md:flex-row">
						<div className="mx-4 font-medium cursor-pointer hover:border-b-4 hover:border-blue-600 hover:text-blue-600">About</div>
						<div className="mx-4 font-medium cursor-pointer hover:border-b-4 hover:border-blue-600 hover:text-blue-600">Sale</div>
						<div className="mx-4 font-medium cursor-pointer hover:border-b-4 hover:border-blue-600 hover:text-blue-600">FAQ</div>
						<div className="mx-4 font-medium cursor-pointer hover:border-b-4 hover:border-blue-600 hover:text-blue-600">Shop</div>
						<div className="mx-4 font-medium cursor-pointer hover:border-b-4 hover:border-blue-600 hover:text-blue-600">Contacts</div>
						<div className="px-4 py-2 mx-4 font-medium text-white bg-blue-300 rounded-md cursor-pointer hover:bg-blue-500">Login</div>
					</div>
				</div>
			</div>
			<hr className='w-full ' />
			<div className="flex flex-row items-center px-8 py-8">
				<div className="mx-4 basis-1/4">
					<Image src={logo} alt='logo' width={240} height={120} />
				</div>
				<div className="basis-2/4">
					<form className='flex flex-row rounded-lg '>
						<input type="search" className='w-full px-4 py-2 border-white' placeholder='Search' />
						<button type="submit"><FaSearch /></button>
					</form>
				</div>
				<div className="px-4 mx-4 basis-1/4">Cart</div>
			</div>
		</nav>
	)
}

export default Navbar