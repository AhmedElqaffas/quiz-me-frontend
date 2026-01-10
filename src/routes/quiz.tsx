import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

import CardActions from '../components/flash_card/CardActions'
import FlashCard from '../components/flash_card/FlashCard'
import NextPrevButtons from '../components/flash_card/NextPrevButtons'

export const Route = createFileRoute('/quiz')({ component: Quiz, 
    loader: async () => {
        // just for testing, fetch 10 questions from OpenTDB
        const res = await fetch('https://opentdb.com/api.php?amount=10');
        const results = (await res.json()).results;
        return {results};
    }
})

function Quiz() {
  const [isFlipped, setFlipped] = useState(false)
  const [questionIdx, setQuestionIdx] = useState(0)
  const data = Route.useLoaderData();

  function goToPrevQuestion(): void {
    setFlipped(false)
    return setQuestionIdx(prev => Math.max(0, prev - 1))
  }

  function goToNextQuestion(): void {
    setFlipped(false)
    return setQuestionIdx(prev => Math.min(data.results.length - 1, prev + 1))
  }

  return (
    <div className="min-h-screen flex items-center justify-center gap-4">
      {/* 1. This container holds the card and side buttons */}
      <div className="flex flex-row items-center gap-4">
        {/* 2. This column ensures buttons stay centered under the card */}
        <div className="flex flex-col items-center gap-4">
          <FlashCard
            isFlipped={isFlipped}
            onFlip={() => setFlipped(!isFlipped)}
            card={{ question: data.results[questionIdx].question, answer: data.results[questionIdx].correct_answer }}
          />

          {/* Next/Prev Row */}
          <NextPrevButtons questionIdx={questionIdx} questionCount={data.results.length}
          onPrev={goToPrevQuestion} onNext={goToNextQuestion} />
        </div>

        {/* 3. The side actions are outside that column, so they stays to the right */}
        <CardActions onFlip={() => setFlipped(!isFlipped)} />
      </div>
    </div>
  )
}
