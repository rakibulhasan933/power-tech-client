"use client";
import { AiOutlineArrowRight } from "react-icons/ai";
import React from 'react'
import Image from "next/image";
import drone from "../assets/drone.jpg";

function Products() {
	return (
		<div className='py-36'>
			<div className="flex items-center justify-between ">
				<div className="flex items-center ">
					<div className="w-3 mr-4 bg-blue-700 h-11">
					</div>
					<h2 className="text-5xl font-bold ">Products</h2>
				</div>
				<div className="">
					<button className='flex items-center '>Details <AiOutlineArrowRight className='w-12 mr-2 ' /> </button>
				</div>
			</div>
			<div className="grid grid-cols-3 gap-16 pt-20">
				<div className="flex flex-col justify-center">
					<Image src={drone} className=" w-full rounded-b-md rounded-t-2xl transition-opacity opacity-0 duration-[1s] mb-8"
						onLoadingComplete={(image) => image.classList.remove("opacity-0")} alt='drone' />
					<div className="flex flex-col items-center">
						<h3 className="mb-5 text-xl font-medium ">drone</h3>
						<h2 className="mb-5 text-3xl font-semibold text-orange-500 ">$305</h2>
						<button className="w-full px-12 py-4 font-bold text-white bg-blue-400 rounded-b-2xl rounded-t-md">Add to Card</button>
					</div>
				</div>
				<div className="flex flex-col justify-center ">
					<Image src={drone} className=" w-full rounded-b-md rounded-t-2xl transition-opacity opacity-0 duration-[1s] mb-8"
						onLoadingComplete={(image) => image.classList.remove("opacity-0")} alt='drone' />
					<div className="flex flex-col items-center">
						<h3 className="mb-5 text-xl font-medium ">drone</h3>
						<h2 className="mb-5 text-3xl font-semibold text-orange-500 ">$305</h2>
						<button className="w-full px-12 py-4 font-bold text-white bg-blue-400 rounded-b-2xl rounded-t-md">Add to Card</button>
					</div>
				</div>
				<div className="flex flex-col justify-center ">
					<Image src={drone} className=" w-full rounded-b-md rounded-t-2xl transition-opacity opacity-0 duration-[1s] mb-8"
						onLoadingComplete={(image) => image.classList.remove("opacity-0")} alt='drone' />
					<div className="flex flex-col items-center">
						<h3 className="mb-5 text-xl font-medium ">drone</h3>
						<h2 className="mb-5 text-3xl font-semibold text-orange-500 ">$305</h2>
						<button className="w-full px-12 py-4 font-bold text-white bg-blue-400 rounded-b-2xl rounded-t-md">Add to Card</button>
					</div>
				</div>
				<div className="flex flex-col justify-center ">
					<Image src={drone} className=" w-full rounded-b-md rounded-t-2xl transition-opacity opacity-0 duration-[1s] mb-8"
						onLoadingComplete={(image) => image.classList.remove("opacity-0")} alt='drone' />
					<div className="flex flex-col items-center">
						<h3 className="mb-5 text-xl font-medium ">drone</h3>
						<h2 className="mb-5 text-3xl font-semibold text-orange-500 ">$305</h2>
						<button className="w-full px-12 py-4 font-bold text-white bg-blue-400 rounded-b-2xl rounded-t-md">Add to Card</button>
					</div>
				</div>
				<div className="flex flex-col justify-center ">
					<Image src={drone} className=" w-full rounded-b-md rounded-t-2xl transition-opacity opacity-0 duration-[1s] mb-8"
						onLoadingComplete={(image) => image.classList.remove("opacity-0")} alt='drone' />
					<div className="flex flex-col items-center">
						<h3 className="mb-5 text-xl font-medium ">drone</h3>
						<h2 className="mb-5 text-3xl font-semibold text-orange-500 ">$305</h2>
						<button className="w-full px-12 py-4 font-bold text-white bg-blue-400 rounded-b-2xl rounded-t-md">Add to Card</button>
					</div>
				</div>
				<div className="flex flex-col justify-center ">
					<Image src={drone} className=" w-full rounded-b-md rounded-t-2xl transition-opacity opacity-0 duration-[1s] mb-8"
						onLoadingComplete={(image) => image.classList.remove("opacity-0")} alt='drone' />
					<div className="flex flex-col items-center">
						<h3 className="mb-5 text-xl font-medium ">drone</h3>
						<h2 className="mb-5 text-3xl font-semibold text-orange-500 ">$305</h2>
						<button className="w-full px-12 py-4 font-bold text-white bg-blue-400 rounded-b-2xl rounded-t-md">Add to Card</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Products