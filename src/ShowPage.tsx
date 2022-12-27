import axios from "axios";
import React, { FC, memo, useEffect } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux/es/exports";
import { loadingShows, showsLoaded } from "./action/action";
import { showsLoadingSelector, showsSelector } from "./selector/show";
import ShowItems from "./ShowItems";

const ShowPage: FC = () => {
  const loading = useSelector(showsLoadingSelector);
  const shows = useSelector(showsSelector);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadingShows());
    axios.get("https://api.tvmaze.com/search/shows?q=all").then((response) => {
      console.log("response", response.data);
      dispatch(showsLoaded(response.data));
    });
  }, []);

  if (loading) {
    return (
      <div className="text-5xl text-red-700 flex items-center justify-center">
        <AiOutlineLoading3Quarters className="text-red-500 text-3xl animate-spin" />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-md md:max-w-4xl mx-auto my-4 pt-10 pl-28 bg-red-300">
      {shows.map((s) => (
        <div key={s.show.id}>
          <ShowItems {...s} />
        </div>
      ))}
    </div>
  );
};

export default memo(ShowPage);
