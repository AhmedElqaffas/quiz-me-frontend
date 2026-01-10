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
