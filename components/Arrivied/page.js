"use client"
import Image from 'next/image';
import React from 'react';
import { AiOutlineArrowRight } from "react-icons/ai";
import mac from "../assets/macbook.jpg";

function Arrived() {
	return (
		<div className="mx-40">
			<div className='pt-20'>
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
					<div className="flex flex-row p-4 bg-blue-100 rounded">
						<div className="flex items-center justify-center p-2 basis-1/2">
							<Image src={mac} className="w-full h-full rounded transition-opacity opacity-0 duration-[1s]"
								onLoadingComplete={(image) => image.classList.remove("opacity-0")} alt='laptop' />
						</div>
						<div className="flex flex-col content-center p-4 basis-1/2">
							<p className="my-2 text-xs font-light ">Available now</p>
							<h2 className="my-2 text-xl font-bold ">the new <br />
								POWERTECH laptop</h2>
							<p className="my-2 text-xs font-light">See rich, vibrant colors and incredible
								contrast, even in well-lit rooms.
							</p>
							<h2 className="my-2 text-xl font-bold text-orange-500">$400</h2>
							<button className='w-full px-8 py-4 text-sm font-bold text-white uppercase bg-blue-400 rounded '>Add to Cart</button>
						</div>
					</div>
					<div className="flex flex-row p-4 bg-blue-100 rounded">
						<div className="flex items-center justify-center p-2 basis-1/2">
							<Image src={mac} className="w-full h-full rounded transition-opacity opacity-0 duration-[1s]"
								onLoadingComplete={(image) => image.classList.remove("opacity-0")} alt='laptop' />
						</div>
						<div className="flex flex-col content-center p-4 basis-1/2">
							<p className="my-2 text-xs font-light ">Available now</p>
							<h2 className="my-2 text-xl font-bold ">the new <br />
								POWERTECH laptop</h2>
							<p className="my-2 text-xs font-light">See rich, vibrant colors and incredible
								contrast, even in well-lit rooms.
							</p>
							<h2 className="my-2 text-xl font-bold text-orange-500">$400</h2>
							<button className='w-full px-8 py-4 text-sm font-bold text-white uppercase bg-blue-400 rounded '>Add to Cart</button>
						</div>
					</div>
					<div className="flex flex-row p-4 bg-blue-100 rounded">
						<div className="flex items-center justify-center p-2 basis-1/2">
							<Image src={mac} className="w-full h-full rounded transition-opacity opacity-0 duration-[1s]"
								onLoadingComplete={(image) => image.classList.remove("opacity-0")} alt='laptop' />
						</div>
						<div className="flex flex-col content-center p-4 basis-1/2">
							<p className="my-2 text-xs font-light ">Available now</p>
							<h2 className="my-2 text-xl font-bold ">the new <br />
								POWERTECH laptop</h2>
							<p className="my-2 text-xs font-light">See rich, vibrant colors and incredible
								contrast, even in well-lit rooms.
							</p>
							<h2 className="my-2 text-xl font-bold text-orange-500">$400</h2>
							<button className='w-full px-8 py-4 text-sm font-bold text-white uppercase bg-blue-400 rounded '>Add to Cart</button>
						</div>
					</div>
					<div className="flex flex-row p-4 bg-blue-100 rounded">
						<div className="flex items-center justify-center p-2 basis-1/2">
							<Image src={mac} className="w-full h-full rounded transition-opacity opacity-0 duration-[1s]"
								onLoadingComplete={(image) => image.classList.remove("opacity-0")} alt='laptop' />
						</div>
						<div className="flex flex-col content-center p-4 basis-1/2">
							<p className="my-2 text-xs font-light ">Available now</p>
							<h2 className="my-2 text-xl font-bold ">the new <br />
								POWERTECH laptop</h2>
							<p className="my-2 text-xs font-light">See rich, vibrant colors and incredible
								contrast, even in well-lit rooms.
							</p>
							<h2 className="my-2 text-xl font-bold text-orange-500">$400</h2>
							<button className='w-full px-8 py-4 text-sm font-bold text-white uppercase bg-blue-400 rounded '>Add to Cart</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Arrived