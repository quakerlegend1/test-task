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
              <a href="https://spmipk.com/"><img alt="logo" src={logo}/></a>
            </div>
            <div className={styles.socialMedia}>
              <a href="#" target="_blank">
                <img alt="vk-icon" width="30" src={vkIcon } />
              </a>
              <a href="#" target="_blank">
                <img alt="whatsapp-icon" width="30" src={whatsappIcon } />
              </a>
              <a href="#" target="_blank">
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
        <br></br>
        <img src={carousel} width="1353" height="400"/>
        <br></br>
        <img src={carousel} width="1353" height="400"/>
        <br></br>
        <img src={carousel} width="1353" height="400"/>
        <br></br>
        <img src={carousel} width="1353" height="400"/>
      </main>
    </div>  
  )
}

export default App
