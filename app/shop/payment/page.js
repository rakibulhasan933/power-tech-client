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
				<h2 className="my-6 text-2xl font-bold text-blue-700 ">Payment By Debit Card</h2>
				<Image src={paymentImg} alt='cart' />
			</div>
			<div className="my-12">
				<h2 className="my-6 text-2xl font-bold text-blue-700 ">Payment By Mobile Banking</h2>
				<Image src={paymentImg} alt='cart' />
			</div>
			<div className="my-10">
				<h2 className="mb-6 text-2xl font-bold text-blue-700">Accepted Payment Methods</h2>
				<ul className="flex flex-col px-10 list-disc">
					<li className="my-6 text-lg font-normal">
						Credit Cards: We accept Visa, Mastercard, and American Express.
					</li>
					<li className="my-6 text-lg font-normal">
						Debit Cards: We accept debit cards with Visa or Mastercard logo.
					</li>
					<li className="my-6 text-lg font-normal">
						PayPal: Use your PayPal account for a secure and convenient payment.
					</li>
					<li className="my-6 text-lg font-normal">
						Apple Pay: Pay with ease using Apple Pay on supported devices.
					</li>
					<li className="my-6 text-lg font-normal">
						Google Pay: Quick and seamless payment with Google Pay.
					</li>
				</ul>
			</div>
			<div className="my-10">
				<h2 className="mb-6 text-2xl font-bold text-blue-700">Order Total</h2>
				<ul className="flex flex-col px-10 list-disc">
					<li className="my-6 text-lg font-normal">
						Shipping Fee: Additional charge for shipping, if applicable.
					</li>
					<li className="my-6 text-lg font-normal">
						Subtotal: The total cost of items in your order.
					</li>
					<li className="my-6 text-lg font-normal">
						Order Total: The final amount to be charged, including all fees and taxes.
					</li>
					<li className="my-6 text-lg font-normal">
						Taxes: Taxes calculated based on your location and applicable laws.
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Payment