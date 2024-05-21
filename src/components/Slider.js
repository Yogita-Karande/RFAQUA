import { Carousel, Container, Image } from 'react-bootstrap';

function Slider() {
  const carouselItems = [
    {
      imageUrl: '/images/about-images/about_RFAQUA.jpg',
      caption: {
        title: 'Welcome to RFAQUA Solutions',
        // text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
      },
    },
    // {
    //   imageUrl: '	https://roomtodo.com/public/files/what_c/bathroom/bathroom_classic.jpg' ,
    //   caption: {
    //     title: 'Second slide label',
    //     text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
    //   },
    // },
    // {
    //   imageUrl: 	'https://roomtodo.com/public/files/what_c/house/render_ID_1935.jpg',
    //   caption: {
    //     title: 'Third slide label',
    //     text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
    //   },
    // },
  ];
  const slideStyle = {
    width: '100%',
    height: '600px',
    
  }
  return (
    <Container className='mt-5 ' data-aos="fade-right" >
      <Carousel >
        {carouselItems.map((item, index) => (
          <Carousel.Item key={index} style={slideStyle} >
            <Image width="100%"   src={item.imageUrl} fluid  />
            <Carousel.Caption>
              {/* <h3>{item.caption.title}</h3>
              <p>{item.caption.text}</p> */}
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}
export default Slider;
