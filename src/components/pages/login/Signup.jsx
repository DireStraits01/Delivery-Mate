import React from 'react';
import style from './LogPages.module.css';

function Signup() {
  return (
    <div>
      <div className={style.button_wrapper_signup}>
        <h2 className={style.button_login_h2}>Регистрация</h2>
        <input
          className={style.button_login_input}
          type="text"
          placeholder="enter your email"
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
          У вас уже есть аккаунт? <span>войти</span>
        </p>
      </div>
    </div>
  );
}

export default Signup;
