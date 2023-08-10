import React from 'react';
import './AdStyle.css';
import imgChooseRole from '../../graphics/choose_role.png';
function CreateAd() {
  return (
    <>
      <div className="role__wrapper">
        <div className="container_content">
          <img className="role__image" src={imgChooseRole} alt="" />

          <form action="" className="role__ad_form">
            <fieldset>
              <legend>Параметры заявки</legend>
              <div className="role__radio">
                <label>
                  <input type="radio" value="sender" name="chooseRole" />Я
                  отправитель
                </label>

                <label>
                  <input type="radio" value="courier" name="chooseRole" />Я
                  курьер
                </label>
              </div>
              <div className="adOptions">
                <div className="col">
                  <label htmlFor="cityDeparture">отправления из:</label>
                  <label htmlFor="cityDelivery">прибытия в:</label>
                  <label htmlFor="date">дата:</label>
                  <label htmlFor="message">инфо:</label>
                </div>
                <div className="col">
                  <input type="text" id="cityDeparture" />
                  <input type="text" id="cityDelivery" />
                  <input type="date" id="date" />{' '}
                  <textarea name="" id="" cols="5" rows="7"></textarea>
                </div>
              </div>
            </fieldset>
            <div className="form_btns">
              <button type="submit">Отправить</button>
              <button>Назад</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default CreateAd;
