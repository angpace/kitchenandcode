import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { CarouselWrapper, Item, Image, CarouselHeading } from './CarouselElements';


const responsive = {
  0: { items: 1 },
  400: { items: 2 },
  600: { items: 3 },
};

class Carousel extends React.Component {
  renderItems() {
    const { featured, getBlog } = this.props;

    return featured.map((post, index) => (
      <Item key={index} data-value={index + 1}>
        <Image alt={post.title} src={post.feature} onClick={() =>getBlog(post.id)}/>
      </Item>
    ));
  }

  render() {
    return (
      <CarouselWrapper>
        {/* <CarouselHeading>Featured Posts</CarouselHeading> */}
        <AliceCarousel

          mouseTracking
          items={this.renderItems()}
          responsive={responsive}
          controlsStrategy="alternate"
          disableDotsControls={true}
          infinite
          // autoHeight="true"
        />
      </CarouselWrapper>
    );
  }
}

export default Carousel;

