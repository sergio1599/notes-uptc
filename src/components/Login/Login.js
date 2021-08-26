import styles from "./login.module.css";
import React from "react";
import { Button } from "bootstrap";


export const Login = () => {
  return (
        <div className={styles.info}>
            <div>
              <h1>Imagen</h1>
            </div>
            <div>
              <h1 className={styles.title}>NOTAS UPTC</h1>
              <div className={styles.contInputs}>
                <label>Correo</label>
                <input type="text"/>
              </div>
              <div className={styles.contInputs}>
                <label>Contraseña</label>
                <input type="text"/>
              </div>
              <div>
                <button type="submit">Enviar</button>
              </div>
          </div>
            
            
        </div>
        
        
  );
};
