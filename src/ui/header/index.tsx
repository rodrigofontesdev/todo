import styles from './styles.module.css'

import logoImg from '@static/images/logo.svg'

export function Header() {
  return (
    <header className={styles.mainHeader}>
      <div className={styles.container}>
        <img
          src={logoImg}
          width={126}
          height={48}
          alt="ToDo"
        />
      </div>
    </header>
  )
}
