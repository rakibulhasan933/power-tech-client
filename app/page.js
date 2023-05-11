import Banner from '@/components/Banner/page'
import Navbar from '@/components/Navbar/page'
import Products from '@/components/Products/page'
import Steps from '@/components/Steps/page'
import WeekDeal from '@/components/Weekdeal/page'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <Banner />
      <Steps />
      <WeekDeal />
      <Products />
    </main>
  )
}
