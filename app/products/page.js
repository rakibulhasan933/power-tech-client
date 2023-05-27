import React from 'react'
import ProductNavbar from './ProductNavbar'
import Banner from '@/components/Banner/page'
import Steps from '@/components/Steps/page'
import WeekDeal from '@/components/Weekdeal/page'
import ProductsHome from '@/components/ProductsHome/page'
import Arrived from '@/components/Arrivied/page'
import HighlightTask from '@/components/HighlightTask/page'
import Offer from '@/components/Offer'
import CountDown from '@/components/CountDown/page';
import Discount from './Discount'

export const metadata = {
	title: 'Products - PowerTech',
};

function page() {
	return (
		<section className='mx-40'>
			<ProductNavbar />
			<Banner />
			<Steps />
			<WeekDeal />
			<ProductsHome />
			<Arrived />
			<div className="mt-36">
				<Discount />
			</div>
			<HighlightTask />
			<Offer />
			<CountDown />
		</section>
	)
}

export default page