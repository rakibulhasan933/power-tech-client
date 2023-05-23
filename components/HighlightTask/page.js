"use client";
import Image from 'next/image';
import React from 'react';
import monitor from "../assets/monitor-highlight.jpg";
import { BsArrowRight } from 'react-icons/bs';

function HighlightTask() {
	return (
		<div
			className="pb-36">
			<div className="flex flex-row justify-between mb-10">
				<div className="flex items-center ">
					<div className="w-3 mr-4 bg-blue-400 h-11">
					</div>
					<h2 className="text-5xl font-bold ">Monitor</h2>
				</div>
				<div className="">
					<button className='flex items-center'>More <BsArrowRight className='w-full ' /> </button>
				</div>
			</div>
			<div className="p-4 bg-blue-100 rounded-lg">
				<div className="flex flex-col pt-8 rounded-md ">
					<div className="flex content-center px-4">
						<Image src={monitor} className=" w-full rounded-md  transition-opacity opacity-0   duration-[1s] px-4 mb-4"
							onLoadingComplete={(image) => image.classList.remove("opacity-0")} alt='monitor' />
					</div>
					<div className="px-10 my-8">
						<div className="flex flex-row">
							<div className="px-4 basis-1/3">
								<h3 className="text-4xl font-medium ">60<span>”</span> Monitors</h3>
								<h2 className="my-6 text-2xl font-bold text-orange-500 ">$12,285.75</h2>
								<button className='w-3/4 px-8 py-4 text-lg font-bold text-white bg-blue-400 rounded '>Add To Cart</button>
							</div>
							<div className="p-2 basis-2/3">
								<p className="text-base font-light">
									The wide monitor offers an immersive viewing experience with its expansive display, allowing users to multitask efficiently and enjoy a panoramic view of their content. With its sleek design and crisp image quality, the 3-screen monitor enhances productivity and entertainment, providing ample screen real estate for professionals, gamers, and multimedia enthusiasts alike allowing users to multitask efficiently and enjoy a panoramic view of their content.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HighlightTask