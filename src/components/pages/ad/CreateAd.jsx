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
              <div className="textInput">
                <div className="col_label">
                  <label htmlFor="cityDeparture">Город отправления:</label>
                  <label htmlFor="cityDelivery">Город прибытия:</label>
                  <label htmlFor="date">Дата:</label>
                </div>

                <div className="col_input">
                  <input type="text" id="cityDeparture" />
                  <input type="text" id="cityDelivery" />
                  <input type="date" id="date" />
                </div>
              </div>

              {/* <label htmlFor="startCity" className="textareaForm">
                дополнительная информация:&nbsp;
                <textarea name="" id="" cols="10" rows="30"></textarea>
              </label> */}
              <div className="form_btns">
                <button type="submit">Отправить</button>
                <button>Назад</button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </>
  );
}

export default CreateAd;
