import Link from 'next/link'
import styles from "./login.module.css"

const Login = ({}) => {
    const value = true;
    return (
        <div className={styles.info}>
            <div className={styles.contImage}>
                <img src={"/images/logo-recortado.png"}/>
            </div>
            <div>
                <h1 className={styles.title}>NOTAS UPTC</h1>
                <div className={styles.contInputs}>
                    <label className={styles.label}>Correo</label>
                    <input className={styles.input} placeholder="Escribe tu correo" type="text"/>
                </div>
                <div className={styles.contInputs}>
                    <label className={styles.label}>Contraseña</label>
                    <input className={styles.input} placeholder="Escribe tu contraseña" type="password"/>
                </div>
                <div className={styles.contSubmit}>
                    <div className={styles.chkLbl}>
                        <input className={styles.checkbox} type="checkbox"></input>
                        <label className={styles.label}>Recordarme</label>
                    </div>
                    <div className={styles.contBtn}>
                        <div>
                            <Link href={"./user"}><a className={styles.btn}>Enviar</a></Link>
                        </div>
                        <hr className={"solid"}/>
                        <div>
                            <Link href={"./user"}><a className={styles.btn}>Crear usuario</a></Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login; 