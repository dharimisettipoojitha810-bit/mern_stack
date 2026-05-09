import Carousel from 'react-bootstrap/Carousel';
import CarouselImage from './CarouselImage';

function CarouselContainer() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <CarouselImage text="https://static.vecteezy.com/system/resources/thumbnails/054/970/775/small/tiny-shopping-cart-on-computer-keyboard-symbolizes-online-shopping-and-e-commerce-vibrant-background-adds-modern-touch-to-concept-photo.jpeg" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <CarouselImage text="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg4SOlGkXMzEaFAvqjSQM1Kq-vJFLYKl-Rvw&s" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImage text="https://png.pngtree.com/thumb_back/fh260/background/20230618/pngtree-swiss-e-commerce-a-3d-rendered-shopping-experience-for-social-media-image_3639492.jpg" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselContainer;