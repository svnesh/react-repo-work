import ButtonPanel from "./component/ButtonPanel"
import Counter from "./component/Counter"
import LikeButton from "./component/LikeButton"
import UserPage from "./component/UserPage"

function buttonClickAction(tech){
  return(
    alert(`You have tech clicked ${tech}`)
  )
}

function App() {

  return (
    <>
      <Counter />
      <UserPage />
      <ButtonPanel onClickAction={buttonClickAction} />
      <LikeButton />
    </>
  )
}

export default App
