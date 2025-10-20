import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <div className="logo">
            <h1>Atelier Informatique Potvin</h1>
          </div>
          <ul className="nav-links">
            <li><a href="#home">Accueil</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">À propos</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
      
      <style jsx>{`
        .header {
          background-color: var(--primary-color);
          color: var(--text-white);
          padding: 1rem 0;
          box-shadow: var(--shadow-md);
          position: sticky;
          top: 0;
          z-index: var(--z-sticky);
        }
        
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .logo h1 {
          color: var(--text-white);
          font-size: 1.5rem;
          margin: 0;
        }
        
        .nav-links {
          display: flex;
          list-style: none;
          gap: 2rem;
          margin: 0;
          padding: 0;
        }
        
        .nav-links a {
          color: var(--text-white);
          text-decoration: none;
          transition: var(--transition-normal);
        }
        
        .nav-links a:hover {
          color: var(--accent-light);
        }
        
        @media (max-width: 768px) {
          .navbar {
            flex-direction: column;
            gap: 1rem;
          }
          
          .nav-links {
            gap: 1rem;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
