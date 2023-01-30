import { Trash,ThumbsUp } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment(){
  return(
    <div className={styles.comment}>
      <img 
        src="https://avatars.githubusercontent.com/u/6678054?v=4"
        alt="Foto de quem comenta" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authotAndTime}>
              <strong>Nadi Duno</strong>
              <time
                title="28 de janeiro às 08:13h"
                dateTime="2023-01-28 08:13:30"
              >
                Cerca de ah atrás
              </time>
            </div>
            <button title='Deletar comentário'>
              <Trash size={20 }/>
            </button>
          </header>
          <p>Muito bom, parabéns!! 👏</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir
            <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}