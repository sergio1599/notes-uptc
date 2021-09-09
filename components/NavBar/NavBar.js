import React from 'react'
import styles from './navBar.module.css'; 
import Icon from '@mdi/react';
import {mdiMagnify } from '@mdi/js';

const FooterCards = (props) => {
    return (<Icon path={props.path}
                  size={props.size}
                  color={props.color}
    />);
}


const FooterUser = () => {
    let fileFind = <FooterCards path={mdiMagnify } size={1} color={"#ffff"}/>

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

                        <input type="text" className="containerInput"/>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}

export default FooterUser
