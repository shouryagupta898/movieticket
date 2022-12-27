import axios from "axios";
import React, { FC, memo, useEffect } from "react";
import { AiOutlineLoading3Quarters, AiOutlineRollback } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { ShowDetailLoaded, showsLoaded } from "./action/action";
import { Show, ShowClass } from "./model/Show";
import {
  showDetailSelector,
  showsLoadingSelector,
  showsSelector,
} from "./selector/show";

const ShowDetail: FC = () => {
  const params = useParams();
  const id = Number(params.id);
  const loading = useSelector(showsLoadingSelector);
  const showId = useSelector(showDetailSelector);
  console.log("showDetails", showId);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("https://api.tvmaze.com/shows/" + id).then((response) => {
      dispatch(ShowDetailLoaded(response.data));
    });
  }, [id]);

  if (loading) {
    return (
      <div className="text-5xl text-red-700 flex items-center justify-center">
        <AiOutlineLoading3Quarters className="text-red-500 text-3xl animate-spin" />
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto bg-red-300 py-4">
      <Link to="/">
        <AiOutlineRollback className="text-2xl text-blue-500" />
      </Link>
      <div className="flex md:flex justify-between ">
        <div className="h-80 w-60 mx-2 ">
          <img
            className="h-full w-full object-cover"
            src={showId.image?.original}
          />
        </div>
        <div className="w-80">{showId.summary}</div>
        <div className="flex flex-col border border-black bg-gray-200 shadow-md my-2 p-2 mr-2">
          <h1 className="self-center text-3xl font-bold font-serif ">
            Show Info
          </h1>
          <div>
            <ul>
              <span className="text-red-700 text-xl">Network: </span>
              {showId.network?.name}
            </ul>
            <ul className="">
              <span className="text-red-700 text-xl">Schedule: </span>
              {showId.schedule?.days} ({showId.schedule?.time})
            </ul>
            <ul className="">
              <span className="text-red-700 text-xl">Status: </span>
              {showId.status}
            </ul>
            <ul className="">
              <span className="text-red-700 text-xl">Show Type: </span>
              {showId.type}
            </ul>
            {showId.genres && (
              <ul className="">
                <span className="text-red-700 text-xl">Genres: </span>
                {showId.genres[0]} | {showId.genres[1]}
              </ul>
            )}
            <ul className="">
              <span className="text-red-700 text-xl">Official site: </span>
              {showId.officialSite}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ShowDetail);
