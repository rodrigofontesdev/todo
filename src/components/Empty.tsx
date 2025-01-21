import styles from './Empty.module.css'

import clipboardImg from './../static/images/clipboard.svg'

export function Empty() {
  return (
    <div className={styles.empty}>
      <img src={clipboardImg} alt="Ícone de prancheta" width={56} height={56} />
      <p>
        <strong>Você ainda não tem tarefas cadastradas</strong>
      </p>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  )
}
