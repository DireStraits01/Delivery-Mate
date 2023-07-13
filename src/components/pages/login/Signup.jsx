import React from 'react';
import style from './LogPages.module.css';
import { NavLink } from 'react-router-dom';
import imgSignup from '../../graphics/signup.png';

function Signup() {
  return (
    <>
      <div className={style.container_log}>
        <img className={style.image_login} src={imgSignup} alt="" />
        <div className={style.button_wrapper_signup}>
          <h2 className={style.button_login_h2}>Регистрация</h2>
          <input
            className={style.button_login_input}
            type="text"
            placeholder="почта"
          />
          <input
            className={style.button_login_input}
            type="password"
            placeholder="пароль"
          />
          <input
            className={style.button_login_input}
            type="password"
            placeholder="повторить пароль"
          />

          <button className={style.button_signup}>зарегистрироваться</button>
          <p className={style.button_login_p}>
            У вас уже есть аккаунт?{' '}
            <span>
              <NavLink to="/login">войти</NavLink>
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Signup;
