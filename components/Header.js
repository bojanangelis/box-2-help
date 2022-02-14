import Image from "next/image";
import React from "react";

function Header() {
  return (
    <div className="h-32 flex sticky top-0 items-center justify-around  bg-white">
      <div>
        <Image
          src={"/ways2help.png"}
          alt={"ways2help"}
          width={160}
          height={110}
          objectFit={"contain"}
        />
      </div>
      <div className="space-x-2 lg:space-x-6 flex items-center">
        <button className="button">ABOUT US</button>
        <button className="button">BUY A BOX</button>
      </div>
    </div>
  );
}

export default Header;
