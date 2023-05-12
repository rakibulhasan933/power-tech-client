"use client"
import Image from 'next/image';
import React from 'react';
import { AiOutlineArrowRight } from "react-icons/ai";
import mac from "../assets/macbook.jpg";

function Arrived() {
	return (
		<div className='pt-36'>
			<div className="flex items-center justify-between ">
				<div className="flex items-center ">
					<div className="w-3 mr-4 bg-blue-700 h-11">
					</div>
					<h2 className="text-5xl font-bold ">Newly Arrived</h2>
				</div>
				<div className="">
					<button className='flex items-center '>View more <AiOutlineArrowRight className='w-12 mr-2 ' /> </button>
				</div>
			</div>
			<div className="grid grid-cols-2 gap-6 pt-20">
				<div className="flex flex-row pt-5 bg-blue-100 rounded px-7">
					<div className="basis-1/2">
						<Image src={mac} className="w-full rounded transition-opacity opacity-0 duration-[1s] mb-8"
							onLoadingComplete={(image) => image.classList.remove("opacity-0")} alt='laptop' />
					</div>
					<div className="flex flex-col py-2 ml-6 basis-1/2">
						<p className="mb-1 text-xs font-light">Available now</p>
						<h2 className="mb-1 text-xl font-bold ">the new <br />
							POWERTECH laptop</h2>
						<p className="mb-1 text-xs font-light">See rich, vibrant colors and incredible
							contrast, even in well-lit rooms.
						</p>
						<h2 className="mb-1 text-xl font-bold text-orange-500">$400</h2>
						<button className='w-1/2 text-sm text-white bg-blue-400 rounded '>Add to Cart</button>
					</div>
				</div>
				<div className="flex flex-row pt-5 bg-blue-100 rounded px-7">
					<div className="basis-1/2">
						<Image src={mac} className="w-full rounded transition-opacity opacity-0 duration-[1s] mb-8"
							onLoadingComplete={(image) => image.classList.remove("opacity-0")} alt='laptop' />
					</div>
					<div className="flex flex-col py-2 ml-6 basis-1/2">
						<p className="mb-1 text-xs font-light">Available now</p>
						<h2 className="mb-1 text-xl font-bold ">the new <br />
							POWERTECH laptop</h2>
						<p className="mb-1 text-xs font-light">See rich, vibrant colors and incredible
							contrast, even in well-lit rooms.
						</p>
						<h2 className="mb-1 text-xl font-bold text-orange-500">$400</h2>
						<button className='w-1/2 text-sm text-white bg-blue-400 rounded '>Add to Cart</button>
					</div>
				</div>
				<div className="flex flex-row pt-5 bg-blue-100 rounded px-7">
					<div className="basis-1/2">
						<Image src={mac} className="w-full rounded transition-opacity opacity-0 duration-[1s] mb-8"
							onLoadingComplete={(image) => image.classList.remove("opacity-0")} alt='laptop' />
					</div>
					<div className="flex flex-col py-2 ml-6 basis-1/2">
						<p className="mb-1 text-xs font-light">Available now</p>
						<h2 className="mb-1 text-xl font-bold ">the new <br />
							POWERTECH laptop</h2>
						<p className="mb-1 text-xs font-light">See rich, vibrant colors and incredible
							contrast, even in well-lit rooms.
						</p>
						<h2 className="mb-1 text-xl font-bold text-orange-500">$400</h2>
						<button className='w-1/2 text-sm text-white bg-blue-400 rounded '>Add to Cart</button>
					</div>
				</div>
				<div className="flex flex-row pt-5 bg-blue-100 rounded px-7">
					<div className="basis-1/2">
						<Image src={mac} className="w-full rounded transition-opacity opacity-0 duration-[1s] mb-8"
							onLoadingComplete={(image) => image.classList.remove("opacity-0")} alt='laptop' />
					</div>
					<div className="flex flex-col py-2 ml-6 basis-1/2">
						<p className="mb-1 text-xs font-light">Available now</p>
						<h2 className="mb-1 text-xl font-bold ">the new <br />
							POWERTECH laptop</h2>
						<p className="mb-1 text-xs font-light">See rich, vibrant colors and incredible
							contrast, even in well-lit rooms.
						</p>
						<h2 className="mb-1 text-xl font-bold text-orange-500">$400</h2>
						<button className='w-1/2 text-sm text-white bg-blue-400 rounded '>Add to Cart</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Arrived