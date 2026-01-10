import type { Card } from '../../model/Card'

interface FlashCardProps {
  isFlipped: boolean
  onFlip: () => void
  card: Card
}

export default function FlashCard({ isFlipped, onFlip, card }: FlashCardProps) {
  return (
    <div
      className="relative w-50 md:w-90 aspect-[2/1.3] rounded-3xl shadow-2xl dark:shadow-white dark:shadow-xl/20 flex items-center justify-center overflow-y-auto"
      onDoubleClick={onFlip}
    >
      <span
        className={`text-center font-semibold text-lg md:text-xl break-words whitespace-pre-line px-4 w-full 
            ${isFlipped ? 'text-green-600' : 'text-red-500'}`}
        style={{
          wordBreak: 'break-word',
          maxHeight: '100%',
        }}
      >
        {isFlipped ? `A: ${card.answer}` : `Q: ${card.question}`}
      </span>
    </div>
  )
}
