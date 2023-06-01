import { Outlet } from "react-router-dom"
import { useAppContext } from "../context/context"
import Navbar from "../Components/Navbar"

const SharedLayout = () => {



    const {userr,token} = useAppContext()

    
    return (
        <>  
            <Navbar/>
            <h1>Shared Layout</h1>
            <h2>name {userr.name}</h2>
            <h4>{token}</h4>
            <Outlet/>
        </>
    )
}

export default SharedLayout