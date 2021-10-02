import Login from '../components/Login/Login'
import Footer from '../components/Footer/Footer'
import Register from "../components/Register/Register";

export default function Home() {
    const value = true;
  return (<>
    <title>Notas UPTC</title>
    <link rel="icon" href="../public/icons/keep.ico"/>
    <div>
        {value?<Login/>:<Register/>}
        <Footer/>
    </div>
  </>);
}
