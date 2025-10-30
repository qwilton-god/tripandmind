import React from 'react';
import logoSvg from './images/logo.svg';
import arrowSvg from './images/arrow.svg';
import facebook from './images/facebook.svg';
import twitter from './images/twitter.svg';
import youtube from './images/youtube.svg';
import vk from './images/vk.svg';
import playSvg from './images/play.svg';
import burgerSvg from './images/burger.svg';

const Hero = () => {
  return (
    <div className="hero">
      <header className="hero-header">
        <img src={logoSvg} alt="Логотип" className="hero-logo" />
        <nav className="hero-nav">
          <a href="" className="hero-nav-item">Все туры</a>
          <a href="" className="hero-nav-item">Контакты</a>
          <a href="" className="hero-nav-item">Отзывы</a>
        </nav>
        <button className="hero-burger">
          <img src = {burgerSvg}></img>
        </button>
      </header>
      
      <h1 className="hero-title">Открой для себя Новую Ирландию</h1>
      <p className="hero-subtitle">Авторские туры по экзотическим уголкам от Ивана Иванова</p>
      
      <div className="hero-buttons">
        <button className="hero-btn">Оставить заявку</button>
        <button className="hero-btn-play">
          <img src = {playSvg}></img>
        </button>
        <span className="hero-btn-text">Посмотрите видео-отчет 2018-2019</span>
      </div>
      
      <div className="hero-footer">
        <div className="hero-social">
          <span className="hero-social-title">Подписывайтесь в соцсетях</span>
          <a href="#" className="hero-social-link"><img src={youtube}></img></a>
          <a href="#" className="hero-social-link"><img src={facebook}></img></a>
          <a href="#" className="hero-social-link"><img src={twitter}></img></a>
          <a href="#" className="hero-social-link"><img src={vk}></img></a>
        </div>
        
        <div className="hero-cards">
          <div className="hero-card">
            <div className="hero-card-block">
              <h3 className="hero-card-title">02</h3>
              <div className="hero-card-text">
                <p className="hero-card-desc">Водопады Исландии</p>
                <img src={arrowSvg} alt="Arrow" />
              </div>
            </div>
          </div>
          <div className="hero-card">
            <div className="hero-card-block">
              <h3 className="hero-card-title">03</h3>
              <div className="hero-card-text">
                <p className="hero-card-desc">Сказочные Доломиты</p>
                <img src={arrowSvg} alt="Arrow" />
              </div>
            </div>
          </div>
          <div className="hero-card">
            <div className="hero-card-block">
              <h3 className="hero-card-title">04</h3>
              <div className="hero-card-text">
                <p className="hero-card-desc">Неизведанная Норвегия</p>
                <img src={arrowSvg} alt="Arrow" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;