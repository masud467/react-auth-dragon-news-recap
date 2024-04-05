import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const {_id, title, image_url, details } = news;
  return (
    <div className="card  bg-base-100 shadow-md gap-8">
      <figure className="px-10 pt-10">
        <img src={image_url} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>
          {details.length > 200 ? (
            <p>
              {" "}
              {details.slice(0, 200)}
              <Link to={`/news/${_id}`} className="text-blue-600 font-bold">read more...</Link>
            </p>
          ) : (
            <p>{details}</p>
          )}
        </p>
      </div>
    </div>
  );
};

export default NewsCard;
NewsCard.propTypes = {
  news: PropTypes.object,
};
