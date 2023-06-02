import ErrorImage from '../assets/images/undraw_page_not_found_re_e9o6.svg'
import {NavLink} from 'react-router-dom'
import Lottie from 'lottie-react'
import animationData from '../assets/98642-error-404.json'
const Error = () => {
    return (
        <div className="container text-center ">
            {/* <img src={ErrorImage} className=" w-50 my-5" /> */}
            <div className="w-50 mx-auto">
            <Lottie  animationData={animationData} />
            </div>
            <h3 style={{marginTop : '-20px'}}>Ohh! Page Not Found</h3>
            <p className='text-muted'>We can't seem to find the page you're looking for</p>
            <NavLink className="btn btn-primary " to="/landing">Back Home</NavLink>
        </div>
    )
}

export default Error