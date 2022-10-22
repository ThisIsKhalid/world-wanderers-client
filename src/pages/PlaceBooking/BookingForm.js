import React, { useState } from "react";
import DatePicker from "react-date-picker";

const BookingForm = ({ name }) => {
    const [value, onChange] = useState(new Date());


  return (
    <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-white">
      <form action="" className="space-y-6 ng-untouched ng-pristine ng-valid">
        <div className="space-y-1">
          <label htmlFor="origin" className="block text-gray-700">
            Origin
          </label>
          <input
            type="text"
            name="origin"
            id="origin"
            placeholder="Dhaka"
            className="w-full px-4 py-3 rounded-md text-gray-800 text-xl"
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="password" className="block text-gray-700">
            Destination
          </label>
          <input
            readOnly
            defaultValue={name}
            type="text"
            name="password"
            id="password"
            placeholder={name}
            className="w-full px-4 py-3 rounded-md text-gray-800 text-xl"
          />
        </div>
        <div className="flex flex-row justify-between">
          <div>
            <p>From</p>
            <DatePicker onChange={onChange} value={value} />
          </div>
          <div>
            <p>To</p>
            <DatePicker onChange={onChange} value={value} />
          </div>
        </div>

        <button className="block w-full p-3 text-center rounded-sm text-black font-semibold bg-orange-400 hover:bg-orange-600">
          Start Booking
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
