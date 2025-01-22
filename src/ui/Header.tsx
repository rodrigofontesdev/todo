import styles from './Header.module.css'

import logoImg from '../static/images/logo.svg'

export function Header() {
  return (
    <header className={styles.mainHeader}>
      <div className={styles.container}>
        <img
          src={logoImg}
          alt="Todo App"
          width={126}
          height={48}
        />
      </div>
    </header>
  )
}
