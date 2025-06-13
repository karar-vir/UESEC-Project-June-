# UESEC-Project-June-
UESEC Personnel & Mission Management Portal

Web application for HR staff to house personnel and mission records of the UESEC Space Fleet.

Users are able to add, edit, view, and delete personnel and mission records through easy-to-use HTML forms. The data is housed in a MongoDB Atlas database.

 What This App Uses

MongoDB Atlas – to house personnel and mission data
Mongoose – to build data models and talk to MongoDB
Express.js – to handle server-side logic and API routes
Node.js – employed as the backend runtime environment
HTML & EJS templates – for the front-end form and layout
MVC framework – the code structured into Models, Views, and Controllers

What You Can Do

Personnel Management
Insert new personnel (name, service ID, enlistment date, specialty)
Show all records of personnel
Update existing personnel details
Delete personnel details

Mission Management
Insert missions (mission ID, ship assigned, destination, purpose)
View mission details
Update mission details
Remove missions

Ships Section
Ships appear on both Personnel and Mission pages
A "Refresh" button loads the previous ship list from the database

Project Structure (MVC)

 `models/` – Mongoose models for Personnel and Missions
`views/` – EJS templates with HTML forms
`routes/` – Express routes and API endpoints
`public/` – Static files (CSS, JS if needed)
`server.js` – App entry point

How It Works

1. User input is collected by HTML forms
2. Forms pass data to Express routes using RESTful API (GET, POST, PUT, DELETE)
3. Express communicates with MongoDB Atlas using Mongoose
4. Database gets updated and frontend shows updated data
Notes

Store database credentials in a `.env` file
Have `.env` not be excluded by `.gitignore` so it will not get pushed to GitHub
Use MongoDB Compass to view your data while coding
