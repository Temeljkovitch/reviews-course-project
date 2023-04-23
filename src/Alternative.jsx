import { useState } from "react";
import data from "./data";
import { FaQuoteRight } from "react-icons/fa";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Alternative = () => {
  const [reviews, setReviews] = useState(data);
  const [index, setIndex] = useState(0);

  // #Option 1
  const nextReview = () => {
    setIndex((currentIndex) => {
      const newIndex = (currentIndex + 1) % reviews.length;
      return newIndex;
    });
  };

  const previousReview = () => {
    setIndex((currentIndex) => {
      const newIndex = (currentIndex - 1 + reviews.length) % reviews.length;
      return newIndex;
    });
  };

  const randomReview = () => {
    let random = Math.floor(Math.random() * reviews.length);
    if (random === index) {
      random = index + 1;
    }
    const newIndex = random % reviews.length;
    setIndex(newIndex);
  };

  const { name, job, image, text } = reviews[index];
  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-container">
          <FaChevronLeft className="prev-btn" onClick={previousReview} />
          <FaChevronRight className="next-btn" onClick={nextReview} />
        </div>
        <button
          type="button"
          className="btn btn-hipster"
          onClick={randomReview}
        >
          surprise me
        </button>
      </article>
    </main>
  );
};

export default Alternative;
