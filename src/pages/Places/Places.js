import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Place from './Place';

const Places = () => {
    const places = useLoaderData();
    // console.log(places);
    return (
      <div className='mt-10 container mx-auto'>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
          {places.map((place) => (
            <Place key={place.id} place={place}></Place>
          ))}
        </div>
      </div>
    );
};

export default Places;