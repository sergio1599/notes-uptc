import styles from "../Register/register.module.css";
import {SessionContext} from "../../providers/sessionContext";
import {useForm} from "../../hooks/useForm";
import {useContext} from "react";
import swal from 'sweetalert';
import Link from "next/link";

const Register = ({}) => {
    //agregar notas
    const value = true;
    const {setUser} = useContext(SessionContext);
    const [formUserValues, handleUserInputChange] = useForm({
        username: '',
        name: '',
        password: '',
        lastname: '',
        mail: '',
        type: '',
    })

    const handleSubmit = async (e) => {
        let username = formUserValues.username;
        let name = formUserValues.name;
        let password = formUserValues.password;
        let lastname = formUserValues.lastname;
        let mail = formUserValues.mail;

        e.preventDefault();
        if (username === '' || name === '' || password === '' || lastname === '' || mail === '') {
            swal({
                title: "Ingrese todos los datos!",
                text: "Ingrese los datos!",
                icon: "error"
            })
        } else {
            fetch(`https://apirestful-notes-uptc.herokuapp.com/sign-up?username=${username}&lastname=${lastname}&name=${name}&password=${password}&mail=${mail}&type=student`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        username: formUserValues.username,
                        name: formUserValues.name,
                        password: formUserValues.password,
                        lastname: formUserValues.lastname,
                        mail: formUserValues.mail,
                    })
                }).then(response=>response.json()).then(data=>{
                    if (data.mensaje ==="existing user"){
                        swal({
                            title: "Error!",
                            text: "Usuario existente!",
                            icon: "error"
                        })
                    }else{
                        formUserValues.username='';
                        formUserValues.name='';
                        formUserValues.password='';
                        formUserValues.lastname='';
                        formUserValues.mail='';
                        swal({
                            title: "Muy bien!",
                            text: "El usuario se ha creado correctamente!",
                            icon: "success"
                        })
                    }
            })
        }
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Notas UPTC - Registro</h1>
            <label className={styles.label}>Nombre de usuario</label>
            <input name={'username'} value={formUserValues.username} onChange={handleUserInputChange} placeholder={"Escriba su nombre de usuario"}
                   className={styles.input}/>
            <label className={styles.label}>Nombre</label>
            <input name={'name'} value={formUserValues.name} onChange={handleUserInputChange} placeholder={"Escriba su nombre"}
                   className={styles.input}/>
            <label className={styles.label}>Apellido</label>
            <input name={'lastname'} value={formUserValues.lastname} onChange={handleUserInputChange} placeholder={"Escriba su apellido"}
                   className={styles.input}/>
            <label className={styles.label}>Contraseña</label>
            <input name={'password'} value={formUserValues.password} onChange={handleUserInputChange} type={'password'} placeholder={"Escriba la contraseña"}
                   className={styles.input}/>
            <label className={styles.label}>Correo</label>
            <input name={'mail'} value={formUserValues.mail} type={'email'} onChange={handleUserInputChange} placeholder={"Escriba su correo"}
                   className={styles.input}/>
            <div>
                <button type={'onSubmit'} onClick={handleSubmit} className={styles.btn}>Enviar</button>
            </div>
            <div>
                <Link href={'/'}>
                    <button className={styles.btn} >Volver</button>
                </Link>

            </div>
        </div>
    );
};

export default Register;