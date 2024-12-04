import React from 'react';
import './Footer.css';
import footer_logo from '../Assets/logo-text.png';
import instagram_icon from '../Assets/instagram_icon.png';
import pintester_icon from '../Assets/pintester_icon.png';
import whatsapp_icon from '../Assets/whatsapp_icon.png';
import { Link} from "react-router-dom";
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="Mebelify Logo" />
        </div>
        <ul className='footer-links'>
            {/* <li>Company</li>
            <li>Products</li>
            <li>Offices</li> */}
         
            <Link className='contact' to='/contact'>Contact</Link>
            <Link className='about' to='/About'>About</Link>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <img src={instagram_icon} alt="Instagram" />
            </a>
            </div>
            <div className="footer-icons-container">
            <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
                <img src={pintester_icon} alt="Pinterest" /> 
                </a>
            </div>
            <div className="footer-icons-container">
            <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
                <img src={whatsapp_icon} alt="WhatsApp" />
                </a> 
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2024 - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer;
