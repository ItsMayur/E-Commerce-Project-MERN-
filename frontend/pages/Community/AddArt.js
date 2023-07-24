import React, { useState } from "react";

const AddArt = () => {
  const [titleTextRemaining, setTitleTextRemaining] = useState(80);
  const [discriptionTextRemaining, setDiscriptionTextRemaining] = useState(500);
  const handleDiscriptionText = (event) => {
    setDiscriptionTextRemaining(500 - event.target.value.length);
  };
  const handleTitleText = (event) => {
    setTitleTextRemaining(80 - event.target.value.length);
  };

  async function handleAddArt(event) {
    await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + "addArt", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        title: event.target.title.value,
        discription: event.target.discription.value,
        img: event.target.AddArtPic.value,
      }),
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.length) {
          setProducts(data);
        }
      });
  }
  return (
    <div>
      <form onSubmit={handleAddArt}>
        <input type="file" name="AddArtPic" accept=".png, .jpg, .jpeg" />
        <label>Title</label>
        <input
          id="AddArtTitle"
          onChange={handleTitleText}
          type="text"
          maxLength="80"
          name="title"
        />
        <div>
          <p>{titleTextRemaining}</p>
        </div>
        <label>Discription</label>
        <input
          id="AddArtDiscription"
          onChange={handleDiscriptionText}
          type="text"
          maxLength="500"
          name="discription"
        />
        <p>{discriptionTextRemaining}</p>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default AddArt;
