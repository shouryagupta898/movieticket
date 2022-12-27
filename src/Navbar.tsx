import React, { FC, memo } from "react";

const Navbar: FC = () => {
  return (
    <div className="flex justify-center m-2 border border-black bg-white py-2">
      <h1 className="text-4xl font-serif "> WORLD OF ENTERTAINMENT </h1>
    </div>
  );
};

export default memo(Navbar);
