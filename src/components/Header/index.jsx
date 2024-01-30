
import styles from './index.module.css'
import logo from '../img/logos.png'

export default function Button() {

  return (
    <>
      <div className={styles.header}>
        <div className={styles.logo}>
          <img src={logo} />
        </div>
        <div className={styles.nav}>
          <ul>
            <li>Vakansiyalar</li>
            <li>Kandidatlar</li>
            <li>Kompaniyalar</li>
            <li>Xizmatlar</li>
            <li>Ta’lim</li>
          </ul>
        </div>
        <div className={styles.login}>
          <p>O'zbek</p>
          <button>Boshlash</button>
        </div>
      </div>
    </>
  )
}
