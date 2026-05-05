import Nav from '@/components/nav/Nav'
import React from 'react'
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { CiLocationOn, CiCalendarDate } from "react-icons/ci";

type Props = {}

const Page = (props: Props) => {

  const workExperience = [
    {
      id: 1,
      company: 'Impact Sapiens',
      role: 'Full Stack Developer',
      duration: 'Nov 2025 - Present',
      location: 'India',
      jobType: 'Full-time',
      description: 'Architected and built production-grade MERN applications for real-world use cases. Designed scalable backend systems using Node.js, gRPC, and JWT authentication. Mentored 50+ learners and managed deployments on AWS.'
    },
    {
      id: 2,
      company: 'BlueCS Limited (BlueEra)',
      role: 'Full Stack MERN Developer (Backend Specialist)',
      duration: 'Apr 2025 - Oct 2025',
      location: 'India',
      jobType: 'Full-time',
      description: 'Optimized 50+ REST APIs improving response time by 30%. Built microservices using gRPC and handled 1M+ records in MongoDB with high performance.'
    },
    {
      id: 3,
      company: 'Prabha Makeover',
      role: 'Digital Operations & Product Lead',
      duration: 'May 2018 - Mar 2025',
      location: 'India',
      jobType: 'Full-time',
      description: 'Led digital ecosystem, managed app & e-commerce platform, and scaled international user base with a team of 9 members.'
    }
  ];

  const education = [
    {
      id: 1,
      degree: 'Master of Computer Applications (MCA)',
      college: 'Guru Gobind Singh Indraprastha University',
      university: 'GGSIPU',
      duration: '2015 - 2018',
      location: 'Delhi, India',
      description: 'Focused on software development, system design, and backend engineering.'
    },
    {
      id: 2,
      degree: 'Bachelor of Computer Applications (BCA)',
      college: 'Guru Gobind Singh Indraprastha University',
      university: 'GGSIPU',
      duration: '2012 - 2015',
      location: 'Delhi, India',
      description: 'Built strong foundation in programming, data structures, and web development.'
    }
  ];

  return (
    <div className="w-[80%] mx-auto mt-10 flex flex-col gap-20">

      <Nav />

      {/* About */}
      <section>
        <h1 className='hero-title mb-6'>About Me</h1>
        <p className="font-poppins text-gray-700 leading-relaxed">
          Backend-focused Full Stack Developer with experience in building scalable applications using MERN stack, microservices, and cloud infrastructure.
        </p>
      </section>

      {/* Work Experience */}
      <section>
        <h1 className='hero-title mb-8'>Work Experience</h1>

        <div className='flex flex-col gap-6'>
          {workExperience.map((work) => (
            <div key={work.id} className='grid border-b-4 border-gray-200 rounded-xl p-6 md:flex justify-between gap-6'>

              {/* Left */}
              <div className='grid grid-cols-1 md:flex md:flex-col gap-2'>
                <h2 className='text-lg font-semibold'>{work.role}</h2>

                <div className='grid grid-cols-1 md:flex items-center gap-4 text-sm text-gray-600 flex-wrap'>
                  <span className='flex items-center gap-1'>
                    <HiOutlineBuildingOffice /> {work.company}
                  </span>
                  <span className='flex items-center gap-1'>
                    <CiLocationOn /> {work.location}
                  </span>
                </div>

                <p className=' hidden md:block text-sm text-gray-700 mt-2 max-w-xl'>
                  {work.description}
                </p>
              </div>

              {/* Right */}
              <div className='grid grid-cols-1 md:flex md:flex-col items-end text-sm text-gray-600 whitespace-nowrap'>
                <span>{work.jobType}</span>
                <span className='flex items-center gap-1 mt-1'>
                  <CiCalendarDate /> {work.duration}
                </span>
              </div>

            </div>
          ))}
        </div>
      </section>

       {/* Education */}
      <section>
        <h1 className="hero-title mb-8">Education</h1>

        <div className="grid grid-cols-1 md:flex md:flex-col gap-4">
          {education.map((edu) => (
            <div
              key={edu.id}
              className="border-b-4 border-gray-200 rounded-xl p-6  grid grid-cols-1 md:flex justify-between gap-6"
            >
              <div>
                <h2 className="font-semibold text-lg">{edu.degree}</h2>
                <p className="text-sm text-gray-600">
                  {edu.college}, {edu.university}
                </p>
              </div>
              <div>
                {/* right */}
                <div className='flex gap-2 items-center'>
                    <CiCalendarDate />
                <p className="text-sm text-gray-500">  {edu.duration}</p>
                </div>

                <div className='flex gap-2 items-center'>
                    <CiLocationOn />
                <p>  {edu.location}</p>
                    </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}

export default Page;