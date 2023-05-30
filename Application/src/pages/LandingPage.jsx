import Logo from "../Components/Logo"
import Image2 from '../assets/images/undraw_scrum_board_re_wk7v.svg'
import { NavLink } from "react-router-dom"
import styled from 'styled-components'

const LandingPage = () => {
    return (
        <>
            <div className="container">
                <Logo/>
                <div className="row">
                    <div className="col my-5">
                        <h1>Mohamed Elsayed Ali</h1>
                        <p className="text-muted">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem beatae veniam quam odio ab culpa repellendus, aspernatur, nihil, similique molestias in. Quidem eligendi ea odio officia doloribus ullam esse. Quo.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta voluptatem sequi, doloribus quaerat ea laborum explicabo cupiditate itaque aliquam ullam quas possimus nulla quae dolorum recusandae velit natus soluta accusamus.</p>
                        <button className="btn btn-primary">
                            <NavLink  
                                className="text-white"
                                style={{textDecoration : 'none'}}
                                to="/login">
                                Login/Register
                            </NavLink>
                        </button>
                    </div>
                    <div className="col d-none d-md-block d-lg-block">
                        <img className="w-100 my-3" src={Image2} />
                    </div>
                </div>
            </div>
        </>
    )
}



export default LandingPage