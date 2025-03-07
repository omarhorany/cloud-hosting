import Hero from '@/components/home/Hero'
import WebHostingPlan from '@/components/home/WebHostingPlan'
import React from 'react'

const HomePage = () => {
  return (
    <section className="px-6 py-12 md:px-12 lg:px-24">
      <Hero />

      <h2 className="text-3xl font-bold text-center mt-12 mb-6">
        Choose Your Web Hosting Plan
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <WebHostingPlan />
        <WebHostingPlan />
        <WebHostingPlan />
      </div>
    </section>
  )
}

export default HomePage