import Image from 'next/image'
import Hero from './components/Hero'
import Payment from './components/Payment'

export default function Home() {
  return (
    <main className="bg-[#004E89]">
      <Hero/>
      <Payment/>
    </main>
  )
}
