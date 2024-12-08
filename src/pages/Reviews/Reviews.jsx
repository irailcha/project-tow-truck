import React from "react";
import "./Reviews.style";
import reviews from "../../reviews.json";
import { StyleCard,  ReviewsList } from "./Reviews.style";

const Reviews = () => {
  return (
    <section className="section">
      <div className="container">
        <ReviewsList>
          {reviews.map(({ imageUrl, id, feedback, screenWidth }) => (
            <li key={id}>
              <StyleCard>
                <img src={imageUrl} alt={feedback} width={screenWidth} />
              </StyleCard>
            </li>
          ))}
        </ReviewsList>
      </div>
    </section>
  );
};

export default Reviews;
