import { useState } from "react"

const LikeButton = () => {

  const [likeCount, setLikeCount] = useState(0);
  const [likeText, setLikeText] = useState('Like');

  const handleLike = () => {
    setLikeCount(prev => prev + 1)
    setLikeText(likeText === 'Like' ? 'Liked' : 'Like')
  }

  return (
    <div>
      <p></p>
      <span>Name: </span><input type="text" onChange={(e) => e.target.value} placeholder="Enter name" />
      <span>Rating: </span>
      <div>

      </div>
      <input type='radio' />

      <h2>Like Button: {likeText} {likeCount}</h2>
      <button onClick={handleLike}>Click Here!</button>

    </div>
  )
}

export default LikeButton