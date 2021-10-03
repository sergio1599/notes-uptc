import Link from 'next/link'
import styles from "./login.module.css"
import {useForm} from '../../hooks/useForm';

const Login = ({}) => {
    const value = true;
    const [formLoginValues, handleLoginInputChange] = useForm({
        username: '',
        password: ''
    })
    const handleSubmit= async (e)=>{
        console.log(formLoginValues.username, formLoginValues.password);
        let userName = formLoginValues.username;
        let password = formLoginValues.password;
        e.preventDefault();
        fetch(`https://apirestful-notes-uptc.herokuapp.com/sign-in?username=${userName}&password=${password}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username:formLoginValues.username,
                    password:formLoginValues.password
                })
            }).then(response=> response.json()).then(data=>{console.log(data)})
    }
    return (
        <div className={styles.info}>
            <div className={styles.contImage}>
                <img src={"/images/logo-recortado.png"}/>
            </div>
            <div>
                <h1 className={styles.title}>NOTAS UPTC</h1>
                <div className={styles.contInputs}>
                    <label className={styles.label}>Usuario</label>
                    <input name={'username'} className={styles.input} placeholder="Escribe tu correo" type="text"
                           value={formLoginValues.username} onChange={handleLoginInputChange}/>
                </div>
                <div className={styles.contInputs}>
                    <label className={styles.label}>Contraseña</label>
                    <input name={'password'} className={styles.input} placeholder="Escribe tu contraseña"
                           type="password" value={formLoginValues.password} onChange={handleLoginInputChange}/>
                </div>
                <div className={styles.contSubmit}>
                    <div className={styles.chkLbl}>
                        <input className={styles.checkbox} type="checkbox"></input>
                        <label className={styles.label}>Recordarme</label>
                    </div>
                    <div className={styles.contBtn}>
                        <div>
                            <Link href={"./user"}><a type={'onSubmit'} onClick={handleSubmit} className={styles.btn}>Enviar</a></Link>
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