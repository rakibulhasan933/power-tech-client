"use client";
import Image from 'next/image';
import React from 'react';
import { AiOutlineArrowRight } from "react-icons/ai";
import monitor from "../assets/monitor-highlight.jpg";
import bg from "../assets/Mass Circles.png";

function HighlightTask() {
	return (
		<section className=" py-36">
			<div className="flex items-center justify-between ">
				<div className="flex items-center ">
					<div className="w-3 mr-4 h-11">
					</div>
					<h2 className="text-5xl font-bold ">Monitor</h2>
				</div>
				<div className="">
					<button className='flex items-center '>View more <AiOutlineArrowRight className='w-12 mr-2 ' /> </button>
				</div>
			</div>
			<div className="relative rounded-lg pt-52">
				<div className="pt-40 bg-blue-100 rounded-md">
					<div className="absolute top-0 left-0 p-12 rounded-2xl">
						<Image src={monitor} className=" w-full  transition-opacity opacity-0   duration-[1s] px-4 mb-4"
							onLoadingComplete={(image) => image.classList.remove("opacity-0")} alt='monitor' />
					</div>

					<div className="flex flex-row pt-20 pb-5 px-14 ">
						<div className=" px-14 basis-2/5">
							<h3 className="text-4xl font-medium ">60<span className="text-blue-600 animate-ping">”</span> Monitors</h3>
							<h2 className="my-6 text-2xl font-bold text-orange-500 ">$12,285.75</h2>
							<button className='w-1/2 px-3 py-2 text-base font-bold text-white bg-blue-500 rounded-md '>Add to Cart</button>
						</div>
						<div className="px-10 py-2 basis-3/5">
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