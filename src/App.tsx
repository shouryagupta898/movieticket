import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import ShowDetail from "./ShowDetail";
import ShowPage from "./ShowPage";

const App: FC = () => {
  return (
    <div className="flex flex-col max-w-5xl mx-auto">
      <Navbar />
      <div className="bg-yellow-300 ">
        <Routes>
          <Route index element={<ShowPage />} />
          <Route path="/shows/:id" element={<ShowDetail />} />
        </Routes>
      </div>
    </div>
  );
};
export default App;
