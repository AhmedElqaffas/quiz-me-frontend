import { useEffect } from 'react'

interface NextPrevButtonsProps {
  questionIdx: number
  questionCount: number
  onPrev: () => void
  onNext: () => void
}

export default function NextPrevButtons({
  questionIdx,
  questionCount,
  onPrev,
  onNext,
}: NextPrevButtonsProps) {
  useEffect(() => {
    // Allow left/right arrow keys to navigate questions
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        onPrev()
      } else if (event.key === 'ArrowRight') {
        onNext()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    // CLEANUP: Remove the listener when the component is destroyed
    // This avoids multiple listeners being added over time and leading to 1 click skipping multiple questions
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <div className="flex w-full max-w-sm items-center">
      <button
        className="bg-primary text-white p-4 flex-1 cursor-pointer transition-all hover:bg-primary/90 active:scale-95"
        onClick={onPrev}
      >
        Previous
      </button>
      <span className="text-primary px-4">
        {questionIdx + 1} / {questionCount}
      </span>
      <button
        className="bg-primary text-white p-4 flex-1 cursor-pointer transition-all hover:bg-primary/90 active:scale-95"
        onClick={onNext}
      >
        Next
      </button>
    </div>
  )
}
