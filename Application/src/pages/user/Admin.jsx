import { useEffect } from "react"
import { useAppContext } from "../../context/context"



const Admin = () => {

    const {fetchUsers , users , LoadingData} = useAppContext()

    useEffect(() => {
        fetchUsers()
    },[])


    if(LoadingData) {
        return <h1>Loading....</h1>
    }


    return (
        <>
            {
                users.map((user) => {
                    const  {name , email , role , _id } = user
                    return (
                        <div key={_id}>
                            <h1>{name}</h1>
                            <h2>{email}</h2>
                            <h4>{role}</h4>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Admin