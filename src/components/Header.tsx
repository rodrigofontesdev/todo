import styles from './Header.module.css'

import logoImg from '../assets/logo.svg'

export function Header() {
  return (
    <header className={styles.mainHeader}>
      <div className={styles.container}>
        <img src={logoImg} alt="Logo ToDo" />
      </div>
    </header>
  )
}
