import { GiCampfire } from 'react-icons/gi';

const getAmenity = (amenity) => {
  // amenity = amenity.toLowerCase();

  switch(amenity.toString()) {
    case "Fire Pit":
      console.log(amenity);
      return (
          <GiCampfire />

      );
    default:
      return '';
  }
};

export default getAmenity;
