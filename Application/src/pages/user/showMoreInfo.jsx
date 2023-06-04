import { useEffect } from 'react'
import {useParams} from 'react-router-dom'
import { useAppContext } from '../../context/context'
import Loading from '../../Components/Loading'
import DefaultImage from '../../assets/images/blank-profile-picture-973460_1280.webp'
const ShowInfoUser = () => {

    const {id} = useParams()
    const {getSingleUser , singleUsers , singleUserLoading} = useAppContext()
    console.log(singleUsers)
    useEffect(() =>  {
        getSingleUser(id)
    },[id])

    if(singleUserLoading) {
        return <Loading/>
    }
    let photo = singleUsers.image || DefaultImage
    return (
        <>
            <div  className="my-5 text-center " >
                <img  style={{borderRadius : '50%' , height : '300px' , width  :'300px' , objectFit : 'cover' , margin : '0 auto'}} src={photo}/>
            <div className="my-4">
            <h4>id :  {singleUsers?.id}</h4>
            <h4>email :  {singleUsers?.email}</h4>
            <h4>name :  {singleUsers?.name}</h4>
            <h4>role :  {singleUsers?.role}</h4>
            </div>
            </div>
        </>
    )
}

export default ShowInfoUser