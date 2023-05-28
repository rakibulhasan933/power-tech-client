import Footer from '@/components/Footer';
import '../globals.css'
import { Inter } from 'next/font/google';
import ShopNavbar from './ShopNavbar';
import ShopFooter from './ShopFooter';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Shop - PowerTech ',
	description: 'Generated by rakibul && nafisha',
}

export default function ShopLayout({ children }) {
	return (
		<div className={inter.className}>
			<div className="bg-slate-50">
				<div className="mx-40">
					<ShopNavbar />
					{children}
					<ShopFooter />
				</div>
				<Footer />
			</div>
		</div>
	)
}
