import React, { Component } from "react";
import "./header.scss";
import { bard, logo } from "../../imgs";

export default class Header extends Component {
  handleMode = () => {
    document.body.classList.toggle("dark");
  };
  render() {
    return (
      <>
        <nav>
          <div className="container">
            <div className="header">
              <img src={logo} alt="Logo" />
              <ul>
                <div className="dropdown">
                  <span>Продукция</span>
                  <div className="dropdown-content">
                    <li className="drl">Ламинатные тубы</li>
                    <li className="drl">Экструзионные тубы</li>
                    <li className="drl">Другая упаковка</li>
                  </div>
                </div>
                <li>Сертификаты</li>
                <li>Наша команда</li>
                <li>О нас</li>
                <li>Новости</li>
                <li>Вакансии</li>
                <li>Контакты</li>
              </ul>
              <div className="btns">
                {/* <div className="bard">
                  <div className="bard_head"></div>
                  <div className="bard_head"></div>
                  <div className="bard_head"></div>
                </div> */}
                <img className="bard_img" src={bard} alt="" />
                <button className="btn" onClick={this.handleMode}>
                  Dark mode
                </button>
              </div>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
