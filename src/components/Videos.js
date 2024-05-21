import Aos from 'aos';
import React, { useEffect } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
function Videos() {

  const navigate= useNavigate();

  useEffect(() => {
    Aos.init({
      disable: "phone",
      duration: 900,
      easing: "ease-out-cubic"
    })
  })
  const videoItems = [
    {
      url: 'https://www.youtube.com/watch?v=qFGprUmT6Rs',
    },
    // {
    //   url: 'https://hdvideo9.com/files/download/type/FHD/id/477',
    //     content: {
    //       title: 'Video 2',
    //     },
    //  },
    // {
    //   url: 'https://hdvideo9.com/files/download/type/FHD/id/377',
    //   content: {
    //     title: 'Video 3',
    //   },
    // },
   ];
   const videoStyle = {
    width: '400px',
    height: '400px',
    objectFit: 'cover', 
 };

  return (
    <Container>
      <div>
          <h3 className='text-center mb-1 mt-3'>Videos<Button onClick={()=> navigate("/videos")} 
                className='float-end bg-primary border'>View All </Button> 
           </h3>
      </div>
      <Row>
        {videoItems.map((item, index) => (
              <Col xs={12} md={4} key={index} className="text-center  align-items-center justify-content-center mb-5" data-aos="fade-right " data-aos-delay="200">
                <video controls style={videoStyle}>
                  <source src={item.url} type="video/mp4" />
                </video>
              </Col>
          ))}
      </Row>
    </Container>
  );
}
export default Videos
