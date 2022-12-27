import React, { FC, memo } from "react";
import { Show } from "./model/Show";

const ShowsDescription: FC<Show> = ({ show }) => {
  return (
    <div>
      <div>
        <img src={show.image?.original} />
      </div>
    </div>
  );
};

export default memo(ShowsDescription);
