import React from "react";

const EditInfo = () => {
  async function handleEditUserInfo(event) {
    event.preventDefault();
    const edituserData = {
      first_name: event.target.first_name.value,
      last_name: event.target.last_name.value,
      email: event.target.email.value,
      address: event.target.address.value,
      number: event.target.number.value,
      password: event.target.password.value,
    };
    await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + "EditUser", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(edituserData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  }
  return (
    <div>
      <div>EDIT ACCOUNT INFO</div>
      <div>
        <form onSubmit={handleEditUserInfo}>
          <label>First Name</label>
          <input type="text" name="first_name" />
          <label>Last Name</label>
          <input type="text" name="last_name" />
          <label>Email</label>
          <input type="email" name="email" />
          <label>Number</label>
          <input type="Number" name="number" />
          <label>Address</label>
          <input type="text" name="address" />
          <label>Enter your current password</label>
          <input type="password" name="password" />
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
};

export default EditInfo;
