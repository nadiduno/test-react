import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post(){
  return(
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar 
            // src="https://github.com/nadiduno.png"
            // hasBorder
            //Posso não enviar as propiedades porque coloque uma Features de ES6 (Defaut Parameters) como argumento que recebem as propiedades
            //Em caso de não enviar o src coloca um avatar whitout photo por defecto no props.src
            //Em caso de não enviar o hasBorder coloca ele com true por defecto no props.hasBorder
          />
          <div className={styles.authorInfo}>
            <strong>Nadi Duno</strong>
            <span>DevRel | Front-end</span>
          </div>
        </div>
        <time
          title="28 de janeiro às 08:13h"
          dateTime="2023-01-28 08:13:30"
        >
          Públicado há 1 h
        </time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraaa 👋 </p>
        <p>Acabei de subir um projeto no me github. É um projeto implementando React.</p>
        <p><a href="#">https://github.com/nadiduno?tab=repositories
        </a></p>
        <p>
          <a href="#">#React</a>{' '}
          <a href="#">#Desenvolvedor</a>{' '}
          <a href="#">#Developoer</a>{' '}
          <a href="#">#FrontEnd</a>
        </p>
      </div>
      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentario"/>
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}