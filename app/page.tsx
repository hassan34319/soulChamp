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
import { client } from './utils/client'

export const revalidate = 60;
export default async function Home() {
  const homePageBanner = await client.fetch(`
  *[_type == "homeBackground"] {
    ...
  }
`);
  const principles = await client.fetch(`
  *[_type == "principles"] {
    ...
  }
`);
  const application = await client.fetch(`
  *[_type == "application"] {
    ...
  }
`);
  const members = await client.fetch(`
  *[_type == "members"] {
    ...
  }
`);
  const activities = await client.fetch(`
  *[_type == "activities"] {
    ...
  }
`);
  const benefits = await client.fetch(`
  *[_type == "benefits"] {
    ...
  }
`);
  const community = await client.fetch(`
  *[_type == "serveCommunity"] {
    ...
  }
`);
console.log(principles, "home")
  return (
    <main className='min-h-[100vh] flex flex-col gap-y-2 md:gap-y-4 lg:gap-y-8 bg-black'>
      <Hero homeBackground={homePageBanner}/>
      <Principles principles={principles}/>
      <Application application={application}/>
      <Members members={members}/>
      <Activities activities={activities}/>
      <Benefits benefits={benefits}/>
      <Community community={community}/>
      <Footer/>
    </main>
  )
}
