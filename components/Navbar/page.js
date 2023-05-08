"use client"
import React from 'react';
import { BiCurrentLocation } from 'react-icons/bi';
import { BiPhoneCall, BiUserCircle } from 'react-icons/bi';
import { FaSearch, } from 'react-icons/fa';
import logo from '../assets/logo.png';
import Image from 'next/image';
import Link from 'next/link';

function Navbar() {
	return (
		<nav>
			<div className='px-40'>
				<div className="flex flex-col md:justify-around md:flex-row ">
					<div className="flex flex-col items-center md:flex-row">
						<div className="flex flex-row items-center mr-4 ">
							<BiCurrentLocation className='text-xs ' />
							<p className='text-xs '>Bangladesh</p>
						</div>
						<div className="flex flex-row items-center ">
							<BiPhoneCall className='text-xs ' />
							<p className='text-xs '>01915-106-105</p>
						</div>
					</div>
					<div className="flex flex-col items-center py-2 md:flex-row">
						<div className="mx-4 text-xs font-medium cursor-pointer hover:border-b-4 hover:border-blue-600 hover:text-blue-600">About</div>
						<div className="mx-4 text-xs font-medium cursor-pointer hover:border-b-4 hover:border-blue-600 hover:text-blue-600">FAQ</div>
						<div className="mx-4 text-xs font-medium cursor-pointer hover:border-b-4 hover:border-blue-600 hover:text-blue-600">Shop</div>
						<div className="mx-4 text-xs font-medium cursor-pointer hover:border-b-4 hover:border-blue-600 hover:text-blue-600">Contacts</div>
						<div className="px-2 py-1 mx-4 text-sm text-white bg-blue-500 rounded-md cursor-pointer hover:bg-blue-700">Login</div>
					</div>
				</div>
				<hr className='w-full ' />
				<div className="flex flex-col items-center py-4 md:flex-row">
					<div className="mr-1 basis-1/4 ">
						<Link className='cursor-pointer' href="/"><Image src={logo} alt='logo' height={60} width={312} /></Link>
					</div>
					<div className=" basis-6/12">
						<form className='relative flex flex-row w-full mx-2 border-none'>
							<input type="text" className='w-full px-4 py-2 bg-white border-2 rounded-lg' placeholder='Search Products' ></input>
							<button className='absolute text-xl right-4 top-3 hover:text-blue-600'><FaSearch /></button>
						</form>
					</div>
					<div className="ml-2 basis-1/4">
						<div className="flex flex-row">
							<BiUserCircle className='ml-3 text-3xl' />
							<BiUserCircle className='mx-3 text-3xl' />
							<BiUserCircle className='mr-3 text-3xl' />
						</div>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Navbar