import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { CarouselWrapper, Item, Image, CarouselHeading } from './CarouselElements';
import { useNavigate } from 'react-router-dom';

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

class Carousel extends React.Component {
  renderItems() {
    const { featuredPosts, getBlog } = this.props;

    return featuredPosts.map((post, index) => (
      <Item key={index} onClick={(e) => console.log(e.target.alt)} data-value={index + 1}>
        <Image alt={post.title} src={post.feature} onClick={() =>getBlog(post.id)}/>
      </Item>
    ));
  }

  render() {
    return (
      <CarouselWrapper>
        <CarouselHeading>Featured Posts</CarouselHeading>
        <AliceCarousel
          mouseTracking
          items={this.renderItems()}
          responsive={responsive}
          controlsStrategy="alternate"
          disableDotsControls={true}
          infinite
        />
      </CarouselWrapper>
    );
  }
}

export default Carousel;

