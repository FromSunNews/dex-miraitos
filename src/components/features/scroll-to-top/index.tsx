import { CircleFadingArrowUp } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Button } from '@/components/shared/ui/button'
import { cn } from '@/lib/utils'

export function ScrollToTop() {
  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.scrollY > 40) {
      setShowScroll(true)
    } else if (showScroll && window.scrollY <= 40) {
      setShowScroll(false)
    }

    if (window.scrollY <= 40) {
      setShowScroll(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop)
    return () => {
      window.removeEventListener('scroll', checkScrollTop)
    }
  }, [])

  return (
    <Button
      className={cn(
        `
          fixed bottom-10 right-10 z-50 flex size-10 items-center justify-center
          p-0
        `,
        showScroll ? 'opacity-100' : 'opacity-0',
      )}
      variant={'secondary'}
      onClick={() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }}
    >
      <CircleFadingArrowUp />
    </Button>
  )
}

