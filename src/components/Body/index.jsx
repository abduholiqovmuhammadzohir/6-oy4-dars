import React from 'react'
import styles from './index.module.css'
import yuklash from '../img/yuklash.png'
import wicon from '../img/world-icon.png'
import iicon from '../img/instagram-icon.png'
import ticon from '../img/telegram-icon.png'
import ficon from '../img/facebook-icon.png'
import gicon from '../img/github-icon.png'


export default function Body() {
    return (
        <>
            <div className={styles.body}>
                <h1>Kompaniya ma’lumotlari</h1>
                <p>Kompaniya haqidagi ma’lumotlarni kiriting</p>
                <div className={styles.yuklash}>
                    <img src={yuklash} />
                    <h5>Yuklash</h5>
                </div>
                <div className={styles.name}>
                    <label htmlFor="">Kompaniya nomi *</label><br />
                    <input type="text" placeholder='Kompaniya nomi' />
                </div>
                <div className={styles.email}>
                    <label htmlFor="">Email *</label><br />
                    <input type="email" placeholder='Email' />
                </div>
                <div className={styles.tel}>
                    <label htmlFor="">Telefon raqami *</label><br />
                    <select name="" id="">
                        <option>UZ +9989</option>
                        <option>UZ +9989</option>
                        <option>UZ +9989</option>
                    </select>
                </div>
                <div className={styles.link}>
                    <label htmlFor="">Linklar *</label>
                    <div className={styles.linkimg}>
                        <img src={wicon} />
                        <img src={iicon} />
                        <img src={ticon} />
                        <img src={ficon} />
                        <img src={gicon} />
                    </div>
                </div>
                <div className={styles.world}>
                    <div className={styles.worlds}>
                        <label htmlFor="">Davlat *</label><br />
                        <select name="" id="">
                            <option>Davlat</option>
                        </select>
                    </div>
                    <div className={styles.city}>
                        <label htmlFor="">Shahar *</label><br />
                        <select name="" id="">
                            <option>Shahar</option>
                        </select>
                    </div>
                </div>
                <div className={styles.name}>
                    <label htmlFor="">Yashash joyi *</label><br />
                    <input type="text" placeholder='Joy' />
                </div>
                <div className={styles.tel}>
                    <label htmlFor="">Hodimlar soni *</label><br />
                    <select name="" id="">
                        <option>Hodimlar soni</option>
                        <option>1</option>
                        <option>2</option>
                    </select>
                </div>
                <div className={styles.comment}>
                    <label htmlFor="">Izoh *</label><br />
                    <textarea name="" id="" >Kompaniya haqida izoh qoldiring</textarea>
                </div>
                <div className={styles.btn}>
                    <button className={styles.back}>Ortga</button>
                    <button className={styles.next}>keyingisi</button>
                </div>
            </div>
        </>
    )
}
