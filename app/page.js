import Arrived from '@/components/Arrivied/page'
import Banner from '@/components/Banner/page'
import CountDown from '@/components/CountDown/page'
import HighlightTask from '@/components/HighlightTask/page'
import Navbar from '@/components/Navbar/page'
import Offer from '@/components/Offer'
import Products from '@/components/Products/page'
import Steps from '@/components/Steps/page'
import WeekDeal from '@/components/Weekdeal/page'

export default function Home() {
  return (
    <main className='bg-slate-50'>
      <div className='mx-40'>
        <Navbar />
        <Banner />
        <Steps />
        <WeekDeal />
        <Products />
        <Arrived />
        <HighlightTask />
        <Offer />
        <CountDown />
      </div>
    </main>
  )
}
