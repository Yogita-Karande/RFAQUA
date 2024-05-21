import Aos from 'aos';
import { useEffect } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import MyHelmet from './Helmet';
import Hero from './Hero';

function Products(){
  const ProductTitle = "Products" 

  useEffect(() => {
    Aos.init({
      disable: "phone",
      duration: 900,
      easing: "ease-out-cubic"
    })
  })

  const navigate = useNavigate()
  return (
    <>
    <Hero title={ProductTitle}/>
    <Container className="my-5">
        <MyHelmet
          title="Products"
          description="Welcome to my site! Explore our products and more."
          canonicalUrl="http://mysite.com/example" />
        <Row>
          <Card style={{ width: '30rem' }}  data-aos="fade-right " data-aos-delay="200">
            <Card.Img variant="top" src="images/products/product1.jpg" />
            <Card.Body>
              <Card.Title>My Product 1</Card.Title>
              <Card.Text>
                    These is product description here
              </Card.Text>
              <Button variant="primary"  onClick={()=> navigate("/products-details")}>Read More</Button>
            </Card.Body>
          </Card>
          </Row>
        </Container>
        </>
        );
        };
    export default Products;

