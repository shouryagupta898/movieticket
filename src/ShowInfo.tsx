import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AiOutlineRollback, AiOutlineLoading3Quarters } from "react-icons/ai";

export interface stateObj {
  id?: number;
  url?: string;
  name?: string;
  type?: string;
  language?: string;
  genres?: string[];
  status?: string;
  runtime?: number;
  averageRuntime?: number;
  premiered?: Date;
  ended?: null;
  officialSite?: string;
  schedule?: Schedule;
  rating?: Rating;
  weight?: number;
  network?: Network;
  webChannel?: null;
  dvdCountry?: null;
  externals?: Externals;
  image?: Image;
  summary?: string;
  updated?: number;
  _links?: Links;
}

export interface Links {
  self: Nextepisode;
  previousepisode: Nextepisode;
  nextepisode: Nextepisode;
}

export interface Nextepisode {
  href: string;
}

export interface Externals {
  tvrage: null;
  thetvdb: number;
  imdb: string;
}

export interface Image {
  medium: string;
  original: string;
}

export interface Network {
  id: number;
  name: string;
  country: Country;
  officialSite: string;
}

export interface Country {
  name: string;
  code: string;
  timezone: string;
}

export interface Rating {
  average: number;
}

export interface Schedule {
  time: string;
  days: string[];
}

const ShowInfo: FC = () => {
  const params = useParams();
  //   console.log("params",params);
  const id = Number(params.id);
  //   console.log("id", typeof id);

  const [info, setInfo] = useState<stateObj>({});
  console.log("info", info);

  useEffect(() => {
    axios.get("https://api.tvmaze.com/shows/" + id).then((response: any) => {
      // console.log("response",response.data);
      setInfo(response.data);
    });
  }, []);

  if (!info) {
    return (
      <div>
        <AiOutlineLoading3Quarters className="text-red-500 text-3xl animate-spin" />
      </div>
    );
  }

  return (
    <div className="m-10 bg-white h-96 p-4 ">
      <Link to="/">
        <AiOutlineRollback className="text-2xl text-blue-500" />
      </Link>
      <div className=" flex ">
        <div className="h-70 w-60">
          {info.image && (
            <img
              className="h-full w-full object-cover border border-gray-400"
              src={info.image.original}
            />
          )}
        </div>

        <div className="flex ">
          <div className="max-w-xl ml-4 mt-10">
            {" "}
            <p>{info.summary}</p>
          </div>
          <span className="flex grow"></span>

          <div className="p-2">
            <div className="flex flex-col   border border-gray-300 bg-gray-200 shadow-md p-3 ">
              <h1 className="text-3xl self-center ">Show Info</h1>
              <div>
                <span className="font-bold"> Network:</span>{" "}
                <a
                  className="text-green-500 underline"
                  href={info.network?.officialSite}
                >
                  {info.network?.officialSite}
                </a>
                <ul>
                  <span className="font-bold">Schedule:</span>{" "}
                  {info.schedule?.days} at {info.schedule?.time} ({info.runtime}{" "}
                  min)
                </ul>
                <ul>
                  <span className="font-bold">Status:</span>
                  {info.status}
                </ul>
                <ul>
                  <span className="font-bold">Show Type:</span> {info.type}
                </ul>
                {info.genres && (
                  <ul>
                    <span className="font-bold">Genres:</span> {info.genres[0]}|{" "}
                    {info.genres[1]}
                  </ul>
                )}
                <ul>
                  <span className="font-bold">Name:</span> {info.name}
                </ul>
                <ul>
                  <span className="font-bold">Official site:</span>{" "}
                  <a
                    className="text-green-500 underline"
                    href={info.officialSite}
                  >
                    {info.officialSite}
                  </a>
                </ul>
                <ul>
                  <span className="font-bold">Rating:</span>
                  {info.rating?.average}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowInfo;
