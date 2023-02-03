import { Trash,ThumbsUp } from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

export function Comment({content }){
  return(
    <div className={styles.comment}>
      <Avatar 
        src="https://github.com/diego3g.png"
        hasBorder={false}
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authotAndTime}>
              <strong>Diego Fernandes</strong>
              <time
                title="28 de janeiro às 08:13h"
                dateTime="2023-01-28 08:13:30"
              >
              {' '}Cerca de 1h atrás
              </time>
            </div>
            <button title='Deletar comentário'>
              <Trash size={24}/>
            </button>
          </header>
          <p>{content}</p>
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