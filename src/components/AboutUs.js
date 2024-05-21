import Aos from "aos";
import { useEffect } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import MyHelmet from "./Helmet";
import Hero from "./Hero";
function AboutUs() {
  const AboutTitle = "About Us"
  useEffect(() => {
    Aos.init({
      disable: "phone",
      duration: 900,
      easing: "ease-out-cubic"
    })
  })
  
  return (
    <>
    <Hero title={AboutTitle}/>
    <Container className="about my-5">
      <MyHelmet
        title="About-Us"
        description="Welcome to my site! Explore our products and more."
        canonicalUrl="http://mysite.com/example"
      />
      <Row>
      <Col md={12} className=" p-2 justify-content-center text-center"data-aos="fade-left">
          <Image  src="images/about-images/about_RFAQUA.jpg" alt="Product" fluid height='500px'rounded="500px" className="w-100" />
          {/* <Image src="images/about-images/img-2.jpg" className="mt-2" alt="Product" fluid height='500px' width='400px' /> */}
      </Col>
        <Col md={12} data-aos="fade-right">
          {/* <h3 className=" " >About Us</h3> */}
          <p >RFAQUA SOLUTIONS is a manufacturing company established in the year of
                2018 on a mission to provide high reliability, cutting-edge RF solutions to customers focused in education,
                defense, and research & development segment.This is the place for your ‘elevator pitch.’ If you only
                had a few seconds to pitch your products or services to someone, what would you say? RFAQUA SOLUTIONS is a
                manufacturing and service provider in the field of underwater monitoring networking surveillance using
                modern technology. Specialization is in Hydrophone, camera , echo-sounder , Remote operated surface vehicle,   
                customize water tanks for research activity , educational trainer platform for underwater research activity</p>
          <h3 className="mb-3 "> Our Vision</h3>
            <p> The objective of our Company is to be a global leader in the field of Antennas & RF products,
              adopting latest technology for providing the best products and services to customer at the most
              competitive prices to realize the highest level of customer satisfaction.
              Introduction</p>
          <h3 className="mb-3 "> Our Clients</h3>
              <p>1.	Universities : PUNE Universities ,<br />
                2.	IIT IIT Dharwad , IIT Mumbai , IIT Jammu,<br />
                3.	NIT VJTII  IIIIT<br />
                Company strength<br />
                Our sister companies</p>
          <p className="text-secondary"> In an Era of Internet & Digital medium of transmission & communication everything seems around us is
            like an ease way of life. Techskull is also in the race of highly equipped & advanced society and becoming the
            prominent factor of advancement by contributing to the society of the RF devices & all other Wireless equipment
            at various level.Trust Manufacturing of Indigenous product at large scale will boost the economy of our country, also our
            country does not need to rely on other developed country which ultimately promises a large scale employment.
            Area of expert Having achieved tremendous name & fame from past 7 years in this prominent manufacturing field. We are
            steadily becoming the testimonials for various small scale firm which deals in this field.
            Our Company is not only a manufacturer of innovative high-quality products in the field of RF
            communications equipment but also a service provider for solutions individually tailored to customer requirements.
          </p>
      
      </Col>
    

      </Row>
    </Container>
    </>

  );
}



export default AboutUs;