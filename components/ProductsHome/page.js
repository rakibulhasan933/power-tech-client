"use client";
import { BsArrowRight } from "react-icons/bs";
import React from 'react'
import Image from "next/image";
import drone from "../assets/drone.jpg";

function ProductsHome() {
	return (
		<div>
			<div className='py-20'>
				<div className="flex items-center justify-between ">
					<div className="flex items-center ">
						<div className="w-3 mr-4 bg-blue-400 h-11">
						</div>
						<h2 className="text-5xl font-bold ">Products</h2>
					</div>
					<div className="flex items-center">
						<button className='flex items-center text-lg'>Details</button>
						<BsArrowRight className='w-full text-lg' />
					</div>
				</div>
				<div className="grid grid-cols-3 gap-16 pt-20">
					<div className="flex flex-col justify-center rounded">
						<Image src={drone} className=" w-full rounded transition-opacity opacity-0 duration-[1s] mb-8"
							onLoadingComplete={(image) => image.classList.remove("opacity-0")} alt='drone' />
						<div className="flex flex-col items-center">
							<h3 className="mb-5 text-xl font-medium ">Drone</h3>
							<h2 className="mb-5 text-3xl font-semibold text-orange-500 ">$305</h2>
							<button className="w-full px-12 py-4 text-lg font-bold text-white bg-blue-400 rounded">Add To Cart</button>
						</div>
					</div>
					<div className="flex flex-col justify-center rounded">
						<Image src={drone} className=" w-full rounded transition-opacity opacity-0 duration-[1s] mb-8"
							onLoadingComplete={(image) => image.classList.remove("opacity-0")} alt='drone' />
						<div className="flex flex-col items-center">
							<h3 className="mb-5 text-xl font-medium ">Drone</h3>
							<h2 className="mb-5 text-3xl font-semibold text-orange-500 ">$305</h2>
							<button className="w-full px-12 py-4 text-lg font-bold text-white bg-blue-400 rounded">Add To Cart</button>
						</div>
					</div>
					<div className="flex flex-col justify-center rounded">
						<Image src={drone} className=" w-full rounded transition-opacity opacity-0 duration-[1s] mb-8"
							onLoadingComplete={(image) => image.classList.remove("opacity-0")} alt='drone' />
						<div className="flex flex-col items-center">
							<h3 className="mb-5 text-xl font-medium ">Drone</h3>
							<h2 className="mb-5 text-3xl font-semibold text-orange-500 ">$305</h2>
							<button className="w-full px-12 py-4 text-lg font-bold text-white bg-blue-400 rounded">Add To Cart</button>
						</div>
					</div>
					<div className="flex flex-col justify-center rounded">
						<Image src={drone} className=" w-full rounded transition-opacity opacity-0 duration-[1s] mb-8"
							onLoadingComplete={(image) => image.classList.remove("opacity-0")} alt='drone' />
						<div className="flex flex-col items-center">
							<h3 className="mb-5 text-xl font-medium ">Drone</h3>
							<h2 className="mb-5 text-3xl font-semibold text-orange-500 ">$305</h2>
							<button className="w-full px-12 py-4 text-lg font-bold text-white bg-blue-400 rounded">Add To Cart</button>
						</div>
					</div>
					<div className="flex flex-col justify-center rounded">
						<Image src={drone} className=" w-full rounded transition-opacity opacity-0 duration-[1s] mb-8"
							onLoadingComplete={(image) => image.classList.remove("opacity-0")} alt='drone' />
						<div className="flex flex-col items-center">
							<h3 className="mb-5 text-xl font-medium ">Drone</h3>
							<h2 className="mb-5 text-3xl font-semibold text-orange-500 ">$305</h2>
							<button className="w-full px-12 py-4 text-lg font-bold text-white bg-blue-400 rounded">Add To Cart</button>
						</div>
					</div>
					<div className="flex flex-col justify-center rounded">
						<Image src={drone} className=" w-full rounded transition-opacity opacity-0 duration-[1s] mb-8"
							onLoadingComplete={(image) => image.classList.remove("opacity-0")} alt='drone' />
						<div className="flex flex-col items-center">
							<h3 className="mb-5 text-xl font-medium ">Drone</h3>
							<h2 className="mb-5 text-3xl font-semibold text-orange-500 ">$305</h2>
							<button className="w-full px-12 py-4 text-lg font-bold text-white bg-blue-400 rounded">Add To Cart</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProductsHome