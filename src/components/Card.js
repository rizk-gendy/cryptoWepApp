import { FiArrowUpRight, FiArrowDown } from "react-icons/fi";

import './Card.css' 

const Card = ({name ,currentPrice,image,priceChange}) => {

  return (
    <div className="card">
              <div className="top">
        <img src={image} alt="/" />
      </div>
      <div>
        <h5>{name}</h5>
        <p>${currentPrice}</p>
      </div>

      {priceChange < 0 ? (
        <span className="red">
          <FiArrowDown className="icon" />
          {priceChange}%
        </span>
      ) : (
        <span className="green">
          <FiArrowUpRight className="icon" />
          {priceChange}%
        </span>
      )}

    </div>
  );
};

export default Card;
