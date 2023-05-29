"use client"
import Image from 'next/image';
import React from 'react';
import { BsArrowRight, BsFillStarFill } from "react-icons/bs";
import mac from "../assets/macbook.jpg";

function Arrived() {
	return (
		<div>
			<div className='pt-20'>
				<div className="flex items-center justify-between">
					<div className="flex items-center ">
						<div className="w-3 mr-4 bg-blue-400 h-11">
						</div>
						<h2 className="text-5xl font-bold ">Newly Arrived</h2>
					</div>
					<div className="">
						<button className='flex items-center'>More <BsArrowRight className='w-full ' /> </button>
					</div>
				</div>
				<div className="grid grid-cols-2 gap-6 pt-20">
					<div className="flex flex-row items-center bg-blue-100 rounded">
						<Image src={mac} className='object-cover w-1/2 h-full rounded-md ' alt='laptop' />
						<div className="flex flex-col justify-start px-4 py-2 ">
							<div className="flex flex-row items-center gap-0">
								<BsFillStarFill className='text-xs text-amber-600' />
								<p className="ml-2 text-xs">(4.9)</p>
							</div>
							<p className="my-1 text-xs font-light">Available now</p>
							<h2 className="my-1 text-xl font-bold">The New POWERTECH Laptop</h2>
							<p className="my-1 text-xs font-light">See Rich, ibrant colors and incredible
								contrast, even in well-lit rooms.
							</p>
							<h2 className="my-1 text-xl font-bold text-orange-500">$400</h2>
							<button className='w-full px-4 py-2 text-lg font-bold text-white bg-blue-400 rounded'>Add To Cart</button>
						</div>
					</div>
					<div className="flex flex-row items-center bg-blue-100 rounded">
						<Image src={mac} className='object-cover w-1/2 h-full rounded-md ' alt='laptop' />
						<div className="flex flex-col justify-start px-4 py-2 ">
							<div className="flex flex-row items-center gap-0">
								<BsFillStarFill className='text-xs text-amber-600' />
								<p className="ml-2 text-xs">(4.9)</p>
							</div>
							<p className="my-1 text-xs font-light">Available now</p>
							<h2 className="my-1 text-xl font-bold">The New POWERTECH Laptop</h2>
							<p className="my-1 text-xs font-light">See Rich, ibrant colors and incredible
								contrast, even in well-lit rooms.
							</p>
							<h2 className="my-1 text-xl font-bold text-orange-500">$400</h2>
							<button className='w-full px-4 py-2 text-lg font-bold text-white bg-blue-400 rounded'>Add To Cart</button>
						</div>
					</div>
					<div className="flex flex-row items-center bg-blue-100 rounded">
						<Image src={mac} className='object-cover w-1/2 h-full rounded-md ' alt='laptop' />
						<div className="flex flex-col justify-start px-4 py-2 ">
							<div className="flex flex-row items-center gap-0">
								<BsFillStarFill className='text-xs text-amber-600' />
								<p className="ml-2 text-xs">(4.9)</p>
							</div>
							<p className="my-1 text-xs font-light">Available now</p>
							<h2 className="my-1 text-xl font-bold">The New POWERTECH Laptop</h2>
							<p className="my-1 text-xs font-light">See Rich, ibrant colors and incredible
								contrast, even in well-lit rooms.
							</p>
							<h2 className="my-1 text-xl font-bold text-orange-500">$400</h2>
							<button className='w-full px-4 py-2 text-lg font-bold text-white bg-blue-400 rounded'>Add To Cart</button>
						</div>
					</div>
					<div className="flex flex-row items-center bg-blue-100 rounded">
						<Image src={mac} className='object-cover w-1/2 h-full rounded-md ' alt='laptop' />
						<div className="flex flex-col justify-start px-4 py-2 ">
							<div className="flex flex-row items-center gap-0">
								<BsFillStarFill className='text-xs text-amber-600' />
								<p className="ml-2 text-xs">(4.9)</p>
							</div>
							<p className="my-1 text-xs font-light">Available now</p>
							<h2 className="my-1 text-xl font-bold">The New POWERTECH Laptop</h2>
							<p className="my-1 text-xs font-light">See Rich, ibrant colors and incredible
								contrast, even in well-lit rooms.
							</p>
							<h2 className="my-1 text-xl font-bold text-orange-500">$400</h2>
							<button className='w-full px-4 py-2 text-lg font-bold text-white bg-blue-400 rounded'>Add To Cart</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Arrived