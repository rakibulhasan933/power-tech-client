"use client";
import React from 'react'
import { AiOutlineArrowRight } from "react-icons/ai";

function WeekDeal() {
	return (
		<div className="flex justify-between py-8">
			<div className="flex items-center ">
				<div className="w-3 mr-4 bg-blue-700 h-11">
				</div>
				<h2 className="text-4xl font-bold ">Grab deal of the week!!</h2>
			</div>
			<div className="">
				<button className='flex items-center '>Details <AiOutlineArrowRight className='mr-4 ' /> </button>
			</div>
		</div>
	)
}

export default WeekDeal