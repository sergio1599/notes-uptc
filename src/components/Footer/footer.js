import styles from './footer.module.css';
import React from "react"; 


export const Footer = () => {
    return (
        <div className={styles.footer}>
             <footer>
                <div className={styles.rate}>
                    <div className={styles.elements}>
                        <div>
                            <p>Ruben Macías</p>
                        </div>
                        <div>
                            <p>Sergio Quintana</p>
                        </div>
                    </div>
                </div>
            </footer>    
        </div>
    );
}; 

export default Footer; 
