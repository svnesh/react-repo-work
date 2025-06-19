const ButtonPanel = ({onClickAction}) => {
  return (
    <div>
      <button onClick={() => onClickAction('React')}>React</button>
      <button onClick={() => onClickAction('Javascript')}>Javascript</button>
    </div>
  )
}

export default ButtonPanel