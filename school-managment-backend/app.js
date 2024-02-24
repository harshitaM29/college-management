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
const eventRoutes = require("./routes/Event/event");
const Event = require("./models/Events/events");
const EventGallery = require("./models/Events/eventgallery");
const EventRegistration = require("./models/Events/eventRegistration");

app.use(cors());
app.use(bodyParser.json({ extended: false }));

app.use("/user", userRoutes);
app.use("/student", studentRoutes);
app.use("/admission", admissionNoticeRoutes);
app.use(eventRoutes);

StudentForm.belongsTo(User);
TrackStatus.belongsTo(User);
StudentForm.hasOne(TrackStatus);
TrackStatus.belongsTo(StudentForm);
Event.hasMany(EventGallery);
EventGallery.belongsTo(Event);
Event.hasMany(EventRegistration);
EventRegistration.belongsTo(Event);
sequelize
  .sync()
  .then((res) => {
    app.listen(4000);
  })
  .catch((err) => console.log(err));
