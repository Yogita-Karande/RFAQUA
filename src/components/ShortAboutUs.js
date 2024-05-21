import Aos from 'aos';
import { useEffect } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';


export function ShortAboutUs() {
    const navigate = useNavigate();

    useEffect(() => {
        Aos.init({
          disable: "phone",
          duration: 900,
          easing: "ease-out-cubic"
        })
      })
      
    return <Container >
        <Row className="justify-content-start " data-aos="fade-right">
        <Col className='mt-5 mb-5'>
                <Image src="/images/about-images/about_RFAQUA.jpg" fluid />
            </Col>
            <Col>
            <h2 className='text-dark text-start mt-5'>About Us</h2>
        <p className='justify-content-start  '>RFAQUA SOLUTIONS is a manufacturing company established in the year of
                2018 on a mission to provide high reliability, cutting-edge RF solutions to customers focused in education,
                defense, and research & development segment.This is the place for your ‘elevator pitch.’ If you only
                had a few seconds to pitch your products or services to someone, what would you say? RFAQUA SOLUTIONS is a
                manufacturing and service provider in the field of underwater monitoring networking surveillance using
                modern technology. Specialization is in Hydrophone, camera , echo-sounder , Remote operated surface vehicle,   
                customize water tanks for research activity , educational trainer platform for underwater research activity</p>
          <div className='text-start  pb-5'>
                <Button variant="primary" onClick={()=> navigate("/about-us")}>Read More</Button>
          </div>
            </Col>
         
          
        </Row>
    </Container>;
}

export default ShortAboutUs;