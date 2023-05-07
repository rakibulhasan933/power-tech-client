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
		<nav className='bg-gray-50'>
			<div className='px-40'>
				<div className="flex flex-col justify-center text-center md:justify-around md:flex-row ">
					<div className="flex flex-row justify-center ">
						<div className="flex flex-row items-center gap-1 mr-8">
							<BiCurrentLocation className='text-sm ' />
							Bangladesh
						</div>
						<div className="flex flex-row items-center gap-1">
							<BiPhoneCall className='text-sm ' />
							02789838,01915-106-105</div>
					</div>
					<div className="flex flex-col items-center py-2 md:flex-row">
						<div className="mx-4 text-sm font-medium cursor-pointer hover:border-b-4 hover:border-blue-600 hover:text-blue-600">About</div>
						<div className="mx-4 text-sm font-medium cursor-pointer hover:border-b-4 hover:border-blue-600 hover:text-blue-600">Sale</div>
						<div className="mx-4 text-sm font-medium cursor-pointer hover:border-b-4 hover:border-blue-600 hover:text-blue-600">FAQ</div>
						<div className="mx-4 text-sm font-medium cursor-pointer hover:border-b-4 hover:border-blue-600 hover:text-blue-600">Shop</div>
						<div className="mx-4 text-sm font-medium cursor-pointer hover:border-b-4 hover:border-blue-600 hover:text-blue-600">Contacts</div>
						<div className="px-2 py-0 mx-4 text-lg text-white bg-blue-300 rounded-md cursor-pointer hover:bg-blue-500">Login</div>
					</div>
				</div>
				<hr className='w-full ' />
				<div className="flex flex-row items-center gap-2 py-4">
					<div className="basis-1/4">
						<Link className='cursor-pointer' href="/"><Image src={logo} alt='logo' width={240} height={120} /></Link>
					</div>
					<div className="basis-2/4">
						<form className='relative flex flex-row border-none'>
							<input type="search" className='w-full px-4 py-2 bg-white border-2 rounded-lg' placeholder='Search Products' ></input>
							<button className='absolute text-xl right-4 top-3 hover:text-blue-600'><FaSearch /></button>
						</form>
					</div>
					<div className="mx-4 basis-1/4">
						<div className="flex flex-row items-center gap-5">
							<BiUserCircle className='mr-4 text-3xl' />
							<BiUserCircle className='mr-4 text-3xl' />
							<BiUserCircle className='text-3xl' />
						</div>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Navbar