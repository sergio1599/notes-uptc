import Login from '../components/Login/Login'
import Footer from '../components/Footer/Footer'
import Register from "../components/Register/Register";
import { SessionContext} from "../providers/sessionContext";
import InfoUser from "../components/InfoUser/InfoUser";
import {useState} from 'react';

export default function Home({data}) {
    const [session, setSession] = useState({});
    const value = true;
    return (<>
        <SessionContext.Provider value={{session, setSession}}>
            {
                !session.username ? <Login/> : <InfoUser/>
            }
            <Footer/>
        </SessionContext.Provider>

    </>);

}


