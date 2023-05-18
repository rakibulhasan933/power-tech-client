import React from 'react'
import logo from "../components/assets/logo.png";
import Image from 'next/image';
function Footer() {
	return (
		<footer className='mx-40 my-6' >
			<hr className="w-full my-8 " />
			<div className="">
				<div className="flex justify-center pb-10 px-15">
					<Image src={logo} width={312} height={60} alt='logo' />
				</div>
				<div className="flex flex-row justify-between">
					<div className="flex flex-col justify-start gap-2 ">
						<h2 className="text-2xl font-bold text-blue-400">PowerTech</h2>
						<ul>
							<li className="">Home</li>
							<li className="">Shop</li>
							<li className="">Awards</li>
							<li className="">About Us</li>
							<li className="">Our Factory</li>
							<li className="">Global Operations</li>
						</ul>
					</div>
					<div className="flex flex-col justify-start gap-2 ">
						<h2 className="text-2xl font-bold text-blue-400">PowerTech</h2>
						<ul>
							<li className="">Home</li>
							<li className="">Shop</li>
							<li className="">Awards</li>
							<li className="">About Us</li>
							<li className="">Our Factory</li>
							<li className="">Global Operations</li>
						</ul>
					</div>
					<div className="flex flex-col justify-start gap-2 ">
						<h2 className="text-2xl font-bold text-blue-400">PowerTech</h2>
						<ul>
							<li className="">Home</li>
							<li className="">Shop</li>
							<li className="">Awards</li>
							<li className="">About Us</li>
							<li className="">Our Factory</li>
							<li className="">Global Operations</li>
						</ul>
					</div>
					<div className="flex flex-col justify-start gap-2 ">
						<h2 className="text-2xl font-bold text-blue-400">PowerTech</h2>
						<ul>
							<li className="">Home</li>
							<li className="">Shop</li>
							<li className="">Awards</li>
							<li className="">About Us</li>
							<li className="">Our Factory</li>
							<li className="">Global Operations</li>
						</ul>
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