import styles from './Avatar.module.css'

//Desestructurando os argumento em lugar de receber Avatar(props){} tenho que
//props.src se guarda em src
//props.hasBorder se guarda em hasBorder
//por isso Avatar({src,hasBorder}){}
//Agora bem, em caso de não recever as propiedades e para que o programa não de erro
//Coloquei uma Features de ES6 chamada "Defaut Parameters" no argumento
//A qual consiste em asignar um valor por defecto a o argumento em caso de não recever nada
//Em caso de não recever a props.src colocaremos por defecto um "avatar predefinido" que esta na rota src/assets/avatarcomicsneon.jpg
//Em caso de não recever a props.hasBorder colocaremos por defecto "true" 
//Por isso Avatar({src="src/assets/avatarcomicsneon.jpg", hasBorder=true}){}

export function Avatar({src="src/assets/avatarcomicsneon.jpg", hasBorder=true}){
  return(
    <div>
      <img 
          className={hasBorder ? styles.avatarWithBorder : styles.avatarWithoutBorder}
          src={src} 
          alt="Avatar"
        />
    </div>
  );
}