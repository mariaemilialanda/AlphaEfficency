import React, { useState } from 'react';

function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="menu">
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      {menuOpen && (
        <ul className="menu-items">
          <li>About Us</li>
          <li>Book Online</li>
          <li>Weight Loss Programs</li>
          <li>Real Patient Stories</li>
          <li>Locations</li>
          <li>Blog</li>
          <li>Shop</li>
          <li>Subscription</li>
        </ul>
      )}
    </div>
  );
}

export default Menu;