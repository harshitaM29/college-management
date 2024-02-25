## Technologies Used

1. Node.js
2. Express.js
3. MySQL
4. Sequelize
5. React.js (Front end)

## Get Started

1. Run command "npm install" to install node_modules and all dependencies in both backend and frontend folders( use "cd school-managment-UI" and "school-managment-backend" for accesing frontend and backend respectively).
2. Use "nodemon app.js" / "node app.js" to run backend
3. Use "npm start" to start frontend
4. For database connection change fields in .env file.

### IMPORTANT NOTE

1. This project contains basic implementation of backend required for creating college website. We can modify and add extra complex functionality.
2. In frontend only few functionalities are added to show how can we access API in frontend.

## Notes

1. In frontend only basic layout is created. Functionality of Login and registering student as well as admin is implemented. For accessing admin panel go to "http://localhost:3000/admin"
2. In frontend filling application form and tracking status for student is implemented. In admin panel accessing all applications and changing status of application functionality is implmented.
3. In backend Register, Login, Authorization, Admission module, Student module, Library module, Event module, News module, Faculty module, Contact Us module, Career services module, Alumni module implemented.
4. Middleware is created for authorization which verifies the user.
5. In admission module API for application form and admission notices is created. Access it by using following urls.
   - http://localhost:4000/student/getData --> for getting all application form
   - http://localhost:4000/student/studentform --> for submitting application form
   - http://localhost:4000/student/changestatus --> for changing status of application form
   - http://localhost:4000/admission/getadmissionnotice --> for fetching all admission notices
6. In Student module API for fetching grades and attendance is created. Access it by using following urls
   - http://localhost:4000/getattendance --> for fetching attendance.
   - http://localhost:4000/getgrades --> for fetching grades.
7. In Library module API for fetching library catalog and digital library resources is created. Access it by using following urls.
   - http://localhost:4000/library/librarycatalog --> for fetching all library catalog entries
   - http://localhost:4000/library/digitallibrary --> for fetching all digital library resources
8. In Event module API for fetching all events, for adding new event, for registering to an event, for fetching event gallery is created. Access it by using following urls.
   - http://localhost:4000/events (get request) --> for fetching all events
   - http://localhost:4000/events (post request) --> for adding new events
   - http://localhost:4000/registerevent --> for registering to an event
   - http://localhost:4000/eventgalleries/:eventId --> for fetching event galleries
9. In News module API for fetching all news and adding new news is created. Access it by using following urls.
   - http://localhost:4000/news (get request) --> for fetching all news
   - http://localhost:4000/news (post request) --> for adding new news
10. In faculty module API for fetching all directory list, fetching faculty profiles, accessing one faculty, creating new directory, creating new faculty is created. Access it by using following urls
    - http://localhost:4000/faculty/directory (get request) --> fetching all directory list
    - http://localhost:4000/faculty/faculty (get request) --> fetching all faculty profiles.
    - http://localhost:4000/faculty/faculty/:directorylistingId --> fetching particular faculty profile
    - http://localhost:4000/faculty/directory (post request) --> for creating new directory entry
    - http://localhost:4000/faculty/faculty (post request) --> for adding new faculty profile
11. In Contact us module API is created for fetching all contact information and posting a new inquiry is created. Access it by using following urls
    - http://localhost:4000/contact --> for fetching all contact information
    - http://localhost:4000/inquiry --> for posting new inquiry
12. In Career services module API for fetching all job positing, fetcing career counselling resources, fetching employer engagement events, for adding new job, for adding new career counselling resources, for adding new employer engagement event. Access it by using following urls
    - http://localhost:4000/career/joblist (get request) --> for fetching all job listing
    - http://localhost:4000/career/resources (get request) --> for fetching all career counselling resources.
    - http://localhost:4000/career/events (get request) --> for fetching all employer engagment events.
    - http://localhost:4000/career/joblist (post request) --> for adding new job listing
    - http://localhost:4000/career/resources (post request) --> foradding new career counselling resources.
    - http://localhost:4000/career/events (post request) --> foradding new employer engagment events.
13. In Alumni module API for registering for and alumni, fetching all events, fetching alumni success stories is created.Access it by using following urls
    - http://localhost:4000/alumni/register --> for registering into alumni portal
    - http://localhost:4000/alumni/events --> for fetching all events
    - http://localhost:4000/alumni/successstories --> for fetching success stories
