const express = require("express");
const { USER } = require("../../models");
const Router = express.Router();

async function updateUserPassword(data, toUpdate) {
  const idString = String(toUpdate._id);
  await USER.updateOne(
    { _id: idString },
    {
      $set: {
        password: data.new_password,
      },
    }
  );
}

Router.post("/changePassword", (req, res) => {
  // CHECKING IS SESSION ID OF USER EXIST IN MONGOOSE DB
  USER.exists({ user_id: req.session.sessionID }).then((response) => {
    // IF SESSION EXIST
    if (Boolean(response)) {
      const updatedPassword = {
        password: req.body.password,
        new_password: req.body.new_password,
      };
      // UPDATE USER DATA
      USER.find(
        { password: req.body.password },
        { user_id: req.session.sessionID }
      ).then((isUserAlreadyExist) => {
        if (Boolean(isUserAlreadyExist[0])) {
          updateUserPassword(updatedPassword, isUserAlreadyExist[0]);
          res.send({ message: "PASSWORD CHANGED" });
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
