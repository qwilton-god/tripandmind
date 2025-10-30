import React from 'react';
import arrow from './images/arrow.svg'
const Review = () => {
  return (
    <div className="review" id="review">
      <div className="review-block">
        <h2 className="review-block-title">Что пишут участники наших путешествий</h2>
        <p className="review-block-subtitle">
          87% участников приходят по личной рекомендации от<br></br> друзей. 
          А каждый 4-ый путешествует с нами больше двух раз!
        </p>
        <button className="review-block-btn">Читать отзывы</button>
      </div>
      
      <div className="review-card">
        <div className="review-card-block">
          <div className="review-title-text">
            <h3 className="review-card-title">Отзыв</h3>
            <span className="review-card-subtitle">Елена Иванова</span>
          </div>
          <div className="review-card-text">
            <p className="review-card-text"> Пожалуй, это был самый<br></br> лучший отпуск в моей жизни…</p>
            <span className="review-card-arrow"><img src={arrow} alt="Arrow" /></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;