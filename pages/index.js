import Login from '../components/Login/Login'
import Footer from '../components/Footer/Footer'
import Register from "../components/Register/Register";

export async function getStaticProps() {
    try {
        const res = await fetch('https://apirestful-notes-uptc.herokuapp.com/show-all-user');
        const data = await res.json()
        return {
            props: {
                data
            }
        }
    } catch (error) {
        console.log(error)
    }
}

export default function Home({data}) {
    const value = true;
    return (<>
        <title>Notas UPTC</title>
        <link rel="icon" href="../public/icons/keep.ico"/>
        <div>
            {value ? <Login/> : <Register/>}
            <Footer/>
            {/*{
             *data.map((post) => (
                    console.log(post)
                ))
            }*/}
        </div>
    </>);

}


