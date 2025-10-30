import React from 'react';
import facebook from './images/facebook-footer.svg';
import twitter from './images/twitter-footer.svg';
import youtube from './images/youtube-footer.svg';
import vk from './images/vk-footer.svg';
import logo from './images/blackLogo.svg';
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-left">
        <a href="#hero" className="footer-logo">
          <img src={logo} alt="Logo"/>
        </a>
        <div className="footer-links">
          <a href="#" className="footer-link">Политика<br/> конфиденциальности</a>
          <a href="#" className="footer-link">Соглашение на обработку<br/> персональных данных</a>
        </div>
      </div>
      
      <div className="footer-social">
        <a href="#"><img src={youtube} alt="YouTube"/></a>
        <a href="#"><img src={facebook} alt="Facebook"/></a>
        <a href="#"><img src={twitter} alt="Twitter"/></a>
        <a href="#"><img src={vk} alt="VK"/></a>
      </div>
    </div>
  );
};

export default Footer;