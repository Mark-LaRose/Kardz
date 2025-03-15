import React from 'react';
import '../styles/header.css';
import headerImage from '../assets/images/kards.png';

const Header: React.FC = () => {
  return (
    <header>
      <h1>House of Kards</h1>
      <h2>Family Fun And Games For Everyone!</h2>
      <img src={headerImage} alt="Header Design" />

      {/* Stars - Positioned Around Words */}
      <div className="stars">
        <div className="star" style={{ top: '340px', left: '440px', animationDelay: '0s' }}></div>
        <div className="star" style={{ top: '80px', left: '430px', animationDelay: '0.5s' }}></div>
        <div className="star" style={{ top: '200px', left: '320px', animationDelay: '1s' }}></div>
        <div className="star" style={{ top: '120px', left: '640px', animationDelay: '1.5s' }}></div>
        <div className="star" style={{ top: '80px', left: '800px', animationDelay: '2s' }}></div>
        <div className="star" style={{ top: '175px', left: '1080px', animationDelay: '2.5s' }}></div>
        <div className="star" style={{ top: '245px', right: '300px', animationDelay: '3s' }}></div>
        <div className="star" style={{ top: '50px', right: '340px', animationDelay: '3.5s' }}></div>
        <div className="star" style={{ top: '330px', right: '700px', animationDelay: '4s' }}></div>
      </div>
    </header>
  );
};

export default Header;