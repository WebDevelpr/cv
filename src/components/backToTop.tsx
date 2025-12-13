import { ArrowUp } from 'lucide-react'
import { useEffect, useState } from 'react'

export const BackToTop = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      onClick={scrollToTop}
      className={`/* квадратний блок */ /* центруємо стрілку */ /* робимо коло */ fixed right-4 bottom-4 flex h-12 w-12 items-center justify-center rounded-full bg-black text-white shadow-lg transition-opacity duration-300 ${visible ? 'opacity-100' : 'pointer-events-none opacity-0'} hover:bg-gray-800`}
    >
      <ArrowUp />
    </button>
  )
}
