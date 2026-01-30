import React from 'react'
import RecruitHero from './sections/RecruitHero'
import Container from '@/components/layouts/Container'
import Search from './sections/Search'
import Job from './sections/Job'

function RecruitmenPage() {
  return (
    <>
      <RecruitHero />
      <Search />
      <Job />
    </>
  )
}

export default RecruitmenPage