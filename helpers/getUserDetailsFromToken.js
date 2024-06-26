const jwt = require("jsonwebtoken");
const UserModel = require("../models/UserModel");

const getUserDetailsFromToken = async (token) => {
  if (!token) {
    return {
      token: token,
      message: "session out",
      logout: true,
    };
  }

  const decode = await jwt.verify(
    token,
    "ASKDGJSLDJGSLA;KDJIUOEWUTPIOUASKLDGJ:SLDKAJG"
  );

  const user = await UserModel.findById(decode.id).select("-password");

  return user;
};

module.exports = getUserDetailsFromToken;
