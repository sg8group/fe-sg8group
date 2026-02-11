import Container from '@/components/ui/Container'
import React from 'react'

function ValueIntro() {
  return (
      <section className="py-24 bg-white">
      <Container>
        <div className="max-w-5xl mx-auto text-center space-y-10">
          <p className="text-2xl md:text-2xl lg:text-2xl font-bold text-black leading-[1.2]">
            Growth Mindset will help our stakeholder for always adapt and 
            giving our best in serving all clients that rely on us for their 
            Business Management.
          </p>
          <p className="text-gray-800 text-xl md:text-2xl font-medium pt-4">
            From the Right Mindset, we continuously promote <br className="hidden md:block" />
            Our Values as Company Culture in our daily life and workspace
          </p>
        </div>
      </Container>
    </section>

  )
}

export default ValueIntro
