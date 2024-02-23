const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const sequelize = require("./utils/database");
const userRoutes = require("./routes/user");
const User = require("./models/users");
const StudentForm = require("./models/studentform");
const studentRoutes = require("./routes/studentform");
const TrackStatus = require("./models/trackstatus");

app.use(cors());
app.use(bodyParser.json({ extended: false }));
app.use("/user", userRoutes);
app.use("/student", studentRoutes);
StudentForm.belongsTo(User);
TrackStatus.belongsTo(User);
StudentForm.hasOne(TrackStatus);
TrackStatus.belongsTo(StudentForm);
sequelize
  .sync()
  .then((res) => {
    app.listen(4000);
  })
  .catch((err) => console.log(err));
