import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../views/Home";

const RoutesCompose: FC = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
    </Routes>
  );
};

export default RoutesCompose;
