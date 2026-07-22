import Logo from '../../../assets/Logo.png'
import { Navigation } from '../../navigation/navigation'
import { GoArrowRight } from "react-icons/go";
import './header.css'
import { Sidebar } from '../../sidebar/sidebar';

export const Header: React.FC = () => {
  return (
    <header id="header" className="header">
      <div id="wrapper" className="header__wrapper">
        <div className="header-logo">
          <a href="/" className="logo">
          <img src={Logo} alt="Logo"/></a>
        </div>
        <div className="side-left">
            <div className="header-menu"><Navigation/></div>
            <button className="register-account">Register Now <GoArrowRight/></button>
          </div>
          <Sidebar/>
      </div>
    </header>
  )
}