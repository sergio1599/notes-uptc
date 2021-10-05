import React from 'react'
import styles from './navBar.module.css'; 
import Icon from '@mdi/react';
import {mdiMagnify } from '@mdi/js';

const NavbarCards = (props) => {
    return (<Icon path={props.path}
                  size={props.size}
                  color={props.color}
    />);
}


const NavBar = () => {
    let fileFind = <NavbarCards path={mdiMagnify} size={1} color={"#ffff"}/>
    return (
        <div className={styles.navbar}>
            <div className={styles.elements}>
                <div className={styles.containerP}>
                    <p className={styles.p}>Notas UPTC</p>
                </div>
                <div>
                    <div className={styles.containerInp}>
                        <div className={styles.containerAddon}>
                            <i title={fileFind}>{fileFind}</i>
                        </div>
                        <input type="search" placeholder="Buscar" className={styles.containerInput}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar
