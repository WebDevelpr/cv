export const Header = () => {
  return (
    <header className='container mt-4'>
      <div className='flex items-center justify-between'>
        <h1 className='text-6xl font-bold'>DMYTRO LEBEICHUK</h1>
        <img
          src='src/public/images/avatar.jpg'
          alt='Avatar '
          className='h-48 w-48'
          loading='lazy'
        />
      </div>
      <div className='mt-6 h-3 w-full bg-black'></div>
    </header>
  )
}
