import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
function Hero ({title}){

    // const title= [{
    //     title: ContactUs,
    // }]
    // const title = "Contact Us"
    

    return(
    <>
        <Container className=" hero bg-body-tertiary" >
        <div className="d-flex ">
            <h2 className="">{title}</h2>
            <ul className="justify-content-end d-flex flex-grow-1 pe-3 mt-3">
                <li className="list-inline me-1 text-primary"><NavLink className='nav-link ' to="/"> Home </NavLink></li>
                <li className="nav-link "> / {title}</li>
            </ul>
        </div>
        </Container>
    </>
    )
}

export default Hero;