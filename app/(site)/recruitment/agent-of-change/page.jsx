import React from 'react'
import ContentText from './sections/ContentText'
import MainContent from './sections/MainContent'
import NextContent from './sections/NextContent'
import LastContent from './sections/LastContent'
import Hero from '@/components/shared/Hero'

function AgentOfChange() {
  return (
    <>
      <Hero title="Agent Of Change"/>
      <ContentText />
      <MainContent />
      <NextContent />
      <LastContent />
    </>
  )
}

export default AgentOfChange