import Arrived from '@/components/Arrivied/page'
import Banner from '@/components/Banner/page'
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
    </main>
  )
}
