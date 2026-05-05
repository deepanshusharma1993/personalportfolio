import Nav from '@/components/nav/Nav'
import Projects from '@/components/projects/Projects'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
 <div className="w-[80%] mx-auto mt-10 flex flex-col gap-40">
      <Nav />
      <Projects />
    </div>
  )
}

export default page