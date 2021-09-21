import React from 'react'
import styles from './infoUser.module.css'
import Keep from '../Keep/Keep'

const InfoUser = () => {
    return (
        <div className={styles.info}>
            <div className={styles.sideBar}>
                  <img className={styles.profilePic} src={"/images/profile.jpg"}/>
                  <button className={styles.buttons}>Notas</button>
                  <button className={styles.buttons}>Archivos</button>
                  <button className={styles.buttons}>Favoritos</button>
                  <div className={styles.contImage}>
                    <img  src={"/images/logo-recortado.png"}/>
                  </div>
                  <button className={styles.confBtn}>Configuración</button>
            </div>
            <div className={styles.keepGrid}>
                <div>
                    <Keep title={'Titulo'} image={'acá debería ir una imagen'} content={'contenido'}/>
                </div>
                <div>
                    <Keep title={'Titulo'} image={'acá debería ir una imagen'} content={'contenido'}/>
                </div>
                <div>
                    <Keep title={'Titulo'} image={'acá debería ir una imagen'} content={'contenido'}/>
                </div>
                <div>
                    <Keep title={'Titulo'} image={'acá debería ir una imagen'} content={'contenido'}/>
                </div>
            </div>
        </div>
    )
}

export default InfoUser
