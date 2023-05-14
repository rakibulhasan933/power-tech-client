"use client";
import Image from 'next/image';
import React from 'react';
import { AiOutlineArrowRight } from "react-icons/ai";
import monitor from "../assets/monitor-highlight.jpg";

function HighlightTask() {
	return (
		<section className=" py-36">
			<div className="flex items-center justify-between ">
				<div className="flex items-center ">
					<div className="w-3 mr-4 bg-blue-600 h-11">
					</div>
					<h2 className="text-5xl font-bold ">Monitor</h2>
				</div>
				<div className="">
					<button className='flex items-center '>View more <AiOutlineArrowRight className='w-12 mr-2 ' /> </button>
				</div>
			</div>
			<div className="p-4 bg-blue-100 rounded-lg">
				<div className="flex flex-col gap-4 rounded-md">
					<div className="flex content-center p-12 rounded-2xl">
						<Image src={monitor} className=" w-full  transition-opacity opacity-0   duration-[1s] px-4 mb-4"
							onLoadingComplete={(image) => image.classList.remove("opacity-0")} alt='monitor' />
					</div>
					<div className="flex flex-row p-8 gap-x-5">
						<div className="px-4 basis-1/3">
							<h3 className="text-4xl font-medium ">60<span>”</span> Monitors</h3>
							<h2 className="my-6 text-2xl font-bold text-orange-500 ">$12,285.75</h2>
							<button className='w-full px-4 py-3 text-base font-bold text-white uppercase bg-blue-500 rounded-md '>Add to Cart</button>
						</div>
						<div className="p-2 basis-2/3">
							<p className="text-base font-medium">
								The wide monitor offers an immersive viewing experience with its expansive display, allowing users to multitask efficiently and enjoy a panoramic view of their content. With its sleek design and crisp image quality, the 3-screen monitor enhances productivity and entertainment, providing ample screen real estate for professionals, gamers, and multimedia enthusiasts alike allowing users to multitask efficiently and enjoy a panoramic view of their content.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default HighlightTask