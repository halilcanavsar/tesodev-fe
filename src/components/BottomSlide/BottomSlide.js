import './BottomSlide.scss';
import { useState } from 'react';

const BottomSlide = () => {
  const [arrayCounter, setArrayCounter] = useState(0);

  const slideArray = [
    {
      image: require('../../assets/images/Imagebottomslide.png'),
      title: 'Title 1',
      description: 'Description',
    },
    {
      image: require('../../assets/images/Imagebottomslide.png'),
      title: 'Title 2',
      description: 'Description',
    },
    {
      image: require('../../assets/images/Imagebottomslide.png'),
      title: 'Title 3',
      description: 'Description',
    },
    {
      image: require('../../assets/images/Imagebottomslide.png'),
      title: 'Title 4',
      description: 'Description',
    },
    {
      image: require('../../assets/images/Imagebottomslide.png'),
      title: 'Title 5',
      description: 'Description',
    },
  ];

  const leftButtonClick = () => {
    if (arrayCounter !== 0) {
      setArrayCounter(arrayCounter - 1);
    }
  };

  const rightButtonClick = () => {
    if (arrayCounter !== slideArray.length - 3) {
      setArrayCounter(arrayCounter + 1);
    }
  };

  return (
    <div className="bottom-slide-container">
      <h2 className="top-news">Top News</h2>

      <div className="items">
        <div className="left-button button">
          <button onClick={leftButtonClick}>
            <img src={require('../../assets/images/left.png')} alt="" />
          </button>
        </div>
        {slideArray.slice(arrayCounter, arrayCounter + 3).map((el, index) => {
          return (
            <div className="slide-item" key={index}>
              <img src={el.image} alt="avatar" />
              <p className="title">{el.title}</p>
              <p className="description">{el.description}</p>
            </div>
          );
        })}
        <div className="right-button button">
          <button onClick={rightButtonClick}>
            <img src={require('../../assets/images/right.png')} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BottomSlide;
