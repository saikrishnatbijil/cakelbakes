import './nav.css'
import Logo from '../../assets/logo.png'
import subLogo from '../../assets/sublogo.png'

function nav() {
  return (
    <navbar className='navContainer'>
        <div className="navbar">
        <p className='navLinks'>HOME</p>
        <img className='logo' src={Logo} alt="CakeLBakes" />
        <p className='navLinks'>CONTACT</p>
        </div>
        <div className="mobNavbar">
          <img className='logo' src={subLogo} alt="Cake L Bakes" />
          <ul>
            <li><p className='navLinks'>HOME</p></li>
            <li><p className='navLinks'>CONTACT</p></li>
          </ul>
        </div>
    </navbar>
  )
}

export default nav