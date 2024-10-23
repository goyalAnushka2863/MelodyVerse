const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// CORS allows requests from other websites
app.use(cors());
// This parses incoming JSON data
app.use(express.json());

// connecting to mongoose database
mongoose.connect("mongodb://localhost:27017/ConnectVerse-App");
// register the user
app.post("/api/register", async (req, res) => {
  try {
    // creating hash password
    const newPassword = await bcrypt.hash(req.body.password, 10);
    // creating user in databse
    await User.create({
      name: req.body.name,
      email: req.body.email,
      password: newPassword,
    });
    // response
    res.json({ status: "ok" });
  } catch (err) {
    res.json({ status: "error", error: "Duplicate email" });
  }
});
// login the user
app.post("/api/login", async (req, res) => {
  // find using email
  const user = await User.findOne({
    email: req.body.email,
  });
  // if user not exist
  if(!user) return {status: 'ok', error:'Invalid login'}
  // compare if current password matches with the hash password present in database
  const isPasswordValid = await bcrypt.compare(req.body.password, user.password)
  // if password matches
  if (isPasswordValid) {
    // create token
    const token = jwt.sign(
      {
        name: user.name,
        email: user.email,
      },
      "secret123"
    );
    // will return response having user token
    return res.json({ status: "ok", user: token });
  } else return res.json({ status: "error", user: false });
});
// port 1337 will handle the API of login and register
app.listen(1337);
