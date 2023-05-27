import React from 'react'
import ShopNavbar from './ShopNavbar'
import { BiCategoryAlt } from 'react-icons/bi'

function ShopCategories() {
	return (
		<section className=' bg-slate-50'>
			<div className="mx-40 ">
				<ShopNavbar />
				<div className="py-4">
					<div className="flex flex-row items-center py-2">
						<BiCategoryAlt className='text-5xl font-bold' />
						<h2 className='ml-3 text-5xl font-bold ' >Categories</h2>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ShopCategories