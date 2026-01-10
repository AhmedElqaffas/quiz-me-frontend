import ToolTip from '@mui/material/Tooltip'

interface CardActionsProps {
  onFlip: () => void
}

export default function CardActions({ onFlip }: CardActionsProps) {
  return (
    <ToolTip title="Flip Card">
      <button
        aria-label="Flip card"
        onClick={onFlip}
        className="border-none cursor-pointer"
      >
        {/* Simple flip icon (↻) */}
        <span className="font-bold text-neutral-400 hover:text-neutral-600 text-5xl">
          &#8635;
        </span>
      </button>
    </ToolTip>
  )
}
