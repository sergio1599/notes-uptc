import Login from '../components/Login/Login'
import Footer from '../components/Footer/Footer'
import Register from "../components/Register/Register";

export default function Home() {
  return (<>
    <title>Notas UPTC</title>
    <link rel="icon" href="../public/icons/keep.ico"/>
    <div>
        <Register/>
        <Footer/>
    </div>
  </>);
}
