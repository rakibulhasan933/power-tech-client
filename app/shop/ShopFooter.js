import React from 'react';
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineArrowBackIos, MdPayment } from "react-icons/md";
import { BsBookmark } from "react-icons/bs";
import Link from 'next/link';
import { BiCategoryAlt } from 'react-icons/bi';

function ShopFooter() {
	return (
		<div>
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
			<div className="flex items-center justify-end my-10">
				<MdOutlineArrowBackIos className='mr-2 text-xl font-normal ' />
				<Link href='/' >
					<button className="text-xl font-normal hover:border-b-4 hover:font-semibold hover:border-blue-700">
						Back
					</button>
				</Link>
			</div>
		</div>
	)
}

export default ShopFooter