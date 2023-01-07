import React, { FC, memo } from "react";
import { Link } from "react-router-dom";
import { Show } from "./model/Show";

const ShowItems: FC<Show> = ({ score, show }) => {
  return (
    <div>
      <div className="h-60 w-60 ">
        <img
          className="h-full w-full object-cover border border-black shadow-md"
          src={show.image?.original || show.image?.medium}
        />
      </div>
      <div className="flex flex-col my-3">
        <ul>{show.name}</ul>
        <ul>{score}</ul>
        <Link to={"/shows/" + show.id}>
          <button className="border border-black bg-blue-300 px-2 py-1 rounded-md mt-1 ">
            Booking
          </button>
        </Link>
      </div>
    </div>
  );
};

export default memo(ShowItems);
