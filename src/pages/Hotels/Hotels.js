import React from "react";
import { useLoaderData } from "react-router-dom";
import Hotel from "./Hotel";
import Map from "./Map";

const Hotels = () => {
  const hotels = useLoaderData();
//   console.log(hotels);
  return (
    <div className="grid grid-cols-3">
      <div className="col-span-2 mx-auto">
        <h1 className="text-3xl font-mono text-orange-500 text-center my-10 font-semibold">
          Best Hotels for you in this area :
        </h1>
        <div className="">
          {hotels.map((hotel) => (
            <Hotel key={hotel.id} hotel={hotel}></Hotel>
          ))}
        </div>
      </div>
      <div>
        <Map></Map>
      </div>
    </div>
  );
};

export default Hotels;
