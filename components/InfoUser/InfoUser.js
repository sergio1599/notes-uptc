import React from 'react'
import styles from './infoUser.module.css'

const InfoUser = () => {
    return (
        <div className={styles.info}>
            <div className={styles.sideBar}>
                  <img className={styles.profilePic} src={"/images/profile.jpg"}/>
                  <a>
                    <button className={styles.buttons}>Notas</button>
                  </a>
                  <a>
                    <button className={styles.buttons}>Archivos</button>
                  </a>
                  <a>
                    <button className={styles.buttons}>Favoritos</button>
                  </a>
                  <div className={styles.contImage}>
                    <img  src={"/images/logo-recortado.png"}/>
                  </div>
                  <a>
                    <button className={styles.confBtn}>Configuración</button>
                  </a>
                  
            </div>
            <div>Hola</div>
        </div>
    )
}

export default InfoUser
