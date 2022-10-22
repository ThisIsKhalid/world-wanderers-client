import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";

const Place = ({place}) => {
    const {id, name, img} = place;
    return (
      <div className="max-w-lg p-4 shadow-md bg-gray-900 text-gray-100 rounded-md">
        <div className="space-y-4">
          <div className="space-y-2">
            <img
              src={img}
              alt=""
              className="block object-cover object-center w-full rounded-md h-72 bg-gray-500"
            />
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-orange-500">{name}</h1>
            <p className="leading-snug text-gray-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repellat, excepturi. Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Repellat, excepturi.
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center mt-3">
          <Link
            to={`/place/${id}`}
            className="bg-orange-500 px-4 py-2 rounded-lg flex flex-row items-center"
          >
            BOOKING{" "}
            <span className="ml-2">
              <FaArrowRight />
            </span>
          </Link>
          <p>rating</p>
        </div>
      </div>
    );
};

export default Place;