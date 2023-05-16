"use client"
import React from 'react';
import { BiCurrentLocation } from 'react-icons/bi';
import { BiPhoneCall, BiUserCircle } from 'react-icons/bi';
import { FaSearch, } from 'react-icons/fa';
import { AiOutlineHome } from "react-icons/ai";
import logo from '../assets/logo.png';
import Image from 'next/image';
import Link from 'next/link';

function Navbar() {
	return (
		<nav>
			<div className='mx-40'>
				<div>
					<div className="flex items-center justify-between">
						<div className="flex items-center">
							<div className="flex flex-row items-center mr-8 ">
								<BiCurrentLocation className='text-sm ' />
								<p className='text-sm'>Bangladesh</p>
							</div>
							<div className="flex flex-row items-center ">
								<BiPhoneCall className='text-sm ' />
								<p className='text-sm '>01915-106-105</p>
							</div>
						</div>
						<div className="flex items-center py-3 md:flex-row">
							<Link href='/'>
								<div className="flex flex-row items-center justify-center gap-0 text-blue-600 border-b-4 border-blue-600">
									<AiOutlineHome className='flex items-center pb-1 text-2xl ' />
									<p className="text-xs font-medium cursor-pointer">Home</p>
								</div>
							</Link>
							<Link href='about'>
								<p className="mx-4 text-xs font-medium cursor-pointer hover:border-b-4 hover:border-blue-600 hover:text-blue-600">About</p>
							</Link>
							<p className="mx-4 text-xs font-medium cursor-pointer hover:border-b-4 hover:border-blue-600 hover:text-blue-600">FAQ</p>
							<Link href='/products'>
								<p className="mx-4 text-xs font-medium cursor-pointer hover:border-b-4 hover:border-blue-600 hover:text-blue-600">Shop</p>
							</Link>
							<p className="text-xs font-medium cursor-pointer hover:border-b-4 hover:border-blue-800">Contacts</p>
							<p className="px-3 py-1 ml-4 text-sm text-white bg-blue-700 rounded-md cursor-pointer hover:text-base">Login</p>
						</div>
					</div>
				</div>
				<hr className='w-full ' />
				<div className="flex flex-row items-center justify-between py-4">
					<div className='mr-4' >
						<Link className='cursor-pointer' href="/"><Image src={logo} alt='logo' height={60} width={312} /></Link>
					</div>
					<div className='w-full ml-14'>
						<form className='relative flex flex-row w-full mx-2 border-none'>
							<input type="text" className='w-full px-4 py-2 bg-white border-2 rounded-lg focus:border-blue-500' placeholder='Search Products' ></input>
							<button className='absolute text-xl right-4 top-3 hover:text-blue-600'><FaSearch /></button>
						</form>
					</div>
					<div className='ml-16 '>
						<div className="flex flex-row">
							<BiUserCircle className='text-3xl' />
							<BiUserCircle className='ml-10 text-3xl' />
							<BiUserCircle className='ml-10 text-3xl' />
						</div>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Navbar