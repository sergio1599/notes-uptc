import React, {useContext} from 'react'
import styles from './infoUser.module.css'
import Keep from '../Keep/Keep'
import Link from 'next/link'
import { SessionContext } from "../../providers/sessionContext";
import NavBar from "../NavBar/NavBar";



const InfoUser = () => {

    const {session, setSession} = useContext(SessionContext);
    let id = session.id;
    let userName = session.username;
    let name = session.name;
    let password = session.password;
    let lastName = session.lastname;
    let mail = session.mail;
    let role = session.type;
    if (role === 'admin'){
        role = 'Administrador';
    } else {
        role = 'Docente';
    }
    return (
        <div>
            <div>
                <NavBar/>
            </div>
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
        </div>

    )
}

export default InfoUser
