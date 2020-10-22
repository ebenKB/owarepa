import React from 'react';
import { Carousel } from 'antd';

const HistoryCarousel = ({ children}) => {
  const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
  return (
    <Carousel autoplay effect="scroll">
      { children}
    </Carousel>
  )
}

export default HistoryCarousel
