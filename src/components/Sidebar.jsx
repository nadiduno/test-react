import { PencilLine } from 'phosphor-react'

import styles from './Sidebar.module.css'

export function Sidebar(){
  return(
    <aside className={styles.sidebar}>
       <img 
        className={styles.cover}
        src="https://images.unsplash.com/photo-1674809593642-22d977b95bcd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" 
        alt="Foto de Menina no computador"
       />
       <div className={styles.profile}>
        <img 
          className={styles.avatar}
          src="https://avatars.githubusercontent.com/u/6678054?v=4" 
          alt="Foto de Nadi Duno"
        />
        <strong>Nadi Duno</strong>
        <span>DevRel | Web Developer</span>
       </div>
       <footer>
        <a href="#">
          <PencilLine size={20}/>
          Editar seu perfil
        </a>
       </footer>
    </aside>
  );
}