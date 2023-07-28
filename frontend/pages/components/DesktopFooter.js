import React from "react";

const DesktopFooter = () => {
  return (
    <div className="max-sm:hidden bg-black h-52 px-10 py-10 text-white">
      <div className="border-white border-t-2 grid grid-cols-2">
        <div className="py-4">
          <div className="text-3xl">CompanyLogo</div>
          <div className="text-lg">This is headline of company</div>
        </div>
        <div className="grid grid-cols-2 my-5">
          <ul className="space-y-2">
            <li>About</li>
            <li>Help</li>
          </ul>
          <div>
            <ul className="space-y-2">
              <li>Info</li>
              <li>Contact us</li>
              <li>Privacy Policy</li>
              <li>Terma & condition</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopFooter;
