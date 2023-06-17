import React from 'react'
import { BsCart } from 'react-icons/bs'

function Cart() {
	return (
		<div className="mx-40">
			<div className='my-4'>
				<div className="py-4">
					<div className="flex flex-row items-center py-2 mb-24">
						<BsCart className='text-5xl font-bold' />
						<h2 className='ml-3 text-5xl font-bold'>Cart Items</h2>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Cart