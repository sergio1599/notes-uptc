import React, {useContext} from 'react'
import styles from './infoUser.module.css'
import Keep from '../Keep/Keep'
import Link from 'next/link'
import {SessionContext} from "../../providers/sessionContext";
import NavBar from "../NavBar/NavBar";
import Login from "../Login/Login";
import {useForm} from "../../hooks/useForm";
import swal from "sweetalert";


const InfoUser = () => {
    const leave = (e) => {
        swal({
            title: "¿Cerrar sesión?",
            icon: "warning",
            buttons: true,
        }).then((willDelete) => {
            if (willDelete) {
                window.location.href = "/"
                swal({
                    title: "Cerrando sesión",
                    icon: "success",
                    timer: 3000,
                });

            } else {
                swal({
                    title: "No se cerró la sesión",
                    icon: "success",
                    timer: 3000,
                });
            }
        });


    }

    const {session, setSession} = useContext(SessionContext);
    if (!session) {
        return null
    }
    let id = session.id;
    let userName = session.username;
    let name = session.name;
    let password = session.password;
    let lastName = session.lastname;
    let mail = session.mail;
    let role = session.type;
    if (role === 'admin') {
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
                    <img className={styles.profilePic} src={"/images/user.png"}/>
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
                    <Link href={"/"}>
                        <button onClick={leave} className={styles.confBtn}>Salir</button>
                    </Link>
                </div>
                <div className={styles.keepGrid}>
                    <div>
                        <Keep title={'Ropa'} image={'Tengo que lavar la ropa'} content={'lavar la ropa'}/>
                    </div>
                    <div>
                        <Keep title={'Calculo'} image={'Mañana tengo que estudiar para el parcial de cálculo'} content={'Estudiar pal parcial'}/>
                    </div>
                    <div>
                        <Keep title={'Fisica'} image={'Prensentar el proyecto de física'} content={'Viernes 13'}/>
                    </div>
                    <div>
                        <Keep title={'Titulo'} image={''} content={'contenido'}/>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default InfoUser
