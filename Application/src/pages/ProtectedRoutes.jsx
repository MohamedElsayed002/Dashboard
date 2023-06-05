import { useAppContext } from "../context/context"
import { Navigate } from "react-router-dom"

const ProtectedUser = ({children}) => {

    const {userr} = useAppContext()
    
    if(!userr) {
        return <Navigate to="/landing" />
    }
    return children
}

export default ProtectedUser