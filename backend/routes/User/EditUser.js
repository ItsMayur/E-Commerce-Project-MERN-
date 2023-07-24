const express = require("express");
const { USER } = require("../../models");
const Router = express.Router();

async function updateUserDetails(data, toUpdate) {
  const idString = String(toUpdate._id);
  await USER.updateOne(
    { _id: idString },
    {
      $set: {
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        number: data.number,
        address: data.address,
      },
    }
  );
}

Router.post("/EditUser", (req, res) => {
  // CHECKING IS SESSION ID OF USER EXIST IN MONGOOSE DB
  USER.exists({ user_id: req.session.sessionID }).then((response) => {
    // IF SESSION EXIST
    if (Boolean(response)) {
      const updatedUser = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        number: req.body.number,
      };
      // UPDATE USER DATA
      USER.find(
        { password: req.body.password },
        { user_id: req.session.sessionID }
      ).then((isUserAlreadyExist) => {
        if (Boolean(isUserAlreadyExist[0])) {
          updateUserDetails(updatedUser, isUserAlreadyExist[0]);
          res.send({ message: "USER UPDATED" });
        } else {
          res.send({ message: "WRONG PASSWORD" });
        }
      });
    }
    // IF SESSION DOESN'T EXIST
    else {
      res.send({ message: "USER NOT EXIST" }).status(400);
    }
  });
});

module.exports = Router;
