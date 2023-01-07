import { FC, memo } from "react";
import { Cast } from "./model/Cast";

const showCast: FC<Cast> = ({ character, person }) => {
  return (
    <div>
      <div className="h-28 w-28 border border-black p-1 ">
        <img
          className="h-full w-full object-cover"
          src={
            character.image?.medium ||
            character.image?.original ||
            person.image?.medium ||
            person.image?.original
          }
        />
      </div>
      <ul>{person.name}</ul>
    </div>
  );
};

export default memo(showCast);
