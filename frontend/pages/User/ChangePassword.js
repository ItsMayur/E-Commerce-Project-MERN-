import React from "react";

const EditInfo = () => {
  async function handleEditUserPassword(event) {
    event.preventDefault();
    const edituserPassword = {
      password: event.target.password.value,
      new_password: event.target.new_password.value,
      new_password2: event.target.new_password2.value,
    };
    if (edituserPassword.new_password === edituserPassword.new_password2) {
      await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + "changePassword", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(edituserPassword),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data.message);
        });
    } else {
      console.log("NEW PASSWORD NOT MATCHING");
    }
  }
  return (
    <div>
      <div>EDIT ACCOUNT INFO</div>
      <div>
        <form onSubmit={handleEditUserPassword}>
          <label>Old Password</label>
          <input type="password" name="password" />
          <label>New Password</label>
          <input type="password" name="new_password" />
          <label>Reenter new password</label>
          <input type="password" name="new_password2" />
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
};

export default EditInfo;
