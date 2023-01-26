import styles from './Sidebar.module.css';

export function Sidebar(){
  return(
    <aside className={styles.sidebar}>
       <img 
        className={styles.cover}
        src="https://www.instagram.com/p/Cnw_VdUJYRN/"
      />
       <div className={styles.profile}>
        <strong>Nadi Duno</strong>
        <span>Dev Rel - Front-end</span>
       </div>
       <footer>
        <a href="#">
          Editar seu perfil
        </a>
       </footer>
    </aside>
  );
}