import React, { useState, useEffect, useRef } from 'react';
import './CarouselItem.css';

const CarouselItem = ({ item, visible, distance, onClick }) => {
  const [flipped, setFlipped] = useState(false);
  const [position, setPosition] = useState(null);

  useEffect(() => {
    if (distance === 0) {
      setPosition('center');
    } else if (distance === -1) {
      setPosition('left');
    } else if (distance === 1) {
      setPosition('right');
    } else {
      setPosition(null);
    }
  }, [distance]);

  const cardRef = useRef(null);

  const handleClick = () => {
    if (position === 'center') {
      cardRef.current.classList.toggle('flipped');
      setFlipped(!flipped);
    } else {
      onClick(distance);
    }
  };

  const scale = 0.6 + 0.4 * Math.max(0, 1 - Math.abs(distance));

  return (
    <>


    <div
      className={`carousel-item ${visible ? 'visible' : ''} ${position ? position : ''}`}
      style={{ transform: `translateX(${distance * 300}px) scale(${scale})` }}
      onClick={handleClick}
      ref={cardRef}
    >
      <div style={{ perspective: '1000px' }}>
        <div className={`carousel-item-content`}>
      
          <div className="carousel-item-front">
            {item.question}
          </div>
          <div className="carousel-item-back">
            {item.answer}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default CarouselItem;
