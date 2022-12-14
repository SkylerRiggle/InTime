# InTime - An Overview
InTime is a web-based project created by Rachelle Phipps, Katie Carbonell, and Skyler Riggle for CS-3203 Software Engineering. The application is designed to deliver its user information related to the timeline of company's interview process (with an emphasis on tech related internships). We have done this by creating a backend server to interface with data related to the site and timelines. We have also created a nice frontend interface application for users to interact with our site.

To learn more about running our application, see below:

# Prerequisites
To run our application, you will need the following on your machine:
1. NodeJS [https://nodejs.org/en/download/]

# Running the Application
## Pre-Requisites
### Package Dependencies
Firstly, you'll need to install all of the needed packages to run both the server and client. To do this, simply enter into the server/client folder and run the command:
```
npm install
``` 
Then repeat this step for the other application folder and you should be good to go.

## Server
### Running the Server
Finally, to run the server, remain in the server's root directory and run the command:
```
npm start
```
Once the server has successfully started and connected with the database, a confirmation message should appear.

## Client
### Running the Client
This application is quite a bit more straight-forward in comparison to the server application. Just enter into the client root folder and enter the command:
```
npm start
```
Then ta-da! You should have a running and linked client-server-database application! The client app should have automatically opened in your browser, but if not, just punch in the following URL: http://localhost:3000/

### Example User Account
To login to the application, you can either create a new account, or use the example account added to the database through the seeder. Here's the account's credentials (but don't tell anyone ;) ):
- USERNAME: Kate2
- PASSWORD: password