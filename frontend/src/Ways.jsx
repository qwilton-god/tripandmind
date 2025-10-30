import React from 'react';
import arrow from './images/arrow.svg'
const Ways = () => {
  return (
    <div className="ways" id="ways">
      <div className="ways-card">
        <div className="ways-card-block">
          <div className="ways-title-text">
            <h3 className="ways-card-title">10-24</h3>
            <span className="ways-card-subtitle">апреля</span>
          </div>
          <div className="ways-card-text">
            <p className="ways-card-text">Большое ущелье на острове Гавайи</p>
          </div>
        </div>
      </div>
      
      <div className="ways-block">
        <h2 className="ways-block-title">Посмотрите все направления туров</h2>
        <p className="ways-block-subtitle">
          Берега океанов и дикие пляжи с редкими породами деревьев. 
          Местная архитектура и первозданный вид дикой природы
        </p>
        <button className="ways-block-btn">Смотреть все</button>
      </div>
    </div>
  );
};

export default Ways;