export interface Card {
  question: string
  answer: string
  category?: string
  related_questions?: Array<string>
}
