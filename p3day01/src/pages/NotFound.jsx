import { CircleQuestionMark } from "lucide-react"

const NotFound = () => {
  return (
    <h1 className="flex gap-1 items-center text-2xl font-bold text-red-600">
      <CircleQuestionMark width={20} height={20} />404 Not found Page
    </h1>
  )
}

export default NotFound