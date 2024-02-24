const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const sequelize = require("./utils/database");
const userRoutes = require("./routes/User/user");
const User = require("./models/User/users");
const StudentForm = require("./models/Admission/studentform");
const studentRoutes = require("./routes/Admission/studentform");
const TrackStatus = require("./models/Admission/trackstatus");
const admissionNoticeRoutes = require("./routes/Admission/admissionnotice");

app.use(cors());
app.use(bodyParser.json({ extended: false }));
app.use("/user", userRoutes);
app.use("/student", studentRoutes);
app.use("/admission", admissionNoticeRoutes);
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
