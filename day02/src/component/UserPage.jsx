import { useState } from "react"

const UserPage = () => {

  const [user, setUser] = useState('')

  return (
    <div>
      <h2>User greeting</h2>
      <input type="text" value={user} onChange={(e) => setUser(e.target.value)}></input>
      <p>Hello {user || 'stranger'} 👋</p>
    </div>
  )
}

export default UserPage