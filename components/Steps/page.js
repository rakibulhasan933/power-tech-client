import React from 'react'
import { BiCategoryAlt } from 'react-icons/bi';
import { TbTruckDelivery } from "react-icons/tb";
import { MdPayment } from "react-icons/md";
import { BsBookmark } from "react-icons/bs";
function Steps() {
	return (
		<div className='py-8'>
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
	)
}

export default Steps