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
const Attendance = require("./models/Student/Attendance");
const Grade = require("./models/Student/Grade");
const {
  DirectoryListing,
  FacultyProfiles,
} = require("./models/Faculty/faculty");
const newsRoutes = require("./routes/News/news");
const studentDashboardRoutes = require("./routes/Student/student");
const contactRoutes = require("./routes/ContactUs/contactus");
const libraryRoutes = require("./routes/Library/library");
const careerRoutes = require("./routes/CareerServices/careerservices");
const alumniRoutes = require("./routes/Alumni/alumni");
const facultyRoutes = require("./routes/Faculty/faculty");

app.use(cors());
app.use(bodyParser.json({ extended: false }));

//routes
app.use("/user", userRoutes);
app.use("/student", studentRoutes);
app.use("/admission", admissionNoticeRoutes);
app.use(eventRoutes);
app.use(newsRoutes);
app.use(studentDashboardRoutes);
app.use(contactRoutes);
app.use("/library", libraryRoutes);
app.use("/career", careerRoutes);
app.use("/alumni", alumniRoutes);
app.use("/faculty", facultyRoutes);

//association between tables
StudentForm.belongsTo(User);
TrackStatus.belongsTo(User);
StudentForm.hasOne(TrackStatus);
TrackStatus.belongsTo(StudentForm);
Event.hasMany(EventGallery);
EventGallery.belongsTo(Event);
Event.hasMany(EventRegistration);
EventRegistration.belongsTo(Event);
User.hasMany(Attendance);
Attendance.belongsTo(User);
User.hasMany(Grade);
Grade.belongsTo(User);
DirectoryListing.hasOne(FacultyProfiles);

//to sync db with server and start server
sequelize
  .sync()
  .then((res) => {
    app.listen(4000);
  })
  .catch((err) => console.log(err));
