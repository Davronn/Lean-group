import React, { Component } from "react";
import "./aside.scss";
import { about, bg1, p1, p2, p3, p4, p5, s1, s2, s3, s4, s5 } from "../../imgs";
export default class Aside extends Component {
  render() {
    return (
      <>
        <aside>
          <div
            style={{
              backgroundImage: `url(${bg1})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className="aside_bg"
          >
            <div className="container">
              <div className="aside">
                <div className="aside_text">
                  <p className="title">LEANGROUP - тубы и этикетки</p>
                  <h1>Ламинатные тубы</h1>
                  <p className="aside_lorem">
                    Используются для производства зубных паст. Широко
                    применяются в сегменте косметики, пищевой индустрии,
                    парафармацевтике, бытовой химии и DIY (Do-it-Yourself).
                  </p>
                  <button className="aside_btn">Каталог</button>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="aside_about">
              <h1>
                О компании <span>LEANGROUP</span>
              </h1>
              <div className="about">
                <div className="about_img">
                  <img src={about} alt="" />
                </div>
                <div className="about_text">
                  <p>
                    Компания ООО «ЛеанГрупп» начала свою деятельность в 1999
                    году и на сегодняшний день является ведущей компанией по
                    производству ламинатных и экструзионных туб. Имея две
                    технологии – для производства ламинатных и экструзионных
                    туб, мы предлагаем вам широкий спектр возможностей. Большим
                    преимуществом является собственный печатный цех в ламинате и
                    in-line печать в экструзии с возможностью различных
                    дополнительных опций декора. Особое внимание уделяется
                    работе с поставщиками для контроля и поддержания качества
                    производимой нами продукции. С января 2018 года компания
                    стала членом Европейской Ассоциации производителей туб
                    (ETMA), что подтверждает сильную позицию бренда и на рынке
                    Европы.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="sertifikat">
              <h1 className="sertifikat_title">
                Качество продукции подтверждают <span>сертификаты</span>
              </h1>
              <div className="sertifikat_imgs">
                <img src={s1} alt="" />
                <img src={s2} alt="" />
                <img src={s3} alt="" />
                <img src={s4} alt="" />
                <img src={s5} alt="" />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="product">
              <h1>Наша <span>продукция</span></h1>
              <div className="produkt_btns">
                <button className="btn">Ламинатные тубы</button>
                <button className="btn">Экструзионные тубы</button>
                <button className="btn">Другая упаковка</button>
              </div>
              <div className="produkt_imgs">
                <img src={p1} alt="" />
                <img src={p2} alt="" />
                <img src={p3} alt="" />
                <img src={p4} alt="" />
                <img src={p5} alt="" />
              </div>
              <button className="btn">Перейти в каталог</button>
            </div>
          </div>
        </aside>
      </>
    );
  }
}
