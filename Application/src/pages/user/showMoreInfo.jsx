import { useEffect } from 'react'
import {useParams} from 'react-router-dom'
import { useAppContext } from '../../context/context'
import Lottie from 'lottie-react'
import animationData from '../../assets/28497-profile-icon.json'
import Loading from '../../Components/Loading'

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

    return (
        <>
            <div  className="my-5 text-center " >
            <Lottie style={{width : '300px' , margin : '0 auto'}} animationData={animationData} />
            <div className="my-4">
            <h4>id :  {singleUsers[0]?._id}</h4>
            <h4>email :  {singleUsers[0]?.email}</h4>
            <h4>name :  {singleUsers[0]?.name}</h4>
            <h4>role :  {singleUsers[0]?.role}</h4>
            </div>
            </div>
        </>
    )
}

export default ShowInfoUser