import { Outlet } from "react-router-dom"
const SharedLayout = () => {
    return (
        <>  
            <h1>Shared Layout</h1>
            <Outlet/>
        </>
    )
}

export default SharedLayout