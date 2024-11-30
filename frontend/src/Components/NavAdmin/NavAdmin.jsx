
import './NavAdmin.css'
import navlogo from '../Assets/logo-admin-mebelify.png'
import navProfile from '../Assets/navbar-profile.png'
import { useLocation, useNavigate } from 'react-router-dom';

const NavAdmin = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogoClick = () => {
    navigate("/");
    
  };
  if(location.pathname !== '/admin'){
    return null;
  }
  return (
    <div className='navAdmin'>
        <img src={navlogo} onClick={handleLogoClick} alt="" className="navAdmin-logo" />
        <img src={navProfile} className='navAdmin-profile' alt="" />
    </div>
  )
}

export default NavAdmin