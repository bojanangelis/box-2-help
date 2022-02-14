import React from "react";

function Main() {
  return (
    <div className="flex relative h-96 w-full justify-between xl:justify-around">
      <div className="w-full lg:w-3/4 p-10 lg:ml-40 h-60 lg:h-0 space-y-4">
        <h2 className="text">We rise by lifting others !</h2>
        <h2 className="text">Help someone with just two clicks</h2>
      </div>
      <div className="absolute mt-60 lg:mt-0 bg-right-top bg-contain bg-mobile-b2h lg:bg-main-b2h w-full xl:w-3/4 h-full bg-no-repeat z-50" />
    </div>
  );
}

export default Main;
