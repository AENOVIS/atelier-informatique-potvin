import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">Bienvenue chez Atelier Informatique Potvin</h1>
          <p className="hero-subtitle">Votre partenaire de confiance pour tous vos besoins informatiques</p>
          <div className="hero-buttons">
            <a href="#services" className="btn">Nos Services</a>
            <a href="#contact" className="btn btn-secondary">Nous Contacter</a>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .hero {
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--accent-color) 100%);
          color: var(--text-white);
          padding: 6rem 0;
          text-align: center;
        }
        
        .hero-content {
          max-width: 800px;
          margin: 0 auto;
        }
        
        .hero-title {
          font-size: var(--font-size-4xl);
          color: var(--text-white);
          margin-bottom: 1rem;
          animation: fadeIn 1s ease-in;
        }
        
        .hero-subtitle {
          font-size: var(--font-size-xl);
          margin-bottom: 2rem;
          color: var(--text-white);
          opacity: 0.9;
        }
        
        .hero-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }
        
        @media (max-width: 768px) {
          .hero {
            padding: 4rem 0;
          }
          
          .hero-title {
            font-size: var(--font-size-3xl);
          }
          
          .hero-subtitle {
            font-size: var(--font-size-lg);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
