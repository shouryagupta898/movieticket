import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import ShowInfo from "./ShowInfo";
import ShowName from "./ShowName";

const App: FC = () => {
  return (
    <div className="flex flex-col max-w-7xl  mx-10">
      <Navbar />
      <div className="bg-yellow-300 ">
        <Routes>
          <Route index element={<ShowName />} />
          <Route path="/shows/:id" element={<ShowInfo />} />
        </Routes>
      </div>
    </div>
  );
};
export default App;
