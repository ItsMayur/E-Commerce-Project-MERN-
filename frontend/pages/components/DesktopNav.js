import Link from "next/link";
import React from "react";

const DesktopNav = () => {
  return (
    <div className="max-sm:hidden grid grid-cols-3 py-4">
      <div className="flex justify-center">LOGO</div>
      <div>
        <ul className="flex gap-8 justify-center">
          <li>Discovery</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div>
        <ul className="flex justify-center space-x-3">
          <li>
            <Link href={"/User/About"}>A</Link>
          </li>
          <li>
            <Link href={"/Shopping/Basket"}>U</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DesktopNav;
