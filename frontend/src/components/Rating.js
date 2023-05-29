import React from "react";

const Rating = (props) => {
  const { rating } = props;
  return (
    <div className="rating">
      <span className="outspan">
        <i className="fa fa-star"></i>
        <span className="inspan">
          <i
            className={
              rating >= 1
                ? "fa fa-star"
                : rating >= 0.5
                ? "fa fa-star-half"
                : "fa fa-star-o no-star"
            }
          ></i>
        </span>
      </span>
      <span className="outspan">
        <i className="fa fa-star"></i>
        <span className="inspan">
          <i
            className={
              rating >= 2
                ? "fa fa-star"
                : rating >= 1.5
                ? "fa fa-star-half"
                : "fa fa-star-o no-star"
            }
          ></i>
        </span>
      </span>
      <span className="outspan">
        <i className="fa fa-star"></i>
        <span className="inspan">
          <i
            className={
              rating >= 3
                ? "fa fa-star"
                : rating >= 2.5
                ? "fa fa-star-half"
                : "fa fa-star-o no-star"
            }
          ></i>
        </span>
      </span>
      <span className="outspan">
        <i className="fa fa-star"></i>
        <span className="inspan">
          <i
            className={
              rating >= 4
                ? "fa fa-star"
                : rating >= 3.5
                ? "fa fa-star-half"
                : "fa fa-star-o no-star"
            }
          ></i>
        </span>
      </span>
      <span className="outspan">
        <i className="fa fa-star"></i>
        <span className="inspan">
          <i
            className={
              rating >= 5
                ? "fa fa-star"
                : rating >= 4.5
                ? "fa fa-star-half"
                : "fa fa-star-o no-star"
            }
          ></i>
        </span>
      </span>
    </div>
  );
};

export default Rating;
