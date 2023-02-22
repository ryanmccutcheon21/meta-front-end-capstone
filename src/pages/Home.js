import React from 'react'
import Hero from '../components/Hero'
import Highlights from '../components/Highlights'
import Navbar from '../components/Navbar'

const Home = () => {
    return (
        <div >
            <Navbar />
            <Hero />
            <Highlights />
        </div>
    )
}

export default Home