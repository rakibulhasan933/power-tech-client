"use client";
import React from 'react'
import Marquee from 'react-fast-marquee'

function Offer() {
	return (
		<>
			<Marquee>
				<div className="flex flex-row my-8">
					<h2 className='mx-10 text-5xl font-bold text-orange-600 '>Flash Sale!!</h2>
					<h2 className='text-5xl font-bold text-orange-600 '>Flash Sale!!</h2>
				</div>
			</Marquee>
		</>
	)
}

export default Offer