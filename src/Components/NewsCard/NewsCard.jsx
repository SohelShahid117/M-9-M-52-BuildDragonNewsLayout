import React from "react";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  console.log(news);
  const { title, thumbnail_url, details, _id, image_url } = news;
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        {/* <img src={thumbnail_url} alt="Shoes" /> */}
        <img src={image_url} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        {/* <p>{details}</p> */}
        {details.length > 200 ? (
          <p>
            {details.slice(0, 200)}
            <Link className="text-blue-600 font-bold" to={`/news/${_id}`}>
              Read More...
            </Link>
          </p>
        ) : (
          <p>{details}</p>
        )}
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
