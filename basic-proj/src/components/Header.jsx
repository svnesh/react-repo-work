import logo from '../assets/react.svg'

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="react logo" />
      </div>
      <div className="title">
        mini challenge
      </div>
    </div>
  )
}

export default Header