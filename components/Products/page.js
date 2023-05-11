"use client";
import { AiOutlineArrowRight } from "react-icons/ai";
import React from 'react'

function Products() {
	return (
		<div className='pt-36'>
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
		</div>
	)
}

export default Products