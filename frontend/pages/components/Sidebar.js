import React from "react";

export const Sidebar = () => {
  const handleShowDiscovery = () => {
    if (document.getElementById("DiscoveryItems").style.display == "") {
      document.getElementById("DiscoveryItems").style.display = "block";
    } else if (
      document.getElementById("DiscoveryItems").style.display == "block"
    ) {
      document.getElementById("DiscoveryItems").style.display = "";
    }
  };

  return (
    <div className="w-48">
      <div>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <button onClick={handleShowDiscovery}>Discovery</button>
            <ul className="hidden mx-2" id="DiscoveryItems">
              <li>
                <a href="">Electronics</a>
              </li>
              <li>
                <a href="">Clothes</a>
              </li>
              <li>
                <a href="">Bags</a>
              </li>
              <li>
                <a href="">Food</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="">Popular Products</a>
          </li>
          <li>
            <a href="">Top authors</a>
          </li>
          <li>
            <a href="">Feed</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <a href="">Setting</a>
          </li>
          <li>
            <a href="">Help</a>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <a href="">Terms</a>
          </li>
          <li>
            <a href="">Privacy</a>
          </li>
          <li>
            <a href="">Help</a>
          </li>
        </ul>
        <p>Made in Next.js</p>
      </div>
    </div>
  );
};
