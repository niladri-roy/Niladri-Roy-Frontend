import React from 'react';
import {useLocation} from 'react-router-dom';
import './Header.css';
import Hamburger from './Hamburger';

const navItemsInfo = 
[
  { name: "Home", url: "/" },
  { name: "About Me", url: "/about" },
  { name: "Projects", url: "/projects" },
  { name: "Blogs", url: "/blogs" },
  { name: "Contact", url: "/contact" }
];

const NavLinks = ({ name, url }) => 
{
  const location = useLocation();
  const isActive = location.pathname === url;
  const linkClass = isActive ? "link-active" : "link-not-active";

  return (
    <a href={url} className={linkClass}>{name}</a>
  );
};


const Header = () => 
{
  const [showNavbar, setShowNavbar] = React.useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  }

  return (
    <div className='navbar show'>
      <div className="navbar-content container">
        <div className="h1 logo">
          Niladri Roy
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
           <Hamburger />
        </div>
        <div className={`nav-elements ${showNavbar && "active container"}`}>
          {navItemsInfo.map((item, index) => (
            <NavLinks key={index} name={item.name} url={item.url} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;