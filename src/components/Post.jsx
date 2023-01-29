import styles from './Post.module.css'

export function Post(){
  return(
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img 
            className={styles.avatar}
            src="https://avatars.githubusercontent.com/u/6678054?v=4"
            alt="Foto de Nadi Duno" />
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
    </article>
  );
}