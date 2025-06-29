import { HomeIcon } from "lucide-react"

const Home = () => {
  return (
    <h1 className="flex gap-1 items-center text-2xl font-bold">
      <HomeIcon width={20} height={20} /><span>Home Page</span>
    </h1>
  )
}

export default Home