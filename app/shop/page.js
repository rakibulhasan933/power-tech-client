"use client";
import React from 'react'
import ShopNavbar from './ShopNavbar'
import { BiCategoryAlt } from 'react-icons/bi';
import { TbTruckDelivery } from "react-icons/tb";
import { MdPayment } from "react-icons/md";
import { BsBookmark } from "react-icons/bs";

function ShopCategories() {
	return (
		<section className=' bg-slate-50'>
			<div className="mx-40 ">
				<ShopNavbar />
				<div className="py-4">
					<div className="flex flex-row items-center py-2">
						<BiCategoryAlt className='text-5xl font-bold' />
						<h2 className='ml-3 text-5xl font-bold ' >Categories</h2>
					</div>
					<div className="grid grid-cols-1 gap-12 lg:grid-cols-3 my-14">
						<button className="px-2 text-xl font-bold text-blue-600 bg-white border border-blue-400 cursor-pointer hover:border-2 py-7 rounded-xl">
							Battery
						</button>
						<button className="px-2 text-xl font-bold text-blue-600 bg-white border border-blue-400 cursor-pointer hover:border-2 py-7 rounded-xl">
							Battery
						</button>
						<button className="px-2 text-xl font-bold text-blue-600 bg-white border border-blue-400 cursor-pointer hover:border-2 py-7 rounded-xl">
							Battery
						</button>
						<button className="px-2 text-xl font-bold text-blue-600 bg-white border border-blue-400 cursor-pointer hover:border-2 py-7 rounded-xl">
							Battery
						</button>
						<button className="px-2 text-xl font-bold text-blue-600 bg-white border border-blue-400 cursor-pointer hover:border-2 py-7 rounded-xl">
							Battery
						</button>
						<button className="px-2 text-xl font-bold text-blue-600 bg-white border border-blue-400 cursor-pointer hover:border-2 py-7 rounded-xl">
							Battery
						</button>
					</div>
					<div className='py-20'>
						<div className="flex justify-between ">
							<div className="flex items-center ">
								<BiCategoryAlt className='mr-2 text-3xl' />
								<h3>Categories</h3>
							</div>
							<div className="flex items-center ">
								<TbTruckDelivery className='mr-2 text-3xl' />
								<h3>Shipping</h3>
							</div>
							<div className="flex items-center ">
								<MdPayment className='mr-2 text-3xl' />
								<h3>Payment</h3>
							</div>
							<div className="flex items-center ">
								<BsBookmark className='mr-2 text-3xl' />
								<h3>Saved items</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ShopCategories