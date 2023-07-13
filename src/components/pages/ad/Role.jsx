import React from 'react';
import style from './Ad.module.css';
import imgChooseRole from '../../graphics/choose_role.png';
function Role() {
  return (
    <>
      <div className={style.container_role}>
        <div className={style.container_content}>
          <img className={style.role_image} src={imgChooseRole} alt="" />
          <div className={style.ad_form}>
            <label className={style.label}>
              <div className={style.toggle}>
                <input
                  className={style.toggle_state}
                  type="checkbox"
                  name="check"
                  value="check"
                />
                <div className={style.indicator}></div>
              </div>
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default Role;
