import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { CarouselWrapper, Item, Image, CarouselHeading } from './CarouselElements';


// import { useNavigate} from "react-router-dom";

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};

// const navigate = useNavigate();


const items = [
    <Item onClick={(e) => console.log(e.target.alt)} data-value="1"><Image  alt="crossiant" src="https://images.pexels.com/photos/3993720/pexels-photo-3993720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/></Item>,
    <Item onClick={(e) => console.log(e.target.alt)} data-value="2"><Image  alt="brownie"src="https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/></Item>,
    <Item onClick={(e) => console.log(e.target.alt)} data-value="3"><Image  alt="coffee" src="https://images.pexels.com/photos/2930966/pexels-photo-2930966.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/></Item>,
    <Item  data-value="4"><Image  alt="test" src="https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/></Item>,
    <Item  data-value="5"><Image alt="test" src="https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/></Item>,
];

const Carousel = () => (

    <CarouselWrapper>
        <CarouselHeading>Featured Posts
        </CarouselHeading>
    <AliceCarousel 
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
        disableDotsControls="true"
        autoPlayControls="true"
        infinite
        
    />
    </CarouselWrapper>

);

export default Carousel;