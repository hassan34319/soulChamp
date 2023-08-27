import Image from 'next/image'
import Application from './(HomeComponents)/Application'
import Hero from './(HomeComponents)/Hero'
import Navbar from './(HomeComponents)/Navbar'
import Principles from './(HomeComponents)/Principles'
import Members from './(HomeComponents)/Members'
import Activities from './(HomeComponents)/Activities'
import Community from './(HomeComponents)/Community'
import Benefits from './(HomeComponents)/Benefits'
import Footer from './(HomeComponents)/Footer'

export default function Home() {
  return (
    <main className='min-h-[100vh]'>
      <Hero/>
      <Principles/>
      <Application/>
      <Members/>
      <Activities/>
      <Benefits/>
      <Community/>
      <Footer/>
    </main>
  )
}
