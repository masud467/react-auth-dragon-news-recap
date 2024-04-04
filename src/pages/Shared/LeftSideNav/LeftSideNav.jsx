// import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import png1 from "../../../assets/1.png";
import png2 from "../../../assets/2.png";
import png3 from "../../../assets/3.png";
import calendar from "../../../assets/publish .png";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      <div className="space-y-6">
        <h1 className="text-3xl">All Category</h1>
        {categories.map((category) => (
          <Link
            to={`/category/${category.id}`}
            className="block ml-4 "
            key={category.id}
          >
            {category.name}
          </Link>
        ))}
      </div>

      <div>
        <div className="mb-4">
          <img src={png1} alt="" />
          <h1>Bayern Slams Authorities Over Flight Delay to Club World Cup</h1>
          <div className="flex gap-4">
            <p>Sports</p>
            <div className="flex gap-1 items-center">
              <img className="w-6 h-6" src={calendar} alt="" />
              <p>Jan 4, 2022</p>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <img src={png2} alt="" />
          <h1>Bayern Slams Authorities Over Flight Delay to Club World Cup</h1>
          <div className="flex gap-4">
            <p>Sports</p>
            <div className="flex gap-1 items-center">
              <img className="w-6 h-6" src={calendar} alt="" />
              <p>Jan 4, 2022</p>
            </div>
          </div>
        </div>
        <div>
          <img src={png3} alt="" />
          <h1>Bayern Slams Authorities Over Flight Delay to Club World Cup</h1>
          <div className="flex gap-4">
            <p>Sports</p>
            <div className="flex gap-1 items-center">
              <img className="w-6 h-6" src={calendar} alt="" />
              <p>Jan 4, 2022</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSideNav;
