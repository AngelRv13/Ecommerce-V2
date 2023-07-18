import { Link } from "react-router-dom";
import { Carousel, Image } from "react-bootstrap";
import image1 from '../images/bred11s.jpeg'
import image2 from '../images/bredtoes.jpeg';
import image3 from '../images/chicagoAIR.jpeg'

const ProdCarousel = () => {
  
  return  (
    <Carousel pause="hover">
    
    <Carousel.Item key={1}>
          <Link >
            <Image
              src={image1}
              alt={Image}
              fluid
            />
            <Carousel.Caption >
              <h2>
                Bred 11s
              </h2>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>

    <Carousel.Item key={2}>
          <Link >
            <Image
              src={image2}
              alt={Image}
              fluid
            />
            <Carousel.Caption>
              <h2>
               Bred toes
              </h2>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>

    <Carousel.Item key={3} >
          <Link>
            <Image
              src={image3}
              alt={Image}
              fluid
            />
            <Carousel.Caption>
              <h2>
              Chicago Air
              </h2>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>

    </Carousel>
  );
};

export default ProdCarousel;