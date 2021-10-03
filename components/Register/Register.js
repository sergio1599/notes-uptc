import styles from "../Register/register.module.css";
import Link from "next/link";

const Register = ({}) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Notas UPTC</h1>
            <label className={styles.label}>Nombre</label>
            <input placeholder={"Escriba su nombre"} className={styles.input}/>
            <label className={styles.label}>Apellido</label>
            <input placeholder={"Escriba su apellido"} className={styles.input}/>
            <label className={styles.label}>Contraseña</label>
            <input placeholder={"Escriba la contraseña"} className={styles.input}/>
            <label className={styles.label}>Correo</label>
            <input placeholder={"Escriba su correo"} className={styles.input}/>
            <label className={styles.label}>¿Que tipo de usuario va a ser?</label>
            <select className={styles.select}>
                <option>Usuario</option>
                <option>Administrador</option>
            </select>
        </div>
    );
};

export default Register;