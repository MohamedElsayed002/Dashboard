
import Lottie from 'lottie-react'
import animationData from '../assets/145581-loading-emoji.json'

const Loading = () => {
    return (
        <div className="w-25 mx-auto my-5">
            <Lottie animationData={animationData} />
        </div>
    )
}

export default Loading