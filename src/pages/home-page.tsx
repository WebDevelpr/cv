import {
  Box,
  Calendar,
  Code,
  Flag,
  Folder,
  Globe,
  House,
  Link,
  ShoppingCart
} from 'lucide-react'

import { BackToTop } from '@/components/backToTop'
import { Progress } from '@/components/ui/progress'
import { useInView } from '@/hooks/useInView'

export const HomePage = () => {
  const { ref: personalRef, isVisible: personalVisible } = useInView()
  const { ref: educationRef, isVisible: educationVisible } = useInView()
  const { ref: coursesRef, isVisible: coursesVisible } = useInView()
  const { ref: skillsRef, isVisible: skillsVisible } = useInView()
  const { ref: langRef, isVisible: langVisible } = useInView()
  const { ref: projectsRef, isVisible: projectsVisible } = useInView()

  return (
    <>
      <section
        ref={personalRef}
        className={`container mt-12 transition-all duration-700 ease-out ${
          personalVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <div className='flex items-center justify-center bg-black sm:h-12 sm:w-max'>
          <h2 className='m-1 text-xl font-semibold text-white'>PERSONAL DATA</h2>
        </div>
        <div className='mt-4 space-y-2 text-lg'>
          <p className='flex gap-1'>
            <House />
            49A Dehtiarivska Street, 01001, Kyiv, Kyiv City, Ukraine
          </p>
          <p className='flex gap-1'>
            <Folder /> gudzoniya111@gmail.com
          </p>
          <p className='flex gap-1'>
            <Calendar />
            Date of birth 26.08.2007
          </p>
          <p className='flex gap-1'>
            <Flag />
            Citizenship: Ukraine
          </p>
          <p>
            <a
              href='https://linkedin.com/in/dmytro-lebeichuk-1417513a0'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-1 text-blue-500 transition hover:underline'
            >
              <Link />
              LinkedIn
            </a>
          </p>
          <p>
            <a
              href='https://github.com/WebDevelpr'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-1 text-blue-500 transition hover:underline'
            >
              <Link />
              GitHub
            </a>
          </p>
        </div>
      </section>

      <section
        ref={educationRef}
        className={`container mt-12 transition-all duration-700 ease-out ${
          educationVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <div className='flex items-center justify-center bg-black sm:h-12 sm:w-max'>
          <h2 className='m-1 text-xl font-semibold text-white'>EDUCATION</h2>
        </div>
        <div className='mt-4 space-y-2 text-lg'>
          <div className='flex justify-between'>
            <p className='flex gap-1 font-semibold'>
              Kyiv National Economic University named after Vadym Hetman
            </p>
            <p className='text-gray-400'>2024 - Present</p>
          </div>
          <p className='mt-6 sm:mt-2'>
            Bachelor’s Degree, Computer Science (Specialty 122){' '}
            <span className='font-semibold'>3rd-year student</span>
          </p>
          <div className='mt-8'>
            <p>
              Currently studying core areas of computer science, including
              algorithms, data structures, software development principles, and
              modern web technologies.
            </p>
          </div>
        </div>
      </section>

      <section
        ref={coursesRef}
        className={`container mt-12 transition-all duration-700 ease-out ${
          coursesVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <div className='flex h-10 w-full items-center justify-center bg-black sm:h-12 sm:w-max'>
          <h2 className='m-1 text-xl font-semibold text-white'>COURSES</h2>
        </div>

        <div className='mt-4 space-y-8 text-lg'>
          <div>
            <div className='flex flex-col items-start justify-between sm:flex-row sm:items-center'>
              <p className='flex gap-1'>
                <Code />
                Front-end Developer
              </p>
              <p className='mt-2 text-gray-400 sm:mt-0'>May, 2023 - August - 2023</p>
            </div>
            <p className='text-gray-400'>Group lessons</p>
          </div>

          <div>
            <div className='flex flex-col items-start justify-between sm:flex-row sm:items-center'>
              <p className='flex gap-1'>
                <Code />
                Front-end Developer
              </p>
              <p className='mt-2 text-gray-400 sm:mt-0'>
                January, 2024 - August, 2024
              </p>
            </div>
            <p className='text-gray-400'>Individual lessons</p>
          </div>

          <div>
            <div className='flex flex-col items-start justify-between sm:flex-row sm:items-center'>
              <p className='flex gap-1'>
                <Code />
                Front-end Developer
              </p>
              <p className='mt-2 text-gray-400 sm:mt-0'>August, 2024 - Present</p>
            </div>
            <p className='text-gray-400'>Self-study</p>
          </div>
        </div>
      </section>

      <section
        ref={skillsRef}
        className={`container mt-12 transition-all duration-700 ease-out ${
          skillsVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <div className='flex h-10 w-full items-center justify-center bg-black sm:h-12 sm:w-max'>
          <h2 className='m-1 text-xl font-semibold text-white'>SKILLS</h2>
        </div>

        <div className='mt-4 grid grid-cols-2 gap-6 sm:grid-cols-2'>
          <div>
            <h2 className='mb-1 font-semibold'>HTML</h2>
            <Progress value={skillsVisible ? 95 : 0} />
          </div>
          <div>
            <h2 className='mb-1 font-semibold'>CSS</h2>
            <Progress value={skillsVisible ? 90 : 0} />
          </div>
          <div>
            <h2 className='mb-1 font-semibold'>Tailwind</h2>
            <Progress value={skillsVisible ? 95 : 0} />
          </div>
          <div>
            <h2 className='mb-1 font-semibold'>JavaScript</h2>
            <Progress value={skillsVisible ? 75 : 0} />
          </div>
          <div>
            <h2 className='mb-1 font-semibold'>TypeScript</h2>
            <Progress value={skillsVisible ? 70 : 0} />
          </div>
          <div>
            <h2 className='mb-1 font-semibold'>React</h2>
            <Progress value={skillsVisible ? 80 : 0} />
          </div>
          <div>
            <h2 className='mb-1 font-semibold'>Git</h2>
            <Progress value={skillsVisible ? 85 : 0} />
          </div>
          <div>
            <h2 className='mb-1 font-semibold'>Vite</h2>
            <Progress value={skillsVisible ? 90 : 0} />
          </div>
          <div>
            <h2 className='mb-1 font-semibold'>GitHub</h2>
            <Progress value={skillsVisible ? 90 : 0} />
          </div>
          <div>
            <h2 className='mb-1 font-semibold'>ShadCn</h2>
            <Progress value={skillsVisible ? 90 : 0} />
          </div>
        </div>
      </section>

      <section
        ref={langRef}
        className={`container mt-12 transition-all duration-700 ease-out ${
          langVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <div className='flex items-center justify-center bg-black sm:h-12 sm:w-max'>
          <h2 className='m-1 text-xl font-semibold text-white'>LANGUAGE</h2>
        </div>
        <div className='mt-4 grid grid-cols-2 gap-4'>
          <div>
            <h2 className='mb-1 font-semibold'>Ukrainian</h2>
            <Progress value={langVisible ? 100 : 0} />
          </div>
          <div>
            <h2 className='mb-1 font-semibold'>English</h2>
            <Progress value={langVisible ? 85 : 0} />
          </div>
          <div>
            <h2 className='mb-1 font-semibold'>Russian</h2>
            <Progress value={langVisible ? 95 : 0} />
          </div>
          <div>
            <h2 className='mb-1 font-semibold'>Polish</h2>
            <Progress value={langVisible ? 40 : 0} />
          </div>
        </div>
      </section>

      <section
        className={`container mt-12 transition-all duration-700 ease-out ${
          langVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <div>
          <div className='flex items-center justify-center bg-black sm:h-12 sm:w-max'>
            <h2 className='m-1 text-xl font-semibold text-white'>LANGUAGE SKILLS</h2>
          </div>
          <div className='mt-4 space-y-2 text-lg'>
            <div>
              <h2 className='flex gap-1 font-bold'>
                <Globe />
                Ukrainian
              </h2>
              <p>Native proficiency</p>
            </div>
            <div className='mt-10'>
              <h2 className='flex gap-1 font-bold'>
                <Globe />
                Russian
              </h2>
              <p>Native</p>
            </div>
            <div className='mt-10'>
              <h2 className='flex gap-1 font-bold'>
                <Globe />
                English
              </h2>
              <p>
                High proficiency in English gained through{' '}
                <span className='font-semibold'>
                  individual lessons, self-study, and regular practice communicating
                  with native speakers.
                </span>
              </p>
              <p className='mt-4'>
                Strong written and verbal communication skills, enabling smooth work
                with English-language materials and teams.
              </p>
            </div>
            <div className='mt-10'>
              <h2 className='flex gap-1 font-bold'>
                <Globe />
                Polish
              </h2>
              <p>
                Basic to intermediate proficiency in Polish, developed through{' '}
                <span className='font-semibold'>
                  lessons with a tutor and occasional communication while staying in
                  Poland.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={projectsRef}
        className={`container mt-12 transition-all duration-700 ease-out ${
          projectsVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <div className='flex h-12 w-max items-center justify-center bg-black'>
          <h2 className='m-1 text-xl font-semibold text-white'>PROJECTS</h2>
        </div>
        <div className='mt-4 space-y-2 text-lg'>
          <div>
            <h2 className='flex gap-1 font-semibold'>
              <Box />
              Link Manager
            </h2>
            <p className='mb-4'>
              Developed a Link Manager web application using{' '}
              <span className='font-semibold'>
                HTML, TailwindCSS, shadcn/ui, TypeScript, React, and Vite.
              </span>{' '}
              Implemented dynamic adding, editing, and deleting of links.
            </p>
            <p>Created a responsive and user-friendly interface.</p>
          </div>
          <div className='mt-14'>
            <h2 className='flex gap-1 font-semibold'>
              <ShoppingCart />
              Pit Stop App
            </h2>
            <p className='mb-4'>
              Developed an application for the{' '}
              <span className='font-semibold'>Pit Stop</span> store on my own
              initiative. Built core features for displaying products, catalogs, and
              interactive UI elements.
            </p>
            <p>
              Utilized React and TailwindCSS for fast development and easy styling.
            </p>
          </div>
        </div>
      </section>

      <section className='mt-12 flex w-full items-center justify-center gap-6 bg-black py-16 text-white'>
        <p className='mt-6 text-sm text-gray-400'>© 2025 Dmytro Lebeichuk</p>
      </section>

      <BackToTop />
    </>
  )
}
