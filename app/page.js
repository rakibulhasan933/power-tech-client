import Arrived from '@/components/Arrivied/page'
import Banner from '@/components/Banner/page'
import CountDown from '@/components/CountDown/page'
import HighlightTask from '@/components/HighlightTask/page'
import Products from '@/components/Products/page'
import Steps from '@/components/Steps/page'
import WeekDeal from '@/components/Weekdeal/page'

export default function Home() {
  return (
    <main>
      <Banner />
      <Steps />
      <WeekDeal />
      <Products />
      <Arrived />
      <HighlightTask />
      <CountDown endDate="2023-05-14" endTime="11:59:59" />
    </main>
  )
}
