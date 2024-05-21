import { Button, Col, Container, Image, Row } from 'react-bootstrap';

function ProductsDetails() {
    return (
        <Container className="my-5">
            <Row>
                <Col md={4}>
                    <Image src="images/women_cloth.webp" alt="Product" fluid height='500px' width='400px' />
                </Col>
                <Col md={8}>
                    <h2 className="mb-3">Women Viscose Rayon Kurta Palazzo Set</h2>

                    <h4 className="mb-3">₹795</h4>

                    <h4>Product Details</h4>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                        nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.</p>
                    <Button variant="primary" className='me-2'>Add to Cart</Button>
                    <Button variant="primary" className='me-2'>Buy Now</Button>
                </Col>
            </Row>
        </Container>
    );
};
export default ProductsDetails;
