import { useState } from "react";
import data from "./data";
import { FaQuoteRight } from "react-icons/fa";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const App = () => {
  const [reviews, setReviews] = useState(data);
  const [index, setIndex] = useState(0);

  const checkNumber = (number) => {
    if (number > reviews.length - 1) {
      return 0;
    }
    if (number < 0) {
      return reviews.length - 1;
    }
    return number;
  };

  // #Option 1
  const nextReview = () => {
    setIndex((currentIndex) => {
      const newIndex = currentIndex + 1;
      return checkNumber(newIndex);
    });
  };

  const previousReview = () => {
    setIndex((currentIndex) => {
      const newIndex = currentIndex - 1;
      return checkNumber(newIndex);
    });
  };

  // # Option 2
  // const nextReview = () => {
  //   if (index < reviews.length - 1) {
  //     setIndex(index + 1);
  //   } else {
  //     setIndex(0);
  //   }
  // };
  // const previousReview = () => {
  //   if (index > 0) {
  //     setIndex(index - 1);
  //   } else {
  //     setIndex(reviews.length - 1);
  //   }
  // };

  const randomReview = () => {
    let random = Math.floor(Math.random() * 4);
    if (random === index) {
      random = index + 1;
    }
    setIndex(checkNumber(random));
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
export default App;
