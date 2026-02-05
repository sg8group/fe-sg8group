import React from 'react'
import ContentText from '../sections/agent-of-change/ContentText'
import MainContent from '../sections/agent-of-change/MainContent'
import NextContent from '../sections/agent-of-change/NextContent'
import LastContent from '../sections/agent-of-change/LastContent'
import Hero from '@/components/sections/Hero'
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