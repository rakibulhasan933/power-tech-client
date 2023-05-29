import React from 'react'
import { TbTruckDelivery } from 'react-icons/tb'

function Shipping() {
	return (
		<div className='my-4'>
			<div className="py-4">
				<div className="flex flex-row items-center py-2 mb-24">
					<TbTruckDelivery className='text-5xl font-bold' />
					<h2 className='ml-3 text-5xl font-bold'>Shipping</h2>
				</div>
			</div>
			<div className="">
				<h2 className="mb-6 text-2xl font-bold text-blue-700">Delivery Options</h2>
				<ul className="flex flex-col px-8 list-disc">
					<li className="my-6 text-lg font-normal">
						Standard Delivery: Estimated delivery time of 3-5 business days.
					</li>
					<li className="my-6 text-lg font-normal">
						Express Delivery: Guaranteed delivery within 1-2 business days.
					</li>
					<li className="my-6 text-lg font-normal">
						Same-Day Delivery: Available for select locations. Order before for same-day delivery.
					</li>
					<li className="my-6 text-lg font-normal">International Delivery: Delivery time varies based on the destination country.</li>
				</ul>
			</div>
			<div className=""></div>
			<div className=""></div>
			<div className=""></div>
		</div>
	)
}

export default Shipping