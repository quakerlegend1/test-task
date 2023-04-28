import styles from "./app.module.css";
import carousel from "../public/carousel.png";
import logo from "../public/logo.svg";
import vkIcon from "../public/vk-icon.svg";
import whatsappIcon from "../public/whatsapp-icon.svg";
import telegramIcon from "../public/telegram-icon.svg";
import { useState } from "react";


function toScroll(state) {
  document.onscroll=()=>{if(window.pageYOffset > 0) {state(true)} else {state(false)}}
}

function App() {
  
  const [shadow, setShadow] = useState(false);
    toScroll(setShadow)
  
  return (
    <div className={styles.container}>
      <header className={shadow ===false ? styles.header :[styles.header, styles.headerShadow].join(" ")} >
        <section className={styles.headerMain}>
          <section className={styles.headerInfo}>
            <div className={styles.logoMain}>
              <div><span>Санкт-Петербург</span></div>
              <img alt="logo" src={logo}/>
            </div>
            <div className={styles.socialMedia}>
              <a href="https://vk.me/spb.mipk?roistat_visit=139310" target="_blank">
                <img alt="vk-icon" width="30" src={vkIcon } />
              </a>
              <a href="https://wa.me/+79210975015?roistat_visit=139310&text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%9C%D0%BD%D0%B5%20%D0%BD%D1%83%D0%B6%D0%BD%D0%B0%20%D0%BA%D0%BE%D0%BD%D1%81%D1%83%D0%BB%D1%8C%D1%82%D0%B0%D1%86%D0%B8%D1%8F.%20%D0%9C%D0%BE%D0%B9%20%D0%BD%D0%BE%D0%BC%D0%B5%D1%80%20%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8F:%20127929" target="_blank">
                <img alt="whatsapp-icon" width="30" src={whatsappIcon } />
              </a>
              <a href="https://telegram.me/spmipk?roistat_visit=139310" target="_blank">
                <img alt="telegram-icon" width="30" src={telegramIcon } />
              </a>
            </div>
            <form className={styles.form}>
              <input type="search" placeholder="НАЙТИ" className={styles.searchInput}></input>
              <input type="submit" value="ПОИСК" className={styles.submitInput}></input>
            </form>
            <div className={styles.contacts}>
              <span style={{color:"#4E6BAD"}}>ПН-ВС 09:00 - 18:00 &#40;МСК&#41;</span>
              <a href="tel:88000000000" style={{fontSize:"24px",fontWeight:"500",color:"#001B5B"}}>8&#40;800&#41; 000-00-00</a>
              <a href="info@spmipk.com" style={{color:"#4E6BAD",fontSize:"16px"}}>info@spmipk.com</a>
            </div>
          </section>
          <div className={shadow === false ? styles.blueLine : [styles.blueLine,styles.blueLineNone].join(" ")}></div>
          <nav>
            <ul className={shadow ? [styles.headerNavigation, styles.headerNavigationNone].join(" "): styles.headerNavigation}>
              <li>направления</li>
              <li>обучение</li>
              <li>партнерам</li>
              <li>об институте</li>
              <li>контакты</li>
            </ul>
          </nav>
        </section>
      </header>
      <main className={styles.main}>
        <img src={carousel} width="1353" height="400"/>
        <img src={carousel} width="1353" height="400"/>
        <img src={carousel} width="1353" height="400"/>
        <img src={carousel} width="1353" height="400"/>
        <img src={carousel} width="1353" height="400"/>
      </main>
    </div>  
  )
}

export default App
