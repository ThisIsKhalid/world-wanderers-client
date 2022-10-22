import React from "react";
import { useLoaderData } from "react-router-dom";
import BookingForm from "./BookingForm";

const PlaceBooking = () => {
  const place = useLoaderData();
  const { name, img, description } = place;
  // console.log(place);
  return (
    <div className="">
      <div
        className="h-screen bg-cover grid md:grid-cols-2 grid-cols-1"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="flex flex-col justify-center p-10">
          <h1 className="uppercase text-7xl font-mono text-orange-500 font-bold">
            {name}
          </h1>
          <p className="text-white font-medium text-lg mt-3">{description}</p>
        </div>

        
        <div className="flex flex-col justify-center items-center">
          <BookingForm name={name}></BookingForm>
        </div>
      </div>
    </div>
  );
};

export default PlaceBooking;
