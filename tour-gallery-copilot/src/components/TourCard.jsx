import { useState } from 'react';

// Create a card component to display a tour's name, info, image, and price
// Include a "Not Interested" button that removes this tour when clicked

function TourCard({ tour, removeTour }) {
  const { id, name, info, image, price } = tour;
  const [readMore, setReadMore] = useState(false);

  return (
    <div className="tour-card">
      <img src={image} alt={name} />
      <div className="tour-info">
        <h2>{name}</h2>
        <h4>${price}</h4>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? 'Show Less' : 'Read More'}
          </button>
        </p>
        <button className="not-interested" onClick={() => removeTour(id)}>
          Not Interested
        </button>
      </div>
    </div>
  );
}

export default TourCard;
