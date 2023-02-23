import React from 'react'
import Hero from '../components/Hero'
import Highlights from '../components/Highlights'
import Navbar from '../components/Navbar'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'
import About from '../components/About'

const Home = () => {
    return (
        <div >
            <Navbar />
            <Hero />
            <Highlights />
            <Testimonials />
            <About />
            <Footer />
        </div>
    )
}

export default Home