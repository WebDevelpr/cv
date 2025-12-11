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
          <p>Date birth 26.08.2007</p>
          <p>Citizenship: Ukraine</p>
          <p>
            <a
              href='https://linkedin.com/in/dmytro-lebeichuk-1417513a0'
              target='_blank'
              rel='noopener noreferrer'
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
            Bachelor’s Degree, Computer Science (Specialty 122){' '}
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
    </>
  )
}
