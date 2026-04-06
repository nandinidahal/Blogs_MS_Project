import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <Link to='/blog/id'>
      <div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg mb-4 ">
        <img
          className="w-full"
          src="/src/img/code.png"
          alt="Sunset in the mountains"
          // className="h-full w-full "
        />
        <div className="px-6 py-4 border-2 border-emerald-600 mt-5">
          <div className="font-bold text-xl mb-2">{props.type}</div>
          <p className="text-gray-700 text-base ">
            {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil. */}
            {props.description}
          </p>
        </div>
        {/* <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #photography
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #travel
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #winter
          </span>
        </div> */}
      </div>
    </div>
    </Link>
  );
};

export default Card;
