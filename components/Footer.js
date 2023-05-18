import React from 'react'
import logo from "../components/assets/logo.png";
import Image from 'next/image';
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import { BsFacebook, BsGoogle, BsYoutube, BsTwitter, BsInstagram, } from 'react-icons/bs';
function Footer() {
	return (
		<footer className='mx-40 my-6' >
			<hr className="w-full my-8 " />
			<div className="">
				<div className="flex justify-center pb-10 px-15">
					<Image src={logo} width={312} height={60} alt='logo' />
				</div>
				<div className="flex flex-row justify-between">
					<div className="flex flex-col justify-start">
						<h2 className="mb-6 text-2xl font-bold text-blue-700">PowerTech</h2>
						<ul className='px-2'>
							<li className="mb-4 text-base font-light cursor-pointer hover:font-semibold hover:text-blue-600">Home</li>
							<li className="mb-4 text-base font-light cursor-pointer hover:font-semibold hover:text-blue-600">Shop</li>
							<li className="mb-4 text-base font-light cursor-pointer hover:font-semibold hover:text-blue-600">Awards</li>
							<li className="mb-4 text-base font-light cursor-pointer hover:font-semibold hover:text-blue-600">About Us</li>
							<li className="mb-4 text-base font-light cursor-pointer hover:font-semibold hover:text-blue-600">Our Factory</li>
							<li className="mb-4 text-base font-light cursor-pointer hover:font-semibold hover:text-blue-600">Global Operations</li>
						</ul>
					</div>
					<div className="flex flex-col justify-start">
						<h2 className="mb-6 text-2xl font-bold text-blue-700">Support</h2>
						<ul className='px-2'>
							<li className="mb-4 text-base font-light cursor-pointer hover:font-semibold hover:text-blue-600">Contacts</li>
							<li className="mb-4 text-base font-light cursor-pointer hover:font-semibold hover:text-blue-600">Emergency</li>
							<li className="mb-4 text-base font-light cursor-pointer hover:font-semibold hover:text-blue-600">Sales Outlets</li>
							<li className="mb-4 text-base font-light cursor-pointer hover:font-semibold hover:text-blue-600">Customers Care</li>
							<li className="mb-4 text-base font-light cursor-pointer hover:font-semibold hover:text-blue-600">Shop Branches</li>
							<li className="mb-4 text-base font-light cursor-pointer hover:font-semibold hover:text-blue-600">Local Providers</li>
						</ul>
					</div>
					<div className="flex flex-col justify-start">
						<h2 className="mb-6 text-2xl font-bold text-blue-700">Newsroom</h2>
						<ul className='px-2'>
							<li className="mb-4 text-base font-light cursor-pointer hover:font-semibold hover:text-blue-600">TVC</li>
							<li className="mb-4 text-base font-light cursor-pointer hover:font-semibold hover:text-blue-600">Articles</li>
							<li className="mb-4 text-base font-light cursor-pointer hover:font-semibold hover:text-blue-600">National</li>
							<li className="mb-4 text-base font-light cursor-pointer hover:font-semibold hover:text-blue-600">International</li>
							<li className="mb-4 text-base font-light cursor-pointer hover:font-semibold hover:text-blue-600">Documentary</li>
							<li className="mb-4 text-base font-light cursor-pointer hover:font-semibold hover:text-blue-600">Special Events</li>
						</ul>
					</div>
					<div className="flex flex-col justify-start">
						<h2 className="mb-6 text-2xl font-bold text-blue-700">Subscribe Us</h2>
						<div className="flex flex-row gap-2 px-2">
							<BsFacebook className='mx-2 text-3xl text-blue-700 cursor-pointer hover:text-4xl ' />
							<BsYoutube className='mx-2 text-3xl text-red-700 cursor-pointer hover:text-4xl' />
							<BsInstagram className='mx-2 text-3xl text-red-700 cursor-pointer hover:text-4xl ' />
							<BsTwitter className='ml-2 text-3xl text-blue-700 cursor-pointer hover:text-4xl' />
						</div>
					</div>
				</div>
				<hr className="w-full my-4" />
				<div className="flex flex-row items-center justify-center">
					<div className="items-center mx-4">
						<p className="">©PowerTech 2023. All Rights Reserved.</p>
					</div>
					<div className="items-center mx-4">
						Brand photos
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer