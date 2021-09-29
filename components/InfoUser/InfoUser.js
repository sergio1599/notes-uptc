import React from 'react'
import styles from './infoUser.module.css'
import Keep from '../Keep/Keep'
import Link from 'next/link'

const InfoUser = () => {
    return (
        <div className={styles.info}>
            <div className={styles.sideBar}>
                <img className={styles.profilePic} src={"/images/profile.jpg"}/>
                <Link href={"./"}>
                    <a className={styles.buttons}>Notas</a>
                </Link>

                <Link href={"./"}>
                    <a className={styles.buttons}>Archivos</a>
                </Link>

                <Link href={"./"}>
                    <a className={styles.buttons}>Favoritos</a>
                </Link>

                <div className={styles.contImage}>
                    <img src={"/images/logo-recortado.png"}/>
                </div>
                <Link href={"./"}>
                    <a className={styles.confBtn}>Configuración</a>
                </Link>
                <Link href={"./"}>
                    <a className={styles.confBtn}>Salir</a>
                </Link>


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
