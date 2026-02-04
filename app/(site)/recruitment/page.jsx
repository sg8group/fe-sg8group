import React from 'react'
import RecruitHero from './sections/RecruitHero'
import Container from '@/components/ui/Container'
import Search from './sections/Search'
import Job from './sections/Job'
import NJob from './sections/NJob'

function RecruitmenPage() {
  return (
    <>
      <RecruitHero />
      <Search />
      <NJob />
      <Job />
    </>
  )
}

export default RecruitmenPage
