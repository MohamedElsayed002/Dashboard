import { Outlet } from "react-router-dom"
import { useAppContext } from "../context/context"
import Navbar from "../Components/Navbar"

const SharedLayout = () => {



    const {userr,token} = useAppContext()

    
    return (
        <>  
            <Navbar/>
            <Outlet/>
        </>
    )
}

export default SharedLayout