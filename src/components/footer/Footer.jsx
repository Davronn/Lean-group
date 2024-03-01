import React, { Component } from "react";
import "./footer.scss";
import { bt, links, logo } from "../../imgs";
export default class Footer extends Component {
  
  handleBacktop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  render() {
    
    return (
      <>
        <footer>
          <div className="container">
            <div className="footer">
              <div className="footer_imgs">
                <img src={logo} alt="" />
                <img src={links} alt="" />
              </div>
              <div className="line"></div>
              <div className="links">
                <ul>
                  <p>Продукция</p>
                  <li>Ламинатные тубы</li>
                  <li>Экструзионные тубы</li>
                  <li>Другая упаковка</li>
                </ul>
                <ul>
                  <p>Компания</p>
                  <li>О нас</li>
                  <li>Наша команда</li>
                  <li>Сертификаты</li>
                </ul>
                <ul>
                  <p>Разделы</p>
                  <li>Контакты</li>
                  <li>Новости</li>
                  <li>Вакансии</li>
                </ul>
                <div className="links_num">
                  <div className="links_num1">
                    <p>
                      <span>Беларусь</span>
                    </p>
                    <p>+375 (17) 270 53 77</p>
                    <p>+375 (17) 270 53 77</p>
                  </div>
                  <div className="links_num2">
                    <p>
                      <span>Москва</span>
                    </p>
                    <p>+375 (17) 270 53 77</p>
                    <p>+375 (17) 270 53 77</p>
                  </div>
                </div>
                <div className="links_numm">
                  <div className="links_numm1">
                    <p>
                      <span>Европа</span>
                    </p>
                    <p>+48 73 1111 044</p>
                  </div>
                  <div className="links_numm1">
                    <p>
                      <span>Екатеринбург</span>
                    </p>
                    <p>+48 73 1111 044</p>
                  </div>
                </div>
              </div>
              <p className="f">p© 2022 Leangroup. All Rights Reserved. <br /> Разработка и продвижение
              сайтов SkyWeb.by</p>
              <img onClick={this.handleBacktop} className="backtop" src={bt} alt="" />
            </div>
          </div>
        </footer>
      </>
    );
  }
}
