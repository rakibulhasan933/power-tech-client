import Image from 'next/image'
import React from 'react'
import { MdPayment } from 'react-icons/md';
import paymentImg from "../../../components/assets/payment.png";

function Payment() {
	return (
		<div className='py-4'>
			<div className="flex flex-row items-center py-2 my-24">
				<MdPayment className='text-5xl font-bold' />
				<h2 className='ml-3 text-5xl font-bold' >Categories</h2>
			</div>
			<div className="mb-12">
				<h2 className="my-6 text-2xl font-bold text-blue-800 ">Payment by Debit Card</h2>
				<Image src={paymentImg} alt='cart' />
			</div>
		</div>
	)
}

export default Payment