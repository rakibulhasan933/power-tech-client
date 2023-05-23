import Image from 'next/image'
import React from 'react';
import headphone from "../../components/assets/Headphone.png";

function Discount() {
	return (
		<div className='bg-blue-300 rounded-md my-36'>
			<div className="flex items-center justify-around p-8 basis-3/4 ">
				<div className="flex flex-col items-center">
					<h2 className="mb-6 text-5xl font-semibold ">Get <span className='text-orange-600 '>25%</span> Off Discount Coupon</h2>
					<div className="flex items-center gap-0">
						<input type="email" className='items-center p-3 rounded-l ' placeholder='Email' />
						<button className='items-center p-3 text-xl font-bold text-white bg-orange-600 rounded-r '>Get Coupon</button>
					</div>
				</div>
				<div className="p-2 basis-1/4">
					<Image src={headphone} alt='headphone'></Image>
				</div>
			</div>
		</div>
	)
}

export default Discount