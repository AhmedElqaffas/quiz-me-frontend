import { Link } from '@tanstack/react-router'
import { Home, Menu, ShieldQuestionMark, X } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <header className="p-4 flex items-center bg-background-secondary shadow-lg">
        <button
          onClick={() => setIsOpen(true)}
          className="p-2 hover:bg-foreground/40 rounded-lg"
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
        {!isOpen && (
          <>
            <h1 className="ml-4 text-xl font-semibold">
              <Link to="/">Quiz Me</Link>
            </h1>
          </>
        )}
      </header>

      <aside
        className={`fixed top-0 left-0 h-full w-80 bg-background-secondary shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <h2 className="text-xl font-bold">Navigation</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-foreground/40 rounded-lg"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="flex-1 p-4 overflow-y-auto">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/90 transition-colors mb-2"
            activeProps={{
              className:
                'flex items-center gap-3 p-3 rounded-lg bg-primary/30 hover:bg-primary/80 transition-colors mb-2',
            }}
          >
            <Home size={20} />
            <span className="font-medium">Home</span>
          </Link>

          <Link
            to="/quiz"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/90 transition-colors mb-2"
            activeProps={{
              className:
                'flex items-center gap-3 p-3 rounded-lg bg-primary/30 hover:bg-primary/80 transition-colors mb-2',
            }}
          >
            <ShieldQuestionMark size={20} />
            <span className="font-medium">Start Quiz</span>
          </Link>
        </nav>
      </aside>
    </>
  )
}
