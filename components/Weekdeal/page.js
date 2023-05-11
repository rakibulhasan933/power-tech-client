"use client";
import Image from 'next/image';
import React from 'react'
import { AiOutlineArrowRight } from "react-icons/ai";
import monitor from "../assets/monitor.jpg";
function WeekDeal() {
	return (
		<div className="pt-10">
			<div className="flex items-center justify-between ">
				<div className="flex items-center ">
					<div className="w-3 mr-4 bg-blue-700 h-11">
					</div>
					<h2 className="text-5xl font-bold ">Grab deal of the week!!</h2>
				</div>
				<div className="">
					<button className='flex items-center '>Details <AiOutlineArrowRight className='w-12 mr-2 ' /> </button>
				</div>
			</div>
			<div className="flex flex-row pt-8">
				<div className="basis-1/2">
					<Image src={monitor} className="w-full transition-opacity rounded opacity-0 duration-[1s] mb-6"
						onLoadingComplete={(image) => image.classList.remove("opacity-0")} alt='monitor mac' />
				</div>
				<div className="flex flex-col justify-center pl-12 basis-1/2">
					<p className='mb-6 text-base font-normal '>Available now</p>
					<h3 className='mb-6 text-4xl font-bold '>Introducing the new <br /> POWERTECH LED</h3>
					<p className="text-base font-normal mb-9">
						See rich, vibrant colors and incredible
						contrast, even in well-lit rooms.
					</p>
					<h3 className="mb-6 text-4xl font-extrabold text-orange-600 ">
						$2,731
					</h3>
					<button className='w-1/4 px-2 py-1 text-white bg-blue-400 rounded '>Shop Now</button>
				</div>
			</div>
		</div>
	)
}

export default WeekDeal