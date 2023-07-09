import React from 'react';
import style from './LogPages.module.css';

function Login() {
  return (
    <>
      <div className={style.button_wrapper_login}>
        <h2 className={style.button_login_h2}>Вход в Demate</h2>
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
        <h5 className={style.button_login_forgot_password}>забыли пароль?</h5>
        <button className={style.button_login}>Войти</button>
        <p className={style.button_login_p}>
          У Вас нет аккаунта? <span>создать</span>
        </p>
      </div>
    </>
  );
}

export default Login;
