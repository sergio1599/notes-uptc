import React from 'react'
import styles from './footer.module.css'; 
import Icon from '@mdi/react';
import {mdiGithub,mdiLinkedin, mdiInstagram} from '@mdi/js';

const FooterCards = (props) => {
    return (<Icon path={props.path}
                  size={props.size}
                  color={props.color}
    />);
}

const Footer = () => {

    let gitHub = <FooterCards path={mdiGithub} size={1.6} color={"#ffff"}/>
    let instagram = <FooterCards path={mdiInstagram} size={1.6} color={"#ffff"}/>
    let linkedin = <FooterCards path={mdiLinkedin} size={1.6} color={"#ffff"}/>

    return (
        <div className={styles.footer}>
             <footer>
                <div className={styles.rate}>
                    <div className={styles.elements}>
                        <div>
                            <p className={styles.text}>Ruben Macías</p>
                            <a title={'GitHub'} target={"_blank"} rel={'noopener noreferrer'} href="https://github.com/rubenmacias2">{gitHub}</a>
                            <a title={'LinkedIn'} target={"_blank"} rel={'noopener noreferrer'} href="https://www.linkedin.com/in/ruben-macias-socha-205111205/">{linkedin}</a>
                            <a title={'Instagram'} target={"_blank"}rel={'noopener noreferrer'} href="https://www.instagram.com/rubenmaciash/">{instagram}</a>
                        </div>
                        <div>
                            <p className={styles.text}>Sergio Quintana</p>
                            <a title={'GitHub'} target={'_blank'} rel={'noopener noreferrer'} href="https://github.com/sergio1599">{gitHub}</a>
                            <a title={'LinkedIn'}  target={'_blank'} rel={'noopener noreferrer'} href="https://www.linkedin.com/in/sergio1599/">{linkedin}</a>
                            <a title={'Instagram'} target={'_blank'} rel={'noopener noreferrer'} href="https://www.instagram.com/s_alejandro_15/">{instagram}</a>
                        </div>
                    </div>
                </div>
            </footer>    
        </div>
    );
}; 

export default Footer
