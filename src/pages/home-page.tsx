import { Progress } from '@/components/ui/progress'

export const HomePage = () => {
  return (
    <>
      <section className='container mt-12'>
        <div className='flex h-12 w-max items-center justify-center bg-black'>
          <h2 className='m-1 text-xl font-semibold text-white'>PERSONAL DATA</h2>
        </div>
        <div className='mt-4 space-y-2 text-lg'>
          <p>49A Dehtiarivska Street, 01001, Kyiv, Kyiv City, Ukraine </p>
          <p>gudzoniya111@gmail.com</p>
          <p>Date of birth 26.08.2007</p>
          <p>Citizenship: Ukraine</p>
          <p>
            <a
              href='https://linkedin.com/in/dmytro-lebeichuk-1417513a0'
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-500'
            >
              LinkedIn
            </a>
          </p>
        </div>
      </section>

      <section className='container mt-12'>
        <div className='flex h-12 w-max items-center justify-center bg-black'>
          <h2 className='m-1 text-xl font-semibold text-white'>EDUCATION</h2>
        </div>
        <div className='mt-4 space-y-2 text-lg'>
          <div className='flex justify-between'>
            <p className='font-semibold'>
              Kyiv National Economic University named after Vadym Hetman
            </p>
            <p className='text-gray-400'>2024 - Present</p>
          </div>
          <p>
            Bachelor’s Degree, Computer Science (Specialty 122)
            <span className='font-semibold'>3nd-year student</span>
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

      <section className='container mt-12'>
        <div className='flex h-12 w-max items-center justify-center bg-black'>
          <h2 className='m-1 text-xl font-semibold text-white'>COURSES</h2>
        </div>
        <div className='mt-4 space-y-2 text-lg'>
          <div>
            <div className='flex justify-between'>
              <p>Front-end Developer </p>
              <p className='text-gray-400'>May, 2023 - August - 2023</p>
            </div>
            <p className='text-gray-400'>Group lessons</p>
          </div>

          <div className='mt-8'>
            <div className='flex justify-between'>
              <p>Front-end Developer </p>
              <p className='text-gray-400'>January, 2024 - August, 2024</p>
            </div>
            <p className='text-gray-400'>Individual lessons</p>
          </div>

          <div className='mt-8'>
            <div className='flex justify-between'>
              <p>Front-end Developer </p>
              <p className='text-gray-400'>August, 2024 - Present</p>
            </div>
            <p className='text-gray-400'>Self-study</p>
          </div>
        </div>
      </section>

      <section className='container mt-12'>
        <div className='flex h-12 w-max items-center justify-center bg-black'>
          <h2 className='m-1 text-xl font-semibold text-white'>SKILLS</h2>
        </div>
        <div className='mt-4 grid grid-cols-2 gap-6'>
          <div>
            <h2 className='mb-1 font-semibold'>HTML</h2>
            <Progress value={95} />
          </div>
          <div>
            <h2 className='mb-1 font-semibold'>CSS</h2>
            <Progress value={90} />
          </div>
          <div>
            <h2 className='mb-1 font-semibold'>Tailwind</h2>
            <Progress value={95} />
          </div>
          <div>
            <h2 className='mb-1 font-semibold'>JavaScript</h2>
            <Progress value={75} />
          </div>
          <div>
            <h2 className='mb-1 font-semibold'>TypeScript</h2>
            <Progress value={70} />
          </div>

          <div>
            <h2 className='mb-1 font-semibold'>React</h2>
            <Progress value={80} />
          </div>
          <div>
            <h2 className='mb-1 font-semibold'>Git</h2>
            <Progress value={85} />
          </div>
          <div>
            <h2 className='mb-1 font-semibold'>Vite</h2>
            <Progress value={90} />
          </div>
          <div>
            <h2 className='mb-1 font-semibold'>GitHub</h2>
            <Progress value={90} />
          </div>
          <div>
            <h2 className='mb-1 font-semibold'>ShadCn</h2>
            <Progress value={90} />
          </div>
        </div>
      </section>
      <section className='container mt-12'>
        <div className='flex h-12 w-max items-center justify-center bg-black'>
          <h2 className='m-1 text-xl font-semibold text-white'>LANGUAGE</h2>
        </div>
        <div className='mt-4 grid grid-cols-2 gap-4'>
          <div>
            <h2 className='mb-1 font-semibold'>Ukrainian</h2>
            <Progress value={100} />
          </div>
          <div>
            <h2 className='mb-1 font-semibold'>English</h2>
            <Progress value={85} />
          </div>
          <div>
            <h2 className='mb-1 font-semibold'>Russian</h2>
            <Progress value={95} />
          </div>
          <div>
            <h2 className='mb-1 font-semibold'>Polish</h2>
            <Progress value={40} />
          </div>
        </div>
      </section>
    </>
  )
}
