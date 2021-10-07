import Link from 'next/link'
import styles from "./login.module.css"
import {useForm} from '../../hooks/useForm';
import {SessionContext} from "../../providers/sessionContext";
import {useContext} from "react";
import swal from 'sweetalert';

const Login = ({}) => {
    const value = true;
    const {session, setSession} = useContext(SessionContext);
    const [formLoginValues, handleLoginInputChange] = useForm({
        username: '',
        password: ''
    })
    const handleSubmit = async (e) => {
        console.log(formLoginValues.username, formLoginValues.password);
        let userName = formLoginValues.username;
        let password = formLoginValues.password;
        e.preventDefault();
        if (userName === ''|| password ===''){
            swal({
                title: "No ingresado datos!",
                text: "Ingrese los datos!",
                icon: "error"
            })
        }else{
            fetch(`https://apirestful-notes-uptc.herokuapp.com/sign-in?username=${userName}&password=${password}`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        username: formLoginValues.username,
                        password: formLoginValues.password
                    })
                }).then(response => response.json()).then(data => {
                console.log(data);
                if(data.mensaje === "Incorrect password"|| data.mensaje === 'Non-existent user'){
                    swal({
                        title: "Usuario o contraseña incorrecta!",
                        text: "Puede que esté ingrensando mal sus datos, o que no esté registrado!",
                        icon: "error"
                    })
                }
                setSession({
                    id : data._id,
                    username : data.username,
                    name : data.name,
                    password : data.password,
                    lastName : data.lastName,
                    mail : data.mail,
                    type : data.type,
                });
            })
        }
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
                    <input name={'username'} className={styles.input} placeholder="Escribe tu usuario" type="text"
                           value={formLoginValues.username} onChange={handleLoginInputChange}/>
                </div>
                <div className={styles.contInputs}>
                    <label className={styles.label}>Contraseña</label>
                    <input name={'password'} className={styles.input} placeholder="Escribe tu contraseña"
                           type="password" value={formLoginValues.password} onChange={handleLoginInputChange}/>
                </div>
                <div className={styles.contSubmit}>
                    <div className={styles.contBtn}>
                        <div>
                            <button type={'onSubmit'} onClick={handleSubmit} className={styles.btn}>Enviar</button>
                        </div>
                        <hr className={"solid"}/>
                        <div>
                            <Link href={"/user"}><a className={styles.btn}>Crear usuario</a></Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login; 