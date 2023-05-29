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
					<Link href="/shop">
						<div className="flex items-center active:text-blue-700 hover:text-blue-600">
							<BiCategoryAlt className='mr-2 text-3xl' />
							<h3 className='text-xl font-normal ' >Categories</h3>
						</div>
					</Link>
					<Link href="shop/shipping">
						<div className="flex items-center hover:text-blue-600 ">
							<TbTruckDelivery className='mr-2 text-3xl' />
							<h3 className='text-xl font-normal '>Shipping</h3>
						</div>
					</Link>
					<Link href="shop/payment">
						<div className="flex items-center hover:text-blue-600 ">
							<MdPayment className='mr-2 text-3xl' />
							<h3 className='text-xl font-normal '>Payment</h3>
						</div>
					</Link>
					<Link href="shop/saves-item">
						<div className="flex items-center hover:text-blue-600 ">
							<BsBookmark className='mr-2 text-3xl' />
							<h3 className='text-xl font-normal '>Saved items</h3>
						</div>
					</Link>
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