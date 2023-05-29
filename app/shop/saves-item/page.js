import React from 'react'
import { BsBookmark, BsFillStarFill } from 'react-icons/bs';
import Image from 'next/image';
import mac from "../../../components/assets/macbook.jpg";
import drone from "../../../components/assets/drone.jpg";

function SavesItem() {
	return (
		<div className='my-4'>
			<div className="py-4">
				<div className="flex flex-row items-center py-2 mb-24">
					<BsBookmark className='text-5xl font-bold' />
					<h2 className='ml-3 text-5xl font-bold'>Save Items</h2>
				</div>
			</div>
			<div className="grid grid-cols-2 gap-1 my-10">
				<div className="relative flex flex-row items-center bg-blue-100 rounded">
					<Image src={mac} className='object-cover w-1/2 h-full rounded-md ' alt='laptop' />
					<div className="absolute top-0bg-white left-4 w-11 h-11">
						<BsBookmark />
					</div>
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
			<div className="grid grid-cols-3 gap-16 my-10">
				<div className="flex flex-col justify-center rounded">
					<Image src={drone} className="object-cover w-full mb-8 rounded "
						alt='drone' />
					<div className="flex flex-col items-center">
						<h3 className="mb-5 text-xl font-medium ">Drone</h3>
						<h2 className="mb-5 text-3xl font-semibold text-orange-500 ">$305</h2>
						<div className="flex flex-row items-center gap-0 mb-5">
							<BsFillStarFill className='text-xs text-amber-600' />
							<p className="ml-1 text-xs">(4.9)</p>
						</div>
						<button className="w-full px-12 py-4 text-lg font-bold text-white bg-blue-400 rounded">Add To Cart</button>
					</div>
				</div>
				<div className="flex flex-col justify-center rounded">
					<Image src={drone} className="object-cover w-full mb-8 rounded "
						alt='drone' />
					<div className="flex flex-col items-center">
						<h3 className="mb-5 text-xl font-medium ">Drone</h3>
						<h2 className="mb-5 text-3xl font-semibold text-orange-500 ">$305</h2>
						<div className="flex flex-row items-center gap-0 mb-5">
							<BsFillStarFill className='text-xs text-amber-600' />
							<p className="ml-1 text-xs">(4.9)</p>
						</div>
						<button className="w-full px-12 py-4 text-lg font-bold text-white bg-blue-400 rounded">Add To Cart</button>
					</div>
				</div>
				<div className="flex flex-col justify-center rounded">
					<Image src={drone} className="object-cover w-full mb-8 rounded "
						alt='drone' />
					<div className="flex flex-col items-center">
						<h3 className="mb-5 text-xl font-medium ">Drone</h3>
						<h2 className="mb-5 text-3xl font-semibold text-orange-500 ">$305</h2>
						<div className="flex flex-row items-center gap-0 mb-5">
							<BsFillStarFill className='text-xs text-amber-600' />
							<p className="ml-1 text-xs">(4.9)</p>
						</div>
						<button className="w-full px-12 py-4 text-lg font-bold text-white bg-blue-400 rounded">Add To Cart</button>
					</div>
				</div>
				<div className="flex flex-col justify-center rounded">
					<Image src={drone} className="object-cover w-full mb-8 rounded "
						alt='drone' />
					<div className="flex flex-col items-center">
						<h3 className="mb-5 text-xl font-medium ">Drone</h3>
						<h2 className="mb-5 text-3xl font-semibold text-orange-500 ">$305</h2>
						<div className="flex flex-row items-center gap-0 mb-5">
							<BsFillStarFill className='text-xs text-amber-600' />
							<p className="ml-1 text-xs">(4.9)</p>
						</div>
						<button className="w-full px-12 py-4 text-lg font-bold text-white bg-blue-400 rounded">Add To Cart</button>
					</div>
				</div>
				<div className="flex flex-col justify-center rounded">
					<Image src={drone} className="object-cover w-full mb-8 rounded "
						alt='drone' />
					<div className="flex flex-col items-center">
						<h3 className="mb-5 text-xl font-medium ">Drone</h3>
						<h2 className="mb-5 text-3xl font-semibold text-orange-500 ">$305</h2>
						<div className="flex flex-row items-center gap-0 mb-5">
							<BsFillStarFill className='text-xs text-amber-600' />
							<p className="ml-1 text-xs">(4.9)</p>
						</div>
						<button className="w-full px-12 py-4 text-lg font-bold text-white bg-blue-400 rounded">Add To Cart</button>
					</div>
				</div>
				<div className="flex flex-col justify-center rounded">
					<Image src={drone} className="object-cover w-full mb-8 rounded "
						alt='drone' />
					<div className="flex flex-col items-center">
						<h3 className="mb-5 text-xl font-medium ">Drone</h3>
						<h2 className="mb-5 text-3xl font-semibold text-orange-500 ">$305</h2>
						<div className="flex flex-row items-center gap-0 mb-5">
							<BsFillStarFill className='text-xs text-amber-600' />
							<p className="ml-1 text-xs">(4.9)</p>
						</div>
						<button className="w-full px-12 py-4 text-lg font-bold text-white bg-blue-400 rounded">Add To Cart</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SavesItem