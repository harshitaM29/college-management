const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const sequelize = require("./utils/database");
const userRoutes = require("./routes/user");
const User = require("./models/users");
const StudentForm = require("./models/studentform");
const studentRoutes = require("./routes/studentform");

app.use(cors());
app.use(bodyParser.json({ extended: false }));
app.use("/user", userRoutes);
app.use("/student", studentRoutes);
User.belongsTo(StudentForm);
StudentForm.belongsTo(User);
sequelize
  .sync()
  .then((res) => {
    app.listen(4000);
  })
  .catch((err) => console.log(err));
