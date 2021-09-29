import Login from '../components/Login/Login'
import Footer from '../components/Footer/Footer'

export default function Home() {
  return (<>
    <title>Notas UPTC</title>
    <link rel="icon" href="../public/icons/keep.ico"/>
    <div>
        <Login/>
        <Footer/>
    </div>
  </>);
}
