export default function NextPrevButtons() {
  return (
    <div className="flex w-full max-w-sm items-center">
      <button className="bg-primary text-white p-4 flex-1 cursor-pointer transition-all hover:bg-primary/90 active:scale-95">
        Previous
      </button>
      <button className="bg-primary text-white p-4 flex-1 cursor-pointer transition-all hover:bg-primary/90 active:scale-95">
        Next
      </button>
    </div>
  )
}
