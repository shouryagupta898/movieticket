import axios from "axios";
import React, { FC, useEffect, useState } from "react";
// import { ShowInfo } from "./interface";
import ShowView from "./ShowView";

const ShowName: FC = () => {
  const [show, setShow] = useState([]);
  const [loading, setLoading] = useState(true);
  // console.log("show", show);

  useEffect(() => {
    axios.get("https://api.tvmaze.com/search/shows?q=all").then((response) => {
      // console.log("response", response);
      setShow(response.data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-3 ">
      {show.map((items: any) => {
        return (
          <div key={items.show.id}>
            <ShowView {...items} />
          </div>
        );
      })}
    </div>
  );
};
export default ShowName;
