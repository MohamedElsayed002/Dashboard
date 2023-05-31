import { Outlet } from "react-router-dom"
import { useAppContext } from "../context/context"
const SharedLayout = () => {



    const {userr,token} = useAppContext()
    console.log(userr,token)

    return (
        <>  
            <h1>Shared Layout</h1>
            <h2>{userr.name}</h2>
            <h4>{token}</h4>
            <Outlet/>
        </>
    )
}

export default SharedLayout