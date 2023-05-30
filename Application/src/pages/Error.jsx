import ErrorImage from '../assets/images/undraw_page_not_found_re_e9o6.svg'
import {NavLink} from 'react-router-dom'
const Error = () => {
    return (
        <div className="container text-center ">
            <img src={ErrorImage} className=" w-50 my-5" />
            <h3>Ohh! Page Not Found</h3>
            <p className='text-muted'>We can't seem to find the page you're looking for</p>
            <NavLink to="/landing">Back Home</NavLink>
        </div>
    )
}

export default Error