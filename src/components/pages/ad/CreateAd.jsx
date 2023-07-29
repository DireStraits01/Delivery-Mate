import React from 'react';
import './AdStyle.css';
import imgChooseRole from '../../graphics/choose_role.png';
function CreateAd() {
  return (
    <>
      <div className="role__wrapper">
        <div className="container_content">
          <img className="role__image" src={imgChooseRole} alt="" />
          <div className="role__ad_form">
            <div className="role__radio">
              <label>
                Я клиент
                <input type="radio" value="sender" name="chooseRole" />
              </label>

              <label>
                Я курьер
                <input type="radio" value="courier" name="chooseRole" />
              </label>
            </div>
            <div className="role__direction">
              <label htmlFor="startCity">
                город отправления: <input type="text" value="" id="startCity" />
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateAd;
