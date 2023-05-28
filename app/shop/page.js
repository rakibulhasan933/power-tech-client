import React from 'react'
import { BiCategoryAlt } from 'react-icons/bi';

function ShopCategories() {
	return (
		<div className="py-4">
			<div className="flex flex-row items-center py-2">
				<BiCategoryAlt className='text-5xl font-bold' />
				<h2 className='ml-3 text-5xl font-bold ' >Categories</h2>
			</div>
			<div className="grid grid-cols-1 gap-12 lg:grid-cols-3 my-14">
				<button className="px-2 text-xl font-bold text-blue-600 bg-white border border-blue-400 cursor-pointer hover:border-2 py-7 rounded-xl">
					Battery
				</button>
				<button className="px-2 text-xl font-bold text-blue-600 bg-white border border-blue-400 cursor-pointer hover:border-2 py-7 rounded-xl">
					Battery
				</button>
				<button className="px-2 text-xl font-bold text-blue-600 bg-white border border-blue-400 cursor-pointer hover:border-2 py-7 rounded-xl">
					Battery
				</button>
				<button className="px-2 text-xl font-bold text-blue-600 bg-white border border-blue-400 cursor-pointer hover:border-2 py-7 rounded-xl">
					Battery
				</button>
				<button className="px-2 text-xl font-bold text-blue-600 bg-white border border-blue-400 cursor-pointer hover:border-2 py-7 rounded-xl">
					Battery
				</button>
				<button className="px-2 text-xl font-bold text-blue-600 bg-white border border-blue-400 cursor-pointer hover:border-2 py-7 rounded-xl">
					Battery
				</button>
				<button className="px-2 text-xl font-bold text-blue-600 bg-white border border-blue-400 cursor-pointer hover:border-2 py-7 rounded-xl">
					Battery
				</button>
				<button className="px-2 text-xl font-bold text-blue-600 bg-white border border-blue-400 cursor-pointer hover:border-2 py-7 rounded-xl">
					Battery
				</button>
				<button className="px-2 text-xl font-bold text-blue-600 bg-white border border-blue-400 cursor-pointer hover:border-2 py-7 rounded-xl">
					Battery
				</button>
				<button className="px-2 text-xl font-bold text-blue-600 bg-white border border-blue-400 cursor-pointer hover:border-2 py-7 rounded-xl">
					Battery
				</button>
				<button className="px-2 text-xl font-bold text-blue-600 bg-white border border-blue-400 cursor-pointer hover:border-2 py-7 rounded-xl">
					Battery
				</button>
				<button className="px-2 text-xl font-bold text-blue-600 bg-white border border-blue-400 cursor-pointer hover:border-2 py-7 rounded-xl">
					Battery
				</button>
			</div>
		</div>
	)
}

export default ShopCategories