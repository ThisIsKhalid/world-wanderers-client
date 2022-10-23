import React from "react";
import { FaStar } from "react-icons/fa";

const Hotel = ({ hotel }) => {

    const {name, description, ratings, price, img} = hotel;

  return (
    <div className="max-w-lg p-4 shadow-md bg-gray-900 text-gray-100 rounded-lg mb-5">
      <div className="space-y-4">
        <div className="space-y-2">
          <img
            src={img}
            alt=""
            className="block object-cover object-center w-full rounded-md h-72 bg-gray-500"
          />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-violet-400">{name}</h3>
          <p className="leading-snug text-gray-400">{description}</p>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1">
            <FaStar className="text-orange-500"></FaStar>
            {ratings}
          </div>
          <div className="text-orange-500 text-xl font-bold">
            <p>${price} / night</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
