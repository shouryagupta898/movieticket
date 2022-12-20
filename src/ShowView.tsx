import React, { FC } from "react";
import { Link } from "react-router-dom";
import { ShowInfo } from "./interface";

interface props {
  score: number;
  show: ShowInfo;
}

const ShowView: FC<props> = ({ score, show }) => {
  return (
    <div>
      <div className="h-80 w-80 m-2 p-1">
        <img
          className="h-full w-full object-cover border border-gray-400"
          src={show.image?.original}
        />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-2xl text-black ">{show.name}</h1>
        <ul>
          <span className="text-blue-500">Score:</span> {score}
        </ul>
      </div>

      <Link to={"/shows/" + show.id}>
        <button className="border border-black bg-red-300 px-2 py-1 rounded-md mt-3 ml-32">
          Booking
        </button>
      </Link>
    </div>
  );
};

export default ShowView;
