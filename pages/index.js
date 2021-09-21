import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Login from '../components/Login/Login'
import Footer from '../components/Footer/Footer'

export default function Home() {
  return (<>
    <title>Notas UPTC</title>
    <div>
        <Login/>
        <Footer/>
    </div>
  </>);
}
