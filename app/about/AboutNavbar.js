"use client"
import React from 'react';
import { BiCurrentLocation } from 'react-icons/bi';
import { BiPhoneCall } from 'react-icons/bi';
import logo from '../../components/assets/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineHome } from 'react-icons/ai';



function AboutNavbar() {
	return (
		<nav>
			<div>
				<div>
					<div className="flex items-center justify-between p-2">
						<div className="flex items-center">
							<div className="flex flex-row items-center mr-4 ">
								<BiCurrentLocation className='text-xs ' />
								<p className='text-xs'>Bangladesh</p>
							</div>
							<div className="flex flex-row items-center ">
								<BiPhoneCall className='text-xs ' />
								<p className='text-xs '>01915-106-105</p>
							</div>
						</div>
						<div className='mr-4' >
							<Link className='cursor-pointer' href="/"><Image src={logo} alt='logo' height={40} width={312} /></Link>
						</div>
						<div className="flex items-center py-2 md:flex-row">
							<Link href='/'>
								<div className="flex flex-row items-center justify-center gap-0 hover:border-b-4 hover:border-blue-600 hover:text-blue-600">
									<AiOutlineHome className='flex items-center pb-1 text-2xl ' />
									<p className="text-xs font-medium cursor-pointer">Home</p>
								</div>
							</Link>
							<Link href='about'>
								<p className="mx-4 text-xs font-medium text-blue-600 border-b-4 border-blue-600 cursor-pointer">About</p>
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
			</div>
		</nav>
	)
}

export default AboutNavbar