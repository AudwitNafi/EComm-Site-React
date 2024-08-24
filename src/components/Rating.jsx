import React from "react";
import empty from "../empty-star.png";
import star from "../star.png";
const Rating = ({ rating }) => {
  const maxRating = 5;
  const emptyStars = maxRating - rating;

  const renderStars = () => {
    const stars = [];

    // Render filled stars
    for (let i = 0; i < rating; i++) {
      stars.push(<img className="star" key={i} src={star} />);
    }

    // Render empty stars
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<img className="star" key={i} src={empty} />);
    }

    return stars;
  };

  return <div>{renderStars()}</div>;
};

export default Rating;
