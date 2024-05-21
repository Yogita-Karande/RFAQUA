// Import necessary libraries
import Aos from 'aos';
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Image, Modal, Row } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';

function Photos() {

  // const PhotosTitle = "Photos"

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    Aos.init({
      disable: 'phone',
      duration: 900,
      easing: 'ease-out-cubic',
    });
  }, []);

  const Images = [
    {
      imgUrl: '/images/gallery/img-1.jpg',
    },
    {
      imgUrl: '/images/gallery/img-2.jpg',
    },
    {
      imgUrl: '/images/gallery/img-3.jpg',
    },
    {
      imgUrl: '/images/gallery/img-3.jpg',
    },
    // Add more images as needed
  ];

  // Show all images if on the "/photos" route, otherwise show only 3 images
  const displayedImages = location.pathname === '/photos' ? Images : Images.slice(0, 3);

  const imageStyle = {
    width: '400px',
    height: '400px',
    objectFit: 'cover',
  };

  const [selectImage, setSelectImage] = useState(null);
  const [showModel, setShowModel] = useState(false);

  const openModel = (image) => {
    setSelectImage(image);
    setShowModel(true);
  };

  const closeModal = () => {
    setSelectImage(null);
    setShowModel(false);
  };

  return (
    <Container>
{/*       
      <Hero title={PhotosTitle}/>
        <MyHelmet
          title="Photos"
          description="Welcome to my site! Explore our products and more."
          canonicalUrl="http://mysite.com/example"
       /> */}

      <div>
        <h3 className='text-center mt-5'>
          Images
          {location.pathname !== '/photos' && (
            <Button onClick={() => navigate('/photos')} className='float-end bg-primary border' active>
              View All
            </Button>
          )}
        </h3>
      </div>

      <Row>
        {displayedImages.map((item, index) => (
          <Col key={index} className='mt-5 mb-5 d-inline text-center zoomable' data-aos='fade-right' data-aos-delay='200'>
            <Image src={item.imgUrl} style={imageStyle} onClick={() => openModel(item)} />
          </Col>
        ))}
      </Row>

      <Modal show={showModel} onHide={closeModal} centered>
        {selectImage && <Image src={selectImage.imgUrl} style={{ width: '100%', maxWidth: '1000px', maxHeight: '120vh', margin: 'auto' }} />}
      </Modal>
    </Container>
  );
}

export default Photos;
