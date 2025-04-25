import TourCard from './TourCard';

// Create a gallery that maps over the tours array and renders TourCard for each

function Gallery({ tours, removeTour }) {
  return (
    <div className="gallery">
      {tours.map((tour) => (
        <TourCard key={tour.id} tour={tour} removeTour={removeTour} />
      ))}
    </div>
  );
}

export default Gallery;
