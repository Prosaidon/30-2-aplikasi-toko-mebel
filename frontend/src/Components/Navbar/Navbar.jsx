import React, { useState, useEffect, useRef, useContext } from "react";
import axios from "axios";
import './Navbar.css'
import logo from '../Assets/logo-text.png'
import cart_icon from '../Assets/cart_icon.png'
import search_icon from '../Assets/search_icon.png'
// import review_icon from '../Assets/review-icon.png'
import people_icon from '../Assets/people_icon.png'

import { Link, useNavigate, useLocation } from "react-router-dom";
import Anon from '../Assets/people_icon.png'

import nav_dropdown from '../Assets/img_dropdown.png'
import { ShopContext } from "../../Context/ShopContext";


const Navbar = () => {

        
    const API_URL = process.env.REACT_APP_API_URL;
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const [showAdmin, setShowAdmin] = useState(false)
    const [showNavbar, setShowNavbar] = useState(true); // State untuk visibilitas navbar
    const [lastScrollY, setLastScrollY] = useState(0); // Menyimpan posisi scroll terakhir
    const navigate = useNavigate();

    const location = useLocation();
    const menuRef = useRef();
    const userImage = localStorage.getItem('profile-image');
    const isAdmin = localStorage.getItem('isAdmin')
    const {getTotalCartItems}= useContext(ShopContext)
    // const menuRef = useRef();

    const dropdown_toggle = (e) => {
        if (menuRef.current) {
            menuRef.current.classList.toggle('nav-menu-visible');
        } else {
            console.error("menuRef tidak ditemukan");
        }
        if (e.target) {
            // Tambahkan/menghapus kelas 'open' pada elemen yang di-klik
            e.target.classList.toggle('open');
        } else {
            console.error("Element target tidak ditemukan");
        }

    };


    const searchHandler = async () => {
        try {
            const response = await axios.get(`${API_URL}/search?query=${searchQuery}`);
            setSearchResults(response.data);
            setShowResults(true);
        } catch (error) {
            console.error("Error fetching search results:", error);
        }
    }
    

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            searchHandler();
        }
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.nav-search') && !event.target.closest('.search-results')) {
                setShowResults(false);
            }
        };
        
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                setShowNavbar(false); // Sembunyikan navbar saat scroll ke bawah
            } else {
                setShowNavbar(true); // Tampilkan navbar saat scroll ke atas
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    const handleIconClick = ()=>{
        window.scrollTo(0, 0)
    }

    const handleLink = ()=>{
        if (isAdmin !== 'true') {
            setShowAdmin(false)
        }else{
            setShowAdmin(true)
        }
    }
    const handleResultClick = (productId) => {
        window.scrollTo(0, 0); // Scroll ke atas
        navigate(`/product/${productId}`);
    };

    const [menu, setMenu] = useState("shop");
    if(location.pathname === '/admin'){
        return null;
    }
    return (
        <div className={`navbar ${showNavbar ? 'visible' : 'hidden'}`}> {/* Menambahkan class untuk mengubah visibilitas navbar */}
            <div className="nav-logo">
                <Link to='/'><img src={logo} alt="logo" /></Link>
            </div>
            <img className="nav-dropdown" onClick={dropdown_toggle} src={nav_dropdown} alt="" />
            <ul ref={menuRef} className="nav-menu">
                <li onClick={() => { window.scrollTo(0, 0); setMenu("shop") }}>
                    <Link style={{ textDecoration: 'none', color: 'black' }} to='/'>Shop</Link>
                    {menu === "shop" ? <hr /> : null}
                </li>
                <li onClick={() => { window.scrollTo(0, 0);  setMenu("home") }}>
                    <Link style={{ textDecoration: 'none', color: 'black' }} to='/home'>Home</Link>
                    {menu === "home" ? <hr /> : null}
                </li>
                <li onClick={() => { window.scrollTo(0, 0); setMenu("office") }}>
                    <Link style={{ textDecoration: 'none', color: 'black' }} to='/office'>Office</Link>
                    {menu === "office" ? <hr /> : null}
                </li>
                <li onClick={() => { window.scrollTo(0, 0); setMenu("kitchen") }}>
                    <Link style={{ textDecoration: 'none', color: 'black' }} to='/kitchen'>Kitchen</Link>
                    {menu === "kitchen" ? <hr /> : null}
                </li>
            </ul>
            <div className="nav-search-login-cart">
                <div className="nav-search">
                    <input
                        type="text"
                        placeholder="Cari..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                    <Link to=''><img onClick={searchHandler} src={search_icon} alt="search" id="search_icon" /></Link>
                </div>
                {localStorage.getItem('auth-token') && ( // Menampilkan hanya jika ada token
                    <Link to={showAdmin? '/admin': '/dashboard'} onClick={handleIconClick} onFocus={handleLink}><img className="pfp" src={userImage ? userImage : Anon} alt="" />
                    </Link>
                    
                )}
                {localStorage.getItem('auth-token') && (
                    <Link to='/dashboard' className="dash">
                        Hello, {localStorage.getItem('user-name')}
                    </Link>
                    
                )}
                {localStorage.getItem('auth-token')
                    ? <Link style={{display: 'none'}}/>
                    : <Link to='/login'><img src={people_icon} alt="login" id="login-icon" /></Link>
                }
                <Link to='/cart' onClick={handleIconClick}>
                    <div className="cart-container">
                        <img src={cart_icon} alt="cart" id="cart-icon" />
                        <div className="nav-cart-icon">{getTotalCartItems()}</div>
                    </div>
                </Link>
            </div>
            {showResults && searchResults.length > 0 && (
                <div className="search-results">
                    {searchResults.map(result => (
                        <div className="search-results-item" onClick={() => handleResultClick(result.id)} key={result.id}>
                            <h3>{result.name}</h3>
                            <p>{result.category} - {result.sub_category}</p>
                            <img src={result.image} alt="" />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Navbar;
