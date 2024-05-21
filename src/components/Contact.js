import '@fortawesome/fontawesome-free/css/all.css';
import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import MyHelmet from "./Helmet";
import Hero from "./Hero";




function Contact() {
  const ContactTitle = "Contact Us"
  return (
    <>y
      <Hero title={ContactTitle} />

      <Container className="my-5">
        <MyHelmet
          title="Contact-Us"
          description="Welcome to my site! Explore our products and more."
          canonicalUrl="http://mysite.com/example" />

        <Row >
          <Col className='contact text-muted d-flex flex-column'>
            {/* <div className="contact-item d-flex align-items-center ">
        <FontAwesomeIcon icon={faMapMarkerAlt} /> */}
            <div className='ms-3 '>
              <h4>Office</h4>
              <p>Anirudha Kulkarni (Director)<br />RF AQUA SOLUTIONS </p>
            </div>
            {/* </div> */}

            {/* <div className="contact-item d-flex align-items-center "> */}
            {/* <FontAwesomeIcon icon={faMapMarkerAlt} /> */}
            <div className='ms-3 '>
              <h4>Factory:</h4>
              <p>Shree shiv Apartment, Khedekar industrial estate, Near Canara Bank Narhe, Pune-411041.</p>
            </div>
            {/* </div> */}

            {/* <div className="contact-item d-flex align-items-center ">
        <FontAwesomeIcon icon={faEnvelope}/> */}
            <div className='ms-3'>
              <h4>Email</h4>
              <p>info@rfaquasolutions.com</p>
            </div>
            {/* </div> */}

            {/* <div className="contact-item d-flex align-items-center">
        <FontAwesomeIcon icon={faPhone} /> */}
            <div className='ms-3'>
              <h4>Call</h4>
              <p>+91 9284634139</p>
            </div>
            {/* </div> */}
          </Col>
          <Col>



            <Form>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">

                  <Form.Control type="Name" placeholder="Your Name" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">

                  <Form.Control type="Email" placeholder="Your Email" />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="formGridAddress1">


                <Form.Control placeholder="Subject" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridAddress2">

                <textarea class="form-control" name="message" rows="2" placeholder="Message" required></textarea>

              </Form.Group>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">

                  <input name="verify" type="text" placeholder="Captcha Code" class="form-control" required />
                  <small>Enter below captcha</small><br></br>
                  <img src="https://www.rfaquasolutions.com/captcha" alt="verification" class="img-fluid" />
                </Form.Group>
              </Row>


              <Form.Group className=' button text-center mt-0'>
                <Button type="submit">Send Message</Button>
              </Form.Group>
            </Form>
          </Col>

          <Col md={12} className='mt-4'>


            <Table striped bordered hover size="sm">
              <thead >
                <tr>
                  <th colSpan={2} className='text-center p-3 m-3'><h2>Our Channel Partners</h2> </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Technosys Systems</strong></td>
                  <td>Plot no: B-16B,Near Medical Centre Satya Nagar,Jhotwara Jaipur,Rajasthan-302012</td>

                </tr>
                <tr>
                  <td><strong>Hitech Solution</strong></td>
                  <td>	Opp. Power house ,Near RAI Complex Front of n ew standard high school (batuad) Old NH73A BYPASS ROAD Barwala ,
                    Distt. PanchKula, Haryana 134108 Phone no.: 9888857541</td>

                </tr>
                <tr>
                  <td><strong>Techskull Instruments Private Limited</strong></td>
                  <td>B-503,Galaxy Vega,GH-08C,Techzone-IV, Greater Noida(w),U.P.– 201306 Cell No.:+919958598550</td>

                </tr>
                <tr>
                  <td><strong>Spartasoft Technology Solutions</strong></td>
                  <td>Flat No . 15 &16 , Sunil Apartment , survey no. 5/4/1, Rahatani ,Pune 411017 7798545397</td>

                </tr>
                <tr>
                  <td><strong>Hatikvah Enterprises</strong></td>
                  <td>No# 71 Nandanam Colony 10th main 12th cross, Bangalore – 560043 080049576294/8310833385</td>

                </tr>

              </tbody>
            </Table>

          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Contact




export function ShortContact() {

  return (
    
      <Container className='mb-5'>
        <h2 className='text-center mb-5'>Contact Us</h2>

        <Row >
          <Col className='contact text-muted d-flex flex-column'>

            <div className='ms-3 '>
              <h4>Office</h4>
              <p>Anirudha Kulkarni (Director)<br />RF AQUA SOLUTIONS </p>
            </div>

            <div className='ms-3 '>
              <h4>Factory:</h4>
              <p>Shree shiv Apartment, Khedekar industrial estate, Near Canara Bank Narhe, Pune-411041.</p>
            </div>

            <div className='ms-3'>
              <h4>Email</h4>
              <p>info@rfaquasolutions.com</p>
            </div>


            <div className='ms-3'>
              <h4>Call</h4>
              <p>+91 9284634139</p>
            </div>

          </Col>
          <Col>



            <Form>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">

                  <Form.Control type="Name" placeholder="Your Name" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">

                  <Form.Control type="Email" placeholder="Your Email" />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="formGridAddress1">


                <Form.Control placeholder="Subject" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridAddress2">

                <textarea class="form-control" name="message" rows="2" placeholder="Message" required></textarea>

              </Form.Group>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">

                  <input name="verify" type="text" placeholder="Captcha Code" class="form-control" required />
                  <small>Enter below captcha</small><br></br>
                  <img src="https://www.rfaquasolutions.com/captcha" alt="verification" class="img-fluid" />
                </Form.Group>
              </Row>


              <Form.Group className=' button text-center mt-0'>
                <Button type="submit">Send Message</Button>
              </Form.Group>
            </Form>
          </Col>
       </Row>
      </Container>
      )

}
