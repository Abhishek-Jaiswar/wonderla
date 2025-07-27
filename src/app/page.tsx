import React from 'react'
import CircularSidebar from './components/CircularSidebar'
import Navbar from './components/Navbar'
import Carousel from './components/Carousel'

const Home = () => {
  return (
    <main>
      <header className=' mt-6 py-4'>
        <Navbar />
      </header>
      <section className="flex flex-col lg:flex-row items-start mt-16">
        <div className="lg:min-w-[600px] flex justify-center">
          <CircularSidebar />
        </div>
        <div className="flex-1 w-full -ml-[10rem]">
          <div>
            <h1 className='text-6xl font-extrabold text-white'>OUR ICONIC RIDES</h1>
          </div>
          <Carousel />
        </div>
      </section>

    </main>
  )
}

export default Home