import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="form" id="form">
      <div className="form-text">
        <h2 className="form-text-title">Оставьте заявку на бесплатную консультацию</h2>
        <p className="form-text-subtitle">Мы перезвоним вам в ближайшее время</p>
      </div>
      
      <form onSubmit={handleSubmit} className="form-form">
        <input 
          className="form-form-name" 
          type="text" 
          name="name"
          maxLength="20" 
          placeholder="Ваше имя" 
          value={formData.name}
          onChange={handleChange}
          required 
        />
        <input 
          className="form-form-phone" 
          name="phone"
          placeholder="+7 (___) ___-__-__" 
          value={formData.phone}
          onChange={handleChange}
          required 
        /> 
        <button className="form-form-submit" type="submit">Отправить заявку</button>
        <span className="form-form-text">
          Нажимая кнопку, вы даете согласие на{' '}
          <a className="form-form-text-link" href="#">обработку персональных данных</a>
        </span>
      </form>
    </div>
  );
};

export default Form;