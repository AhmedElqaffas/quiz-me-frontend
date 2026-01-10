import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

import CardActions from '../components/flash_card/CardActions'
import FlashCard from '../components/flash_card/FlashCard'
import NextPrevButtons from '../components/flash_card/NextPrevButtons'

export const Route = createFileRoute('/quiz')({ component: App })
function App() {
  const [isFlipped, setFlipped] = useState(false)
  const question = 'What is the capital of France?'
  const answer = 'Paris'

  return (
    <div className="min-h-screen flex items-center justify-center gap-4">
      {/* 1. This container holds the card and side buttons */}
      <div className="flex flex-row items-center gap-4">
        {/* 2. This column ensures buttons stay centered under the card */}
        <div className="flex flex-col items-center gap-4">
          <FlashCard
            isFlipped={isFlipped}
            onFlip={() => setFlipped(!isFlipped)}
            card={{ question, answer }}
          />

          {/* Next/Prev Row */}
          <NextPrevButtons />
        </div>

        {/* 3. The side actions are outside that column, so they stays to the right */}
        <CardActions onFlip={() => setFlipped(!isFlipped)} />
      </div>
    </div>
  )
}
